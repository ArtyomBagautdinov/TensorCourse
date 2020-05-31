import {Component} from './component.js'
import {ComponentFactory} from '../factory.js'
import {DataSet} from '../dataSet.js'
/**
 * Компонент всплывающего окна для добавления студента или учителя в базу данных
 */

export class InputModal extends Component {
    constructor(){
        super();
        this.isStudent = true;
    }

    getIsStudent = () => {
        return this.isStudent;
    }
    render = () => {
            let item = document.createElement('div'); 
            
            let center = document.createElement('div');
            center.setAttribute('class','center');

            let modalCard = document.createElement('div');
            modalCard.setAttribute('class','inputModal-card');

            let divContainer = document.createElement('div');
            divContainer.setAttribute('class','inputModal-card__container');

            let rowDisclaimer = document.createElement('div');
            rowDisclaimer.setAttribute('class','disclamer-row');

            let disclamer = document.createElement('p');
            disclamer.innerHTML = 'Дорогой пользователь, к нашему великому сожалению сервер сел на диету и поэтому не хочет кушать фотографии. Проявите понимание и в качестве фотографии вставьте ссылку на изоображение. Спасибо за вашу сознательность !';

            
            let rowHeadMenu = document.createElement('div');
            rowHeadMenu.setAttribute('class','button-row')

            let rowName = document.createElement('div');
            rowName.setAttribute('class','name-row');
            
            let inputName = document.createElement('input');
            inputName.setAttribute('class','input')
            inputName.setAttribute('type','text');
            inputName.setAttribute('placeholder','Введите имя');
            inputName.setAttribute('value','Линус Торвальдс');

            let rowImage = document.createElement('div');
            rowImage.setAttribute('class','image-row');

            
            let inputImage = document.createElement('input');
            inputImage.setAttribute('class','input')
            inputImage.setAttribute('placeholder','Введите ссылку на вашу аву');
            inputImage.setAttribute('value','https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg');

            let rowType = document.createElement('div');
            rowType.setAttribute('class','type-row');
            
            let rowBirth = document.createElement('div');
            rowBirth.setAttribute('class','birth-row');

            let columnBirth = document.createElement('div');
            columnBirth.setAttribute('class','birth-column');

            let birthInput = document.createElement('input');
            birthInput.setAttribute('type','date');
            birthInput.setAttribute('id','birthDay-info');
            birthInput.setAttribute('value','1969-12-28');
            birthInput.setAttribute('name','trip-start');
            birthInput.setAttribute('min','1901-01-01');
            birthInput.setAttribute('max','2020-05-29');

            let birthTitle = document.createElement('p');
            birthTitle.innerHTML = 'Укажите дату рождения';

            let multiButton = document.createElement('div');
            multiButton.setAttribute('class','multi-button');

            let teacherButton = document.createElement('button');
            teacherButton.innerHTML = 'Я учитель';
            teacherButton.setAttribute('id','choose-teacher');

            let studentButton = document.createElement('button');
            studentButton.setAttribute('id','choose-student');
            studentButton.innerHTML = 'Я студент';

            let divButton = document.createElement('div');
            divButton.setAttribute('id','inputModal-card__close-button');

            let imgButton = document.createElement('img');
            imgButton.setAttribute('src','img/other/close.svg');
            imgButton.setAttribute('alt','close');

            let rowEducation = document.createElement('div');
            rowEducation.setAttribute('class','education-row');

            let inputEducation = document.createElement('input');
            inputEducation.setAttribute('class','input')

            inputEducation.setAttribute('type','text');
            inputEducation.setAttribute('placeholder','Введите ваше образование');
            

            let rowPost = document.createElement('div');
            rowPost.setAttribute('class','post-row');

            let postButton = document.createElement('button');
            postButton.setAttribute('class','post-button');
            postButton.innerHTML = 'Добавить'

            rowPost.append(postButton);

            rowEducation.append(inputEducation);

            rowDisclaimer.append(disclamer);

            divButton.append(imgButton);
            rowHeadMenu.append(divButton);

            rowName.append(inputName);

            multiButton.append(studentButton);
            multiButton.append(teacherButton);

            rowType.append(multiButton);

            columnBirth.append(birthTitle);
            columnBirth.append(birthInput);
            rowBirth.append(columnBirth);

            rowImage.append(inputImage);
            
            divContainer.append(rowHeadMenu);
            divContainer.append(rowDisclaimer);
            divContainer.append(rowBirth);
            divContainer.append(rowType);
            divContainer.append(rowName);
            divContainer.append(rowImage);
            divContainer.append(rowEducation);
            divContainer.append(rowPost);

            modalCard.append(divContainer);
            center.append(modalCard);

            item.append(center);

            return item.innerHTML;
    }

    afterMount = () => {
        this.container.querySelector('#inputModal-card__close-button').addEventListener('click', ()=> this.unmount());

        document.getElementById('choose-teacher').addEventListener('click', ()=> {
            this.isStudent = false;
            document.getElementsByClassName('input')[2].removeAttribute('placeholder');
            document.getElementsByClassName('input')[2].setAttribute('placeholder','Введите свою квалификацию');

        });

        document.getElementById('choose-student').addEventListener('click', ()=> {
            this.isStudent = true;
            document.getElementsByClassName('input')[2].removeAttribute('placeholder');
            document.getElementsByClassName('input')[2].setAttribute('placeholder','Введите своё образование');
        });

        document.getElementsByClassName('post-button')[0].addEventListener('click', ()=> {

            const factory = new ComponentFactory();
            const  set = factory.create(
                DataSet,
                {
                object : 'person'
                }
            )

            const getBirth = document.getElementById('birthDay-info').value;
            const getName = document.getElementsByClassName('input')[0].value;
            const getImage = document.getElementsByClassName('input')[1].value;
            const getQE = document.getElementsByClassName('input')[2].value;
            
            if(getBirth!='' && getName!='' && getImage!='' && getQE!=''){
                if(this.isStudent){
                    set.read().then( res => {
                        const id = res.length + 1;
                        set.create(
                            {  
                            fullName: getName,
                            qe: getQE ,
                            birthDate: getBirth ,
                            imagePath: getImage
                            },
                            id,
                            'student'
                        )
                    })
                }
                if(!this.isStudent){
                    set.read().then( res => {
                        const id = res.length + 1;
                        set.create(
                            {  
                            fullName: getName,
                            qe: getQE ,
                            birthDate: getBirth ,
                            imagePath: getImage
                            },
                            id,
                            'teacher'
                        )
                    })
                }
                alert('Пользователь добавлен в базу');
            }
            else{
                alert('Вы ввели не все данные !');
            }
        });

    }

}
    