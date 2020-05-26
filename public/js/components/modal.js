import {Component} from './component.js'

/**
 * Компонент всплывающего окна
 */
export class Modal extends Component {
    render = ({image,name,who,birthDate,type}) => {
            let item = document.createElement('div'); 
            
            //<div class="modal-card"></div>

            let center = document.createElement('div');
            center.setAttribute('class','center');

            let modal_card = document.createElement('div');
            modal_card.setAttribute('class','modal-card');

            let div_container = document.createElement('div');
            div_container.setAttribute('class','modal-card__container');
    
            let div_info = document.createElement('div');
            div_info.setAttribute('class','modal-card__info');
    
            let div_name = document.createElement('div');
            div_name.setAttribute('class','info__name');
            div_name.innerHTML = name;
    
            let div_birthday = document.createElement('div');
            div_birthday.setAttribute('class','info__birthday');
            div_birthday.innerHTML = "День рождения: " + birthDate.toLocaleDateString();
    
            let div_education = document.createElement('div');
            div_education.setAttribute('class','info__education');

            if(type =='teacher') div_education.innerHTML = "Квалификация: " + who;
            if(type =='student') div_education.innerHTML = "Учится: " + who;

            let div_avatar = document.createElement('div');
            div_avatar.setAttribute('class','modal-card__avatar');
    
            let div_button = document.createElement('div');
            div_button.setAttribute('id','modal-card__close-button');
    
            let img_avatar = document.createElement('img');
            img_avatar.setAttribute('src',image);
            img_avatar.setAttribute('alt','Student avatar');
    
            let img_button = document.createElement('img');
            img_button.setAttribute('src','img/other/close.svg');
            img_button.setAttribute('alt','Student avatar');
    
            div_avatar.append(img_avatar);
    
            div_button.append(img_button);
    
            div_info.append(div_name);
            div_info.append(div_birthday);
            div_info.append(div_education);
            
            div_container.append(div_info);
            div_container.append(div_avatar);
            div_container.append(div_button);
            modal_card.append(div_container);
            center.append(modal_card);

            item.append(center);
    
            return item.innerHTML;
    }

    afterMount = () => {
        this.container.querySelector('#modal-card__close-button').addEventListener('click', ()=> this.unmount());
    }
}