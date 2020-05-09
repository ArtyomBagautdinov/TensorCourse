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
    },
    {
        fullName : "Тинки",
        education : "БФУ 3 курс",
        birthDate : new Date(1999, 3, 15),
        imagePath : "img/avatars/ava07.png"
    },
    {
        fullName : "Винки",
        education : "БФУ 3 курс",
        birthDate : new Date(1999, 3, 16),
        imagePath : "img/avatars/ava08.png"
    },
    {
        fullName : "Лолли Поп",
        education : "БФУ 3 курс",
        birthDate : new Date(1999, 3, 17),
        imagePath : "img/avatars/ava09.png"
    }
];


class Student {
    constructor(params){
        this.fullName = params.fullName;
        this.education = params.education;
        this.birthDate = params.birthDate;
        this.imagePath = params.imagePath;
    }

    get fullName() {
        return this._fullName;
    }

    get birthDate () {
        return this._birthDate;
    }

    get education() {
        return this._education;
    }

    get imagePath() {
        return this._imagePath;
    }

    set fullName(value) {
        this._fullName = value;
    }

    set birthDate (value) {
        this._birthDate = value;
    }

    set education(value) {
        this._education = value;
    }

    set imagePath(value) {
        this._imagePath = value;
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
        const html = `<div class="modal-card__container">
                            <div class="modal-card__info">
                                <div class="info__name">` + this._fullName + `</div>
                                <div class="info__birthday"> День рождения: ` + this._birthDate.toDateString() + `</div>
                                <div class="info__education">Учится: ` + this._education + `</div>
                            </div>
                            <div class="modal-card__avatar">
                                <img src="`+ this._imagePath+`" alt="Student avatar">
                            </div>
                            <div id="modal-card__close-button">
                                <img src="img/other/close.svg" alt="close button">
                            </div>
                        </div>`
        return html;
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

const objectSet = dataSet.map((currentValue)=>{
    const student = new Student(currentValue);
    return student;
});


objectSet.forEach((item)=>{
    item.appendStudentBlock();
})


