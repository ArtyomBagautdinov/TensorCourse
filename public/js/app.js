import {Factory} from './personLib.js';
import {School} from './school.js';
import {dataSet} from './externalData.js';

const school = new School();
const factory = new Factory();

dataSet.forEach((currentValue)=>{
    if(currentValue.hasOwnProperty('education'))
        school.add(factory.create('student',currentValue));
        
    if(currentValue.hasOwnProperty('qualification'))
        school.add(factory.create('teacher',currentValue));

});


school.appendToDOM('hero__container');




// проинициализируем фабрику
// создадим школу (если есть для нее фабрика, то тоже через фабрику) 


// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
/*
school.add( factory.createStudent({ name: 'Vasia' }) );
school.add( factory.createStudent({ name: 'Petia' }) );
school.add( factory.createTeacher({ name: 'Misha' }) );
*/
// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM

//school.appendToDom(document.body);

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше