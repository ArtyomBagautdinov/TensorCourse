const dataSet = [
    {
        fullName : "Маша Двойная-фамилия",
        education : "УГАТУ 2 курс",
        birthDate : new Date(1999, 3, 11),
        imagePath : "img/avatars/ava02.jpg",
        id: 1
    },
    {
        fullName : "Анна Коренина",
        education : "СурГУ 3 курс",
        birthDate : new Date(1999, 3, 10),
        imagePath : "img/avatars/ava03.jpg",
        id: 2
    },
    {
        fullName : "Пётр Раскольников",
        education : "БГУ 4 курс",
        birthDate : new Date(1999, 3, 11),
        imagePath : "img/avatars/ava04.jpg",
        id: 3
    },
    {
        fullName : "Анна Генриетта",
        education : "БГА 1 курс",
        birthDate : new Date(1999, 3, 12),
        imagePath : "img/avatars/ava05.jpg",
        id: 4
    },
    {
        fullName : "Нил Гейман",
        education : "БГУ 4 курс",
        birthDate : new Date(1999, 3, 13),
        imagePath : "img/avatars/ava06.jpg",
        id: 5
    },
    {
        fullName : "Артем Багаутдинов",
        education : "БФУ 3 курс",
        birthDate : new Date(1999, 3, 14),
        imagePath : "img/avatars/ava10.jpg",
        id: 6
    },{
        fullName : "Тинки",
        qualification : "Senior программист",
        birthDate : new Date(1999, 3, 15),
        imagePath : "img/avatars/ava07.png",
        id: 7
    },
    {
        fullName : "Винки",
        qualification : "Senior дизайнер",
        birthDate : new Date(1999, 3, 16),
        imagePath : "img/avatars/ava08.png",
        id: 8
    },
    {
        fullName : "Лолли Поп",
        qualification : "Middle аналитик",
        birthDate : new Date(1999, 3, 17),
        imagePath : "img/avatars/ava09.png",
        id: 9
    }

];

class Person {

    constructor(params){
        this.fullName = params.fullName;
        this.birthDate = params.birthDate;
        this.imagePath = params.imagePath;
        this.id = params.id;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
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

    renderItem = () => {}

    renderModal = () => {}

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

    renderItem = () => {
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
        div_university.innerHTML = this._education;
    
    
        div_image.append(image);

        div_info.append(div_name);
        div_info.append(div_university);
    
        div_container.append(div_image);
        div_container.append(div_info);

        div_item.append(div_container);

        return div_item;
    }

    renderModal = () =>{
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
        div_education.innerHTML = "Учится: " +this._education;

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

    appendStudentBlock = ()=>{
        const layout = this.renderItem();
        const modal = document.getElementsByClassName('modal-card')[0];

        document.getElementById('hero__container').append(layout);  

        layout.addEventListener('click',()=>{
        
            modal.innerHTML = this.renderModal();
    
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

    renderItem = () => {
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
        div_university.innerHTML = this._qualification;
    
    
        div_image.append(image);

        div_info.append(div_name);
        div_info.append(div_university);
    
        div_container.append(div_image);
        div_container.append(div_info);

        div_item.append(div_container);

        return div_item;
    }

    renderModal = () =>{

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
        div_education.innerHTML = "Квалификация: " +this._qualification;

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

    appendStudentBlock = ()=>{
        const layout = this.renderItem();
        const modal = document.getElementsByClassName('modal-card')[0];

        document.getElementById('hero__container').append(layout);  

        layout.addEventListener('click',()=>{
            const modalLayout = this.renderModal();
            modal.innerHTML = modalLayout;
    
            modal.classList.add('modal-card-vis'); 
    
            const close_modal = document.getElementById('modal-card__close-button');
    
            close_modal.addEventListener('click',()=>{
                modal.classList.remove('modal-card-vis'); 
            })
        });
    }

}

class Factory {
    static create = (type,params) => {
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

class School {

    constructor(){
        if(School.instance) 
            return School.instance;

        School.instance = this;
        this.members = [];
    }

    addMember = (type,currentValue)=>{
        const item = Factory.create(type,currentValue)
        this.members.push(item);
        item.appendStudentBlock();
    }

    getMember = (searchedName) =>{
        return this.members.find((currentValue)=>{
            return( currentValue._fullName == searchedName);
        });
    }

    removeMember = ()=>{
        this.members.pop();
        const removeIndex = document.getElementsByClassName('hero__item-student').length;
        document.getElementsByClassName('hero__item-student')[removeIndex-1].remove();  
    }
    
}

const school = new School();

dataSet.forEach((currentValue)=>{

    if(currentValue.hasOwnProperty('education'))
        school.addMember('student',currentValue);

    if(currentValue.hasOwnProperty('qualification'))
        school.addMember('teacher',currentValue);

});

