

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

    

}

const dataSet = [
    {
        fullName : "Маша Двойная-фамилия",
        education : "УГАТУ 2 курс",
        birthDate : "11 апреля 1999",
        imagePath : "img/avatars/ava02.jpg"
    },
    {
        fullName : "Анна Коренина",
        education : "СурГУ 3 курс",
        birthDate : "12 апреля 1999",
        imagePath : "img/avatars/ava03.jpg"
    },
    {
        fullName : "Пётр Раскольников",
        education : "БГУ 4 курс",
        birthDate : "13 апреля 1999",
        imagePath : "img/avatars/ava04.jpg"
    },
    {
        fullName : "Анна Генриетта",
        education : "БГА 1 курс",
        birthDate : "14 апреля 1999",
        imagePath : "img/avatars/ava05.jpg"
    },
    {
        fullName : "Нил Гейман",
        education : "БГУ 4 курс",
        birthDate : "15 апреля 1999",
        imagePath : "img/avatars/ava06.jpg"
    },
    {
        fullName : "Артем Багаутдинов",
        education : "БФУ 3 курс",
        birthDate : "16 апреля 1999",
        imagePath : "img/avatars/ava10.jpg"
    },
    {
        fullName : "Тинки",
        education : "БФУ 3 курс",
        birthDate : "17 апреля 1999",
        imagePath : "img/avatars/ava07.png"
    },
    {
        fullName : "Винки",
        education : "БФУ 3 курс",
        birthDate : "18 апреля 1999",
        imagePath : "img/avatars/ava08.png"
    },
    {
        fullName : "Лолли Поп",
        education : "БФУ 3 курс",
        birthDate : "16 апреля 1999",
        imagePath : "img/avatars/ava09.png"
    }
];

const appendStudentBlock = (student)=>{
    let div_item = document.createElement('div');
    div_item.setAttribute('class','hero__item-student');

    let div_container = document.createElement('div');
    div_container.setAttribute('class','item-student__container');

    let div_image = document.createElement('div');
    div_image.setAttribute('class','item-student__image');

    let image = document.createElement('img');
    image.setAttribute('src',student._imagePath);
    image.setAttribute('alt','Student avatar');

    let div_info = document.createElement('div');
    div_info.setAttribute('class','item-student__student-info');

    let div_name = document.createElement('div');
    div_name.setAttribute('class','student-info__name');
    div_name.innerHTML = student._fullName;

    let div_university = document.createElement('div');
    div_university.setAttribute('class','student-info__university');
    div_university.innerHTML = student._education;


    div_image.append(image);

    div_info.append(div_name);
    div_info.append(div_university);

    div_container.append(div_image);
    div_container.append(div_info);

    div_item.append(div_container);

    document.getElementById('hero__container').append(div_item);

}

const objectSet = dataSet.map((currentValue)=>{
    const student = new Student(currentValue);
    return student;
});

objectSet.forEach((item)=>{
    appendStudentBlock(item);
})



const modal = document.getElementsByClassName('modal-card')[0];

Array.prototype.forEach.call(document.querySelectorAll('.hero__item-student'), (div,index)=>{
  
    div.addEventListener('click',()=>{
        
        modal.innerHTML = `<div class="modal-card__container">
                                <div class="modal-card__info">
                                    <div class="info__name">`+ objectSet[index]._fullName+`</div>
                                    <div class="info__birthday">`+ objectSet[index]._birthDate+`</div>
                                    <div class="info__education">`+ objectSet[index]._education+`</div>
                                </div>
                                <div class="modal-card__avatar">
                                    <img src="`+ objectSet[index]._imagePath+`" alt="Student avatar">
                                </div>
                                <div id="modal-card__close-button">
                                    <img src="img/other/close.svg" alt="close button">
                                </div>
                            </div>`

        
        modal.classList.add('modal-card-vis'); 

        const close_modal = document.getElementById('modal-card__close-button');

        close_modal.addEventListener('click',()=>{
            modal.classList.remove('modal-card-vis'); 
        })
    });
})



