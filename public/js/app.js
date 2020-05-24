
class Component {
    constructor(options) {
        this.options = options;
		this.state = {};
		this.container = undefined;
        this.handlers = {};
    }

    
    mount = (container, position) => {
    
        this.beforeMount();

        const newComponent = document.createElement('div');

        newComponent.innerHTML = this.toString();
		
		this.container = newComponent.firstElementChild;
		
        container.insertAdjacentElement(position || 'beforeend', newComponent.firstElementChild);
		
        newComponent.remove();

        this.afterMount()
    }

    
    update = () => { }

    unmount = () =>  {
        this.beforeUnmount();
		
        this.removeContainer()

        this.afterUnmount();
    }

    beforeMount = () => {}

    afterMount = () => {}

    beforeUnmount = () => {}

    afterUnmount = () => {}

    getContainer = () => {
        if (this.container === undefined) {
            this.container = document.getElementById(this.id);
        }
        return this.container;
    }
	
	removeContainer = () => {
		if (this.container) {
			this.container.remove();
			this.container = undefined;
		}
    }

    render = () => {
        return `<div></div>`;
    }

    toString = () => {
        return this.render(this.options, this.state);
    }
	
    subscribeTo = (target, eventName, handler) => {

        const handlers = this.handlers[eventName] || [];

        handlers.push({target,handler});
        
        this.handlers[eventName] = handlers;

        target.addEventListener(eventName, handler);
    }

    unsubscribeAll = () => {
        for (let eventName in this.handlers) {
            this.unsubscribeByEvent(eventName);
        }
    }


    unsubscribeByEvent = (eventName) => {
        this.handlers[eventName].forEach(element => {
            element.target.removeEventListener(eventName, element.handler);
        });
    }

}

class Header extends Component {
    render = ({title, description}) => {
        return `<header class="header">
        <div class="header__container">
            <div class="header__headline-block">
                <div class="headline-block__row">
                    <div class="row__logo">
                        <img src="img/other/logo.png" alt="Tensor company logo" width="25px" height="20px">
                    </div>
                    <div class="row__headline">
                        <span title="Tensor School">${title}</span>
                    </div>
                </div>
                <div class="headline-block__border"></div>
            </div>
            
            <div class="header__description">
                ${description}
            </div>
        </div>
    </header>`;
    }
}



/**
 * компонент персоны
 */

class Person extends Component {
    constructor({item}) {
        super();
        this.state.item = item;
    }

    render = (options, {item}) => {
        let div_item = document.createElement('div');
        div_item.setAttribute('class','hero__item-student');
    
        let div_container = document.createElement('div');
        div_container.setAttribute('class','item-student__container');
    
        let div_image = document.createElement('div');
        div_image.setAttribute('class','item-student__image');
    
        let image = document.createElement('img');
        image.setAttribute('src',item.imagePath);
        image.setAttribute('alt','Student avatar');
    
        let div_info = document.createElement('div');
        div_info.setAttribute('class','item-student__student-info');
    
        let div_name = document.createElement('div');
        div_name.setAttribute('class','student-info__name');
        div_name.innerHTML = item.fullName;
    
        let div_university = document.createElement('div');
        div_university.setAttribute('class','student-info__university');
        div_university.innerHTML = item.education;
    
    
        div_image.append(image);

        div_info.append(div_name);
        div_info.append(div_university);
    
        div_container.append(div_image);
        div_container.append(div_info);

        div_item.append(div_container);

        return div_item.innerHTML;
    }

    afterMount = () => {
        this.subscribeTo(this.getContainer(), 'click', this.onClick.bind(this));
    }

    onClick = () => {
        this.openPersonPopup(this.state.item);
    }

    openPersonPopup = (item) => {
        if (this.openPopupAction === undefined) {
            this.openPopupAction = factory.create(OpenPopupAction);
        }
        this.openPopupAction.execute({
            caption:  `${item.fullName}`,
            target: this.getContainer(),
            content: `<center >
                        <div class="modal-row"> 
                            <div class="row__info">  
                                <div class="info__text">Имя: ${item.fullName}</div>
                                <div class="info__text">Образование: ${item.education}</div>
                                <div class="info__text">Дата рождения: ${item.birthDate.toLocaleDateString()}</div>
                            </div>
                            <img height="120" width="120" style="border-radius: 50%; object-fit: cover;" src="${item.imagePath || 'img/ui/default_pix.jpg'}" alt="Аватар ${item.fullName}" />
                        </div>
                      </center>`,
            offset: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        });
    }
}


