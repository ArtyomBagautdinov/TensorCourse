import {Component} from '../js/components/component.js'
import {Teacher} from '../js/components/teacher.js'
import {Student} from '../js/components/student.js'
import {School} from '../js/school.js';
import {ComponentFactory} from '../js/factory.js'
import {DataSet} from '../js/dataSet.js';
import {Header} from '../js/components/header.js'
import {Hero} from '../js/components/hero.js'
import {Loader} from '../js/components/loader.js'
import {Person} from '../js/components/person.js'
import {Pagination} from '../js/components/pagination.js'
import {Modal} from '../js/components/modal.js'
import {InputModal} from '../js/components/inputModal.js'
import {AddMember} from '../js/components/addMember.js'

'use strict';

describe('Тестируем базовый компонент Component' , function(){

        it('Конструирование компонента Component', function(){
            const component = new Component({});

            assert(component instanceof Component);

        });

        it('Рендер компонента Component', function(){
            const component = new Component({});

            let render = component.render();

            assert.equal(render,'<div></div>');
        });

        it('Монтирование компонента Component', function(){
            const component = new Component({});

            let elem = document.createElement('div');

            component.mount(document.body);

            assert.equal(component.getContainer().innerHTML,``);

        });

        it('Размонтирование компонента Component', function(){
            const component = new Component({});

            let elem = document.createElement('div');

            component.mount(document.body);

            component.unmount();

            assert.equal(component.getContainer() , undefined);
            
        });


});

describe('Тестируем класс School', function(){
        
        it('Конструирование класса School', function(){
            const school = new School();

            assert(school instanceof School);

        });
     
        it('Тестируем addMember',function(){
            const student = new Student({
                id: 1,
                fullName: "Маша Двойная-фамилия",
                education: "УГАТУ 2 курс",
                birthDate: "1999-03-09T00:00:00.000Z",
                imagePath: "img/avatars/ava02.jpg"  
                });

            const teacher = new Teacher({
                            id: 3,
                            fullName: "Винки",
                            qualification: "Senior дизайнер",
                            birthDate: "1999-03-16T00:00:00.000Z",
                            imagePath: "img/avatars/ava08.png"
                            });
                        
                           
            const school = new School();

             school.addMember(student);
             school.addMember(teacher);
                 
            assert(school.getMembers()[0] instanceof Student);
            assert(school.getMembers()[1] instanceof Teacher);
        });

       
        it('Тестируем clearAll',function(){
            const school = new School(); 

            school.clearAll();

            assert(school.getMembers().length == 0);
            
        });

});

describe('Тестируем класс ComponentFactory', function(){
        
        it('Тест конструирования фабрики', function(){
            const factory = new ComponentFactory();

            assert(factory instanceof ComponentFactory);
            
        });

        it('Тестирование create', function(){
            const factory = new ComponentFactory();

            const student = factory.create(Student,{});
            const teacher = factory.create(Teacher,{});

            assert(student instanceof Student);
            assert(teacher instanceof Teacher);
        });
     
});

describe('Тестируем класс DataSet', function(){
        
        it('Тест конструирования DataSet', function(){

            const dataSet = new DataSet(
                                {
                                object : 'person'
                                });

            assert(dataSet instanceof DataSet);
            assert.equal(dataSet.getHost(),'http://localhost:8080/api/');
            
        });
    
});


describe('Тестируем компонент Header', function(){
        
    it('Тест конструктора Header', function(){
        const header = new Header();

        assert(header instanceof Header);
    });

    it('Тест метода render()', function(){
        const _title = 'Название школы';

        const _description = 'Описание школы';

        const header = new Header();

        assert.equal(header.render({title : _title, description : _description}),`<header class="header"><div class="header__container"><div class="header__headline-block"><div class="headline-block__row"><div class="row__logo"><img src="img/other/logo.png" alt="Tensor company logo" width="25px" heigth="20px"></div><div class="row__headline"><span title="Tensor School">${_title}</span></div></div><div class="headline-block__border"></div></div><div class="header__description">${_description}</div></div></header>`);
        
    });

});


describe('Тестируем компонент Hero', function(){
        
    it('Тест конструктора Hero', function(){
        const hero = new Hero();

        assert(hero instanceof Hero);
    });

    it('Тест метода render()', function(){

        const hero = new Hero();
        
        assert.equal(hero.render(),`<main class="hero"><div id="hero__container"></div></main>`);
        
    });

});

