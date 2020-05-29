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

            let modalCard = document.createElement('div');
            modalCard.setAttribute('class','modal-card');

            let divContainer = document.createElement('div');
            divContainer.setAttribute('class','modal-card__container');
    
            let divInfo = document.createElement('div');
            divInfo.setAttribute('class','modal-card__info');
    
            let divName = document.createElement('div');
            divName.setAttribute('class','info__name');
            divName.innerHTML = name;
    
            let divBirthday = document.createElement('div');
            divBirthday.setAttribute('class','info__birthday');

            const bday = new Date(birthDate).toLocaleDateString()

            divBirthday.innerHTML = "День рождения: " + bday;
    
            let divEducation = document.createElement('div');
            divEducation.setAttribute('class','info__education');

            if(type =='teacher') divEducation.innerHTML = "Квалификация: " + who;
            if(type =='student') divEducation.innerHTML = "Учится: " + who;

            let divAvatar = document.createElement('div');
            divAvatar.setAttribute('class','modal-card__avatar');
    
            let divButton = document.createElement('div');
            divButton.setAttribute('id','modal-card__close-button');
    
            let imgAvatar = document.createElement('img');
            imgAvatar.setAttribute('src',image);
            imgAvatar.setAttribute('alt','Student avatar');
    
            let imgButton = document.createElement('img');
            imgButton.setAttribute('src','img/other/close.svg');
            imgButton.setAttribute('alt','Close');
    
            divAvatar.append(imgAvatar);
    
            divButton.append(imgButton);
    
            divInfo.append(divName);
            divInfo.append(divBirthday);
            divInfo.append(divEducation);
            
            divContainer.append(divInfo);
            divContainer.append(divAvatar);
            divContainer.append(divButton);
            modalCard.append(divContainer);
            center.append(modalCard);

            item.append(center);
    
            return item.innerHTML;
    }

    afterMount = () => {
        this.container.querySelector('#modal-card__close-button').addEventListener('click', ()=> this.unmount());
    }
}