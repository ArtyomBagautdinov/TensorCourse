import {Header} from './components/header.js'
import {Hero} from './components/hero.js'
import {ComponentFactory} from './factory.js'
import {Student} from './components/student.js'
import {Teacher} from './components/teacher.js'
import {dataSet} from './data.js'
import {School} from './school.js'

const factory = new ComponentFactory();

const header = factory.create(
    Header,
    {
    title: 'Tensor School',
    description: 'Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'
    }
);

const hero = factory.create(Hero);

header.mount(document.body,'afterbegin');

hero.mount(document.body);

const school = new School();

dataSet.forEach((val)=>{
    if(val.hasOwnProperty('education')){
        const student = factory.create(Student,val);
        school.addMember(student);
    }
    if(val.hasOwnProperty('qualification')){
        const teacher = factory.create(Teacher,val);
        school.addMember(teacher);
    }
})

school.mountAll(document.getElementById('hero__container'))


// Тест на удаление карточки из DOM
// setTimeout(()=> school.removeMember('Анна Генриетта'),5000);