describe('Тестируем компонент Loader', function(){
        
    it('Тест конструктора Loader', function(){
        const loader = new Loader();

        assert(loader instanceof Loader);
    });

    it('Тест метода render()', function(){

        const loader = new Loader();
        
        assert.equal(loader.render(),`<div class="lds-ellipsis"><div></div><div></div><div></div></div>`);
        
    });

});


describe('Тестируем компонент Student', function(){
        
    it('Тест конструктора Student', function(){
        const _id = 1;
        const _fullName = 'Маша Двойная-фамилия';
        const _education = 'УГАТУ 2 курс';
        const _birthDate = '1999-03-09T00:00:00.000Z';
        const _imagePath = 'img/avatars/ava02.jpg';

        const student = new Student({
            id: _id,
            fullName: _fullName,
            education: _education,
            birthDate: _birthDate,
            imagePath: _imagePath  
            });

        assert(student instanceof Student);
    });

    it('Тест метода render()', function(){

        const _id = 1;
        const _fullName = 'Маша Двойная-фамилия';
        const _education = 'УГАТУ 2 курс';
        const _birthDate = '1999-03-09T00:00:00.000Z';
        const _imagePath = 'img/avatars/ava02.jpg';

        const student = new Student({
            id: _id,
            fullName: _fullName,
            education: _education,
            birthDate: _birthDate,
            imagePath: _imagePath  
            });

        assert.equal(student.render(),`<div class="hero__item-student"><div class="item-student__container"><div class="item-student__image"><img src="${_imagePath}" alt="Student avatar"></div><div class="item-student__student-info"><div class="student-info__name">${_fullName}</div><div class="student-info__university">${_education}</div></div></div></div>`);
        
    });


});


describe('Тестируем компонент Teacher', function(){
        
    it('Тест конструктора Teacher', function(){
        const _id = 1;
        const _fullName = 'Маша Двойная-фамилия';
        const _education = 'УГАТУ 2 курс';
        const _birthDate = '1999-03-09T00:00:00.000Z';
        const _imagePath = 'img/avatars/ava02.jpg';

        const teacher = new Teacher({
            id: _id,
            fullName: _fullName,
            education: _education,
            birthDate: _birthDate,
            imagePath: _imagePath  
            });

        assert(teacher instanceof Teacher);
    });

    it('Тест метода render()', function(){

        const _id = 1;
        const _fullName = 'Маша Двойная-фамилия';
        const _qualification = 'Senior разработчик';
        const _birthDate = '1999-03-09T00:00:00.000Z';
        const _imagePath = 'img/avatars/ava02.jpg';

        const teacher = new Teacher({
            id: _id,
            fullName: _fullName,
            qualification: _qualification,
            birthDate: _birthDate,
            imagePath: _imagePath  
            });

        assert.equal(teacher.render(),`<div class="hero__item-student"><div class="item-teacher__container"><div class="item-student__image"><img src="${_imagePath}" alt="Student avatar"></div><div class="item-student__student-info"><div class="teacher-info__name">${_fullName}</div><div class="teacher-info__university">${_qualification}</div></div></div></div>`);
        
    });

});



describe('Тестируем компонент Person', function(){
        
    it('Тест конструктора Person', function(){
        const _id = 1;
        const _fullName = 'Маша Двойная-фамилия';
        const _education = 'УГАТУ 2 курс';
        const _birthDate = '1999-03-09T00:00:00.000Z';
        const _imagePath = 'img/avatars/ava02.jpg';

        const person = new Person({
            id: _id,
            fullName: _fullName,
            education: _education,
            birthDate: _birthDate,
            imagePath: _imagePath  
            });

        assert(person instanceof Person);
    });
    
});

describe('Тестируем компонент Pagination', function(){
        
    it('Тест конструктора Pagination', function(){
       
        const pagination = new Pagination();

        assert(pagination instanceof Pagination);

    });

    it('Тест метода render() ', function(){
       
        const pagination = new Pagination();

        assert.equal(pagination.render(),`<div class="pagination"><div class="pagination__container"><div class="pagination__left"><img width="100%" height="100%" src="img/other/next.svg" alt="left"></div><div id="pageNum"><p id="num">1</p></div><div class="pagination__right"><img width="100%" height="100%" src="img/other/next.svg" alt="right"></div></div></div>`);
        
    });
    
});