class Popup extends Component {
    render = ({caption, content, contentComponent}) => {
        return `<div class="popup">
                    <div class="popup__header">
                        <img class="popup__closeButton" title="Закрыть" alt="Кнопка закрыть" src="img/ui/close_x.png"/>
                    </div>
                    <div class="popup__content">
                        ${content}
                    </div>
                </div>`;
    }

    afterMount = () => {
        this._closeButton = this.getContainer().querySelector('.popup__closeButton');
        this.subscribeTo(this._closeButton, 'click', this.onClose.bind(this));
        this.setPopupPosition();
    }

    beforeUnmount = () => {
        delete this._closeButton;
    }

    onClose = () => {
        this.close();
    }

    close = () => {
        this.unmount();
    }

    setPopupPosition = () => {
        const container = this.getContainer();
        const offset = this.options.offset;

        container.style.left = offset.left + 'px';
        container.style.top = offset.top + 'px';
        
        let position = this.coutPopupPosition(this.options.target.getBoundingClientRect(), container.getBoundingClientRect());
        container.style.left = position.left + 'px';
        container.style.top = position.top + 'px';
    }

    coutPopupPosition = (target, offset) => {
        let {width=0, height=0, left=0, top=0} = offset || {};
        let {left:tleft=0, top:ttop=0} = target || {};

        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;
        const defOffset = 20; 

        if (left + width === innerWidth) tleft = 0;
        
        left = tleft + left;
        top = ttop - top;

       
        if (tleft + width > innerWidth) left = left + (innerWidth - (width + tleft)) - defOffset;
        

        if (ttop + height >= innerHeight) top = top + (innerHeight - (ttop + height)) - defOffset;
        
        return {left, top};
    }
}


class PopupStack extends Component {
	constructor(options) {
		super(options);
		this.popups = [];
	}
	
    render = () => {
        return `<div class="popup-stack"></div>`;
    }

    clear = () => {
		this.popups.forEach( p => {
			p.unmount();
		});
    }

    append = (options) => {
		const popup = factory.create(Popup, options);
		this.popups.push(popup);
		popup.mount(this.getContainer());
    }
}

class Action {
    execute = (meta) => {
        throw new Error('Здесь должна быть реализация');
    }
}

class OpenPopupAction extends Action {
    execute = (meta) => {
        popupStack.clear();
        popupStack.append(meta);
    }
}

class Factory {
    create = (component, options) => {
        return new component(options || {});
    }
}

const factory = new Factory();

const head = factory.create(Header, {
    title: 'Tensor Scool',
    description: 'Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'  
});

head.mount(document.body,'afterbegin');

const dataSet = [
    {
        fullName : "Маша Двойная-фамилия",
        education : "УГАТУ 2 курс",
        birthDate : new Date(1999, 3, 11),
        imagePath : "img/avatars/ava02.jpg"
    },
    {
        fullName : "Анна Коренина",
        education : "СурГУ 3 курс",
        birthDate : new Date(1999, 3, 10),
        imagePath : "img/avatars/ava03.jpg"
    },
    {
        fullName : "Пётр Раскольников",
        education : "БГУ 4 курс",
        birthDate : new Date(1999, 3, 11),
        imagePath : "img/avatars/ava04.jpg"
    },
    {
        fullName : "Анна Генриетта",
        education : "БГА 1 курс",
        birthDate : new Date(1999, 3, 12),
        imagePath : "img/avatars/ava05.jpg"
    },
    {
        fullName : "Нил Гейман",
        education : "БГУ 4 курс",
        birthDate : new Date(1999, 3, 13),
        imagePath : "img/avatars/ava06.jpg"
    },
    {
        fullName : "Артем Багаутдинов",
        education : "БФУ 3 курс",
        birthDate : new Date(1999, 3, 14),
        imagePath : "img/avatars/ava10.jpg"
    }
];

const container = document.getElementById('hero__container');

dataSet.forEach( (val)=>{
    const person = factory.create(Person, {
        item: val
    });
    person.mount(container);
});


const popupStack = factory.create(PopupStack);

popupStack.mount(document.body);


