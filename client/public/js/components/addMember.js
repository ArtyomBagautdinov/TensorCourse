import {Component} from './component.js'
import {InputModal} from './inputModal.js'
import {ComponentFactory} from '../factory.js'
/**
 * Компонент хедера страницы
 */
export class AddMember extends Component {
    render = () =>{
        /*
        <div class="add-member">
            <div class="add-member__container">
                 <img src="img/other/plus.svg" width="60%" height="60%" alt="add">
            </div>
        </div>
        */
        let add = document.createElement('div');
        add.setAttribute('class','add-member');

        let description = document.createElement('div');
        description.setAttribute('class','add__description')

        let p = document.createElement('p');

        let addContainer = document.createElement('div');
        addContainer.setAttribute('class','add-member__container');

        p.innerHTML = 'Добавить аккаунт';
        let img = document.createElement('img');
        img.setAttribute('src','img/other/plus.svg');
        img.setAttribute('width','60%');
        img.setAttribute('height','60%');
        img.setAttribute('alt','add');

        let result = document.createElement('div');

        description.append(p);

        addContainer.append(img);

        add.append(addContainer);
        add.append(description);

        result.append(add);
        return result.innerHTML;
    }

    afterMount = () => {
       const addContainer = document.getElementsByClassName('add-member__container')[0];
       addContainer.addEventListener('click', () => this.onClick());        
    }

    onClick = () => {
        const factory = new ComponentFactory();
        if(document.getElementsByClassName('center')[0] == undefined){
            const inputModal = factory.create(InputModal);
            inputModal.mount(document.body,'afterbegin');
        }
    }

}