describe('Тестируем компонент Modal', function(){
        
    it('Тест конструктора Modal', function(){
       
        const modal = new Modal();

        assert(modal instanceof Modal);

    });

    it('Тест метода render() ', function(){

        const _fullName = "Маша Двойная-фамилия";
        const _education = "УГАТУ 2 курс";
        const _birthDate = "1999-03-09T00:00:00.000Z";
        const _imagePath = "img/avatars/ava02.jpg";

        const modal = new Modal();

        assert.equal(modal.render({
            image: _imagePath,
            name: _fullName,
            who: _education,
            birthDate: _birthDate,
            type: 'student'
           }),`<div class="center"><div class="modal-card"><div class="modal-card__container"><div class="modal-card__info"><div class="info__name">${_fullName}</div><div class="info__birthday">День рождения: ${new Date(_birthDate).toLocaleDateString()}</div><div class="info__education">Учится: ${_education}</div></div><div class="modal-card__avatar"><img src="${_imagePath}" alt="Student avatar"></div><div id="modal-card__close-button"><img src="img/other/close.svg" alt="Student avatar"></div></div></div></div>`);
        
           const fullName_ = "Маша Двойная-фамилия";
           const qualification_ = "Senior программист";
           const birthDate_ = "1999-03-09T00:00:00.000Z";
           const imagePath_ = "img/avatars/ava02.jpg";

          
           assert.equal(modal.render({
            image: imagePath_,
            name: fullName_,
            who: qualification_,
            birthDate: birthDate_,
            type: 'teacher'
           }),`<div class="center"><div class="modal-card"><div class="modal-card__container"><div class="modal-card__info"><div class="info__name">${fullName_}</div><div class="info__birthday">День рождения: ${new Date(birthDate_).toLocaleDateString()}</div><div class="info__education">Квалификация: ${qualification_}</div></div><div class="modal-card__avatar"><img src="${imagePath_}" alt="Student avatar"></div><div id="modal-card__close-button"><img src="img/other/close.svg" alt="Student avatar"></div></div></div></div>`);
    });
    
});

describe('Тестируем компонент InputModal', function(){
        
    it('Тест конструктора Modal', function(){
        const inputModal = new InputModal();

        assert(inputModal instanceof InputModal);
        assert(inputModal.getIsStudent() == true);
    });

    it('Тест метода render() ', function(){
        const inputModal = new InputModal();

        assert.equal(inputModal.render(),`<div class="center"><div class="inputModal-card"><div class="inputModal-card__container"><div class="button-row"><div id="inputModal-card__close-button"><img src="img/other/close.svg" alt="close"></div></div><div class="disclamer-row"><p>Дорогой пользователь, к нашему великому сожалению сервер сел на диету и поэтому не хочет кушать фотографии. Проявите понимание и в качестве фотографии вставьте ссылку на изоображение. Спасибо за вашу сознательность !</p></div><div class="birth-row"><div class="birth-column"><p>Укажите дату рождения</p><input type="date" id="birthDay-info" value="1969-12-28" name="trip-start" min="1901-01-01" max="2020-05-29"></div></div><div class="type-row"><div class="multi-button"><button id="choose-student">Я студент</button><button id="choose-teacher">Я учитель</button></div></div><div class="name-row"><input class="input" type="text" placeholder="Введите имя" value="Линус Торвальдс"></div><div class="image-row"><input class="input" placeholder="Введите ссылку на вашу аву" value="https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg"></div><div class="education-row"><input class="input" type="text" placeholder="Введите ваше образование"></div><div class="post-row"><button class="post-button">Добавить</button></div></div></div></div>`);
    });
    
});


describe('Тестируем компонент AddMember', function(){
        
    it('Тест конструктора AddMember', function(){
        const addMember = new AddMember();

        assert(addMember instanceof AddMember);
    });

    it('Тест метода render() ', function(){
        const addMember = new AddMember();

        assert.equal(addMember.render(),`<div class="add-member"><div class="add-member__container"><img src="img/other/plus.svg" width="60%" height="60%" alt="add"></div><div class="add__description"><p>Добавить аккаунт</p></div></div>`);
    });
    
});



mocha.run();
