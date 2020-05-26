import {Component} from './component.js'
import { Modal } from './modal.js';

/**
 * Базовый класс предок для классов Student и Teacher
 */

class Person extends Component {
    constructor(item){
        super();
        this.item = item;
        this.div_item = document.createElement('div');
        this.div_item.setAttribute('class','hero__item-student');
    
        this.div_container = document.createElement('div');
        
        this.div_image = document.createElement('div');
        this.div_image.setAttribute('class','item-student__image');
    
        this.image = document.createElement('img');
        this.image.setAttribute('src',item.imagePath);
        this.image.setAttribute('alt','Student avatar');
    
        this.div_info = document.createElement('div');
        this.div_info.setAttribute('class','item-student__student-info');
    
        this.div_name = document.createElement('div');
        this.div_name.innerHTML = item.fullName;
    
        this.div_university = document.createElement('div');
    }

    get fullName(){
        return this.item.fullName;
    }
    
   
}

/**
 * Компонент карточки студента
 */

export class Student extends Person{
    render = () => {
        this.div_container.setAttribute('class','item-student__container');
        this.div_university.setAttribute('class','student-info__university');
        this.div_name.setAttribute('class','student-info__name');

        this.div_university.innerHTML = this.item.education;
        this.div_image.append(this.image);

        this.div_info.append(this.div_name);
        this.div_info.append(this.div_university);
    
        this.div_container.append(this.div_image);
        this.div_container.append(this.div_info);

        this.div_item.append(this.div_container);

        this.result = document.createElement('div');
        this.result.append(this.div_item);
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

/**
 * Компонент карточки учителя
 */

export class Teacher extends Person{
    
    render = () => {
        this.div_container.setAttribute('class','item-teacher__container');
        this.div_university.setAttribute('class','teacher-info__university');
        this.div_name.setAttribute('class','teacher-info__name');
        
        this.div_university.innerHTML = this.item.qualification;
        this.div_image.append(this.image);

        this.div_info.append(this.div_name);
        this.div_info.append(this.div_university);
    
        this.div_container.append(this.div_image);
        this.div_container.append(this.div_info);

        this.div_item.append(this.div_container);

        this.result = document.createElement('div');
        this.result.append(this.div_item);
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
                who : this.item.qualification,
                birthDate : this.item.birthDate,
                type: 'teacher'
            });
            modal.mount(document.body,'afterbegin');
        }
    }
}





