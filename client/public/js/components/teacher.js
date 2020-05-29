import { Modal } from './modal.js';
import { Person } from './person.js';
/**
 * Компонент карточки учителя
 */

export class Teacher extends Person{
    
    render = () => {
        this.divContainer.setAttribute('class','item-teacher__container');
        this.divUniversity.setAttribute('class','teacher-info__university');
        this.divName.setAttribute('class','teacher-info__name');
        
        this.divUniversity.innerHTML = this.item.qualification;
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
        const newContainer = this.container.getElementsByClassName('item-teacher__container')[0];
        newContainer.addEventListener('click', (event) => this.onClick(event));        
    }

    onClick = (event) => {
        if(document.getElementsByClassName('center')[0] == undefined){
            const modal = new Modal({
                image: this.item.imagePath,
                name : this.item.fullName,
                who : this.item.qualification,
                birthDate : this.item.birthDate,
                type: 'teacher'
            });
            modal.mount(document.body,'afterbegin');
        }
    }
}

