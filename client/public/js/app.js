import {Header} from './components/header.js'
import {Hero} from './components/hero.js'
import {ComponentFactory} from './factory.js'
import {Student} from './components/student.js'
import {Teacher} from './components/teacher.js'
import {School} from './school.js'
import {DataSet} from './dataSet.js'
import {StudentModel} from './models/StudentModel.js'
import {Pagination} from './components/pagination.js'
import {Loader} from './components/loader.js'
import {AddMember} from './components/addMember.js'

const factory = new ComponentFactory();

const header = factory.create(
    Header,
    {
    title: 'Tensor School',
    description: 'Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'
    }
);

const hero = factory.create(Hero);

const pagination = factory.create(Pagination);

const loader = factory.create(Loader);

const addMember = factory.create(AddMember);

header.mount(document.body,'afterbegin');

hero.mount(document.body);

pagination.mount(document.body);

addMember.mount(document.body);

const school = new School();

const  set = factory.create(
    DataSet,
    {
    object : 'person'
    }
)

//симуляция ожидания данных
loader.mount(document.getElementById('hero__container'));

setTimeout (()=> {
    loader.unmount();
    set.readPage(1,3).then( res =>{
        res.forEach( (val)=>{
        if(val.hasOwnProperty('education')){
            const student = factory.create(Student,val);
            school.addMember(student);
        }
        if(val.hasOwnProperty('qualification')){
            const teacher = factory.create(Teacher,val);
            school.addMember(teacher);
        }
        })
        school.mountAll(document.getElementById('hero__container'));
        if(document.getElementById('hero__container').innerHTML==null) loader.mount(document.getElementById('hero__container'));
        
    });
    
},2000);



//set.delete(11);
//Тест на удаление карточки из БД

/*
Тест на обновление данных (сначала надо добавить, по дефолту в базе такого аккаунта нет)

set.update(13,
            {  
            fullName: "Микус Торвальдс",
            qe: "Senior Senior" ,
            birthDate: "1969-12-28" ,
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg"
            },
            'teacher'
)

*/