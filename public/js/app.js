import {Component} from './component.js'
import {dataSet} from './data.js'
import {Header} from './header.js'
import {Factory} from './factory.js'
import {PopupStack} from './popup.js'

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

const factory = new Factory();

const head = factory.create(Header, {
    title: 'Tensor Scool',
    description: 'Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'  
});

head.mount(document.body,'afterbegin');

const container = document.getElementById('hero__container');

dataSet.forEach( (val)=>{
    const person = factory.create(Person, {
        item: val
    });
    person.mount(container);
});


const popupStack = factory.create(PopupStack);

popupStack.mount(document.body);


