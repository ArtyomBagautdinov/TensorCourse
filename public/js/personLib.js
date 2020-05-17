class Person {

    constructor(params){
        this.fullName = params.fullName;
        this.birthDate = params.birthDate;
        this.imagePath = params.imagePath;
    }

    get fullName(){
        return this._fullName;
    }

    get birthDate(){
        return this._birthDate;
    }
    
    get imagePath(){
        return this._imagePath;
    }

    set fullName(value){
        this._fullName = value;
    }

    set birthDate(value){
        this._birthDate = value;
    }
    
    set imagePath(value){
        this._imagePath = value;
    }


    renderItem = (personParam) => {
        let div_item = document.createElement('div');
        div_item.setAttribute('class','hero__item-student');
    
        let div_container = document.createElement('div');
        div_container.setAttribute('class','item-student__container');
    
        let div_image = document.createElement('div');
        div_image.setAttribute('class','item-student__image');
    
        let image = document.createElement('img');
        image.setAttribute('src',this._imagePath);
        image.setAttribute('alt','Student avatar');
    
        let div_info = document.createElement('div');
        div_info.setAttribute('class','item-student__student-info');
    
        let div_name = document.createElement('div');
        div_name.setAttribute('class','student-info__name');
        div_name.innerHTML = this._fullName;
    
        let div_university = document.createElement('div');
        div_university.setAttribute('class','student-info__university');
        div_university.innerHTML = personParam;
    
    
        div_image.append(image);

        div_info.append(div_name);
        div_info.append(div_university);
    
        div_container.append(div_image);
        div_container.append(div_info);

        div_item.append(div_container);

        return div_item;
    }

    renderModal = (valOne,valTwo) =>{

        let item = document.createElement('div'); 

        let div_container = document.createElement('div');
        div_container.setAttribute('class','modal-card__container');

        let div_info = document.createElement('div');
        div_info.setAttribute('class','modal-card__info');

        let div_name = document.createElement('div');
        div_name.setAttribute('class','info__name');
        div_name.innerHTML = this._fullName;

        let div_birthday = document.createElement('div');
        div_birthday.setAttribute('class','info__birthday');
        div_birthday.innerHTML = "День рождения: " + this._birthDate.toLocaleDateString();

        let div_education = document.createElement('div');
        div_education.setAttribute('class','info__education');
        div_education.innerHTML = valOne + ": " + valTwo;

        let div_avatar = document.createElement('div');
        div_avatar.setAttribute('class','modal-card__avatar');

        let div_button = document.createElement('div');
        div_button.setAttribute('id','modal-card__close-button');

        let img_avatar = document.createElement('img');
        img_avatar.setAttribute('src',this._imagePath);
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

        item.append(div_container);

        return item.innerHTML;
    }

}

class Student extends Person {
    constructor(params){
        super(params);
        this.education = params.education;
    }

    get education() {
        return this._education;
    }

    set education(value) {
        this._education = value;
    }

    appendBlock = (point)=>{
        const layout = this.renderItem(this._education);
        const modal = document.getElementsByClassName('modal-card')[0];

        document.getElementById(point).append(layout);  

        layout.addEventListener('click',()=>{
        
            modal.innerHTML = this.renderModal("Обучение",this._education);
    
            modal.classList.add('modal-card-vis'); 
    
            const close_modal = document.getElementById('modal-card__close-button');
    
            close_modal.addEventListener('click',()=>{
                modal.classList.remove('modal-card-vis'); 
            })
        });
    }
}

class Teacher extends Person {
    constructor(params){
        super(params);
        this.qualification = params.qualification;
    }

    get qualification() {
        return this._qualification;
    }

    set qualification(value) {
        this._qualification = value;
    }

    appendBlock = (point) => {
        const layout = this.renderItem(this._qualification);
        const modal = document.getElementsByClassName('modal-card')[0];

        document.getElementById(point).append(layout);  

        layout.addEventListener('click',()=>{
            const modalLayout = this.renderModal('Квалификация',this._qualification);
            modal.innerHTML = modalLayout;
    
            modal.classList.add('modal-card-vis'); 
    
            const close_modal = document.getElementById('modal-card__close-button');
    
            close_modal.addEventListener('click',()=>{
                modal.classList.remove('modal-card-vis'); 
            })
        });
    }

}

export class Factory {
     create = (type,params) => {
        switch(type){
            case 'student':
                return new Student(params);
            case 'teacher':
                return new Teacher(params);
            default:
                return new Person(params);
        }
    }
}
