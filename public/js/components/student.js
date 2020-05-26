import { Modal } from './modal.js';
import { Person } from './person.js';
/**
 * Компонент карточки студента
 */

export class Student extends Person{
    render = () => {
        this.divContainer.setAttribute('class','item-student__container');
        this.divUniversity.setAttribute('class','student-info__university');
        this.divName.setAttribute('class','student-info__name');

        this.divUniversity.innerHTML = this.item.education;
        this.divImage.append(this.image);

        this.divInfo.append(this.divName);
        this.divInfo.append(this.divUniversity);
    
        this.divContainer.append(this.divImage);
        this.divContainer.append(this.divInfo);

        this.divItem.append(this.divContainer);

        this.result = document.createElement('div');
        this.result.append(this.divItem);
        return this.result.innerHTML;
    }

    afterMount = () => {
        this.container.addEventListener('click', (event) => this.onClick(event));        
    }

    onClick = (event) => {
        if(document.getElementsByClassName('modal-card__container')[0] == undefined){
            const modal = new Modal({
                image: this.item.imagePath,
                name : this.item.fullName,
                who : this.item.education,
                birthDate : this.item.birthDate,
                type: 'student'
            });
            modal.mount(document.body,'afterbegin');
        }
    }

}
