import React from 'react';
import ReactDOM from 'react-dom';
import DataSet from './DataSet.js'
import close from './img/other/close.svg';
import './css/ChangeModal.css';

/**
 * Компонент всплывающего окна для добавления студента или учителя в базу данных
 */

class ChangeModal extends React.Component {

    constructor(){
        super();
        this.state = {
            isStudent : true
        }
    }

    getIsStudent(){
        return this.state.isStudent;
    }

    render(){
        return(
            <div className="center">
                <div className="inputModal-card">
                    <div className="inputModal-card__container">
                        <div className="button-row">
                            <div id="inputModal-card__close-button" onClick={this.closeModal.bind(this)}>
                                <img src={close} alt="close"/>
                            </div>
                        </div>
                        <div className="disclamer-row">
                            <p>Введите ID пользователя, данные которого вы ходите редактировать, ну и плюс сами новые данные</p>
                        </div>
                        <div className="id-row">
                            <input className="input" type="text" placeholder="Введите ID" />
                        </div>
                        <div className="birth-row">
                            <div className="birth-column">
                                <p>Укажите дату рождения</p>
                                <input type="date" id="birthDay-info"  name="trip-start" min="1901-01-01" max="2020-05-29"/>
                            </div>
                        </div>
                        <div className="type-row">
                            <div className="multi-button">
                                <button id="choose-student" onClick={this.studentChoose.bind(this)} >Я студент</button>
                                <button id="choose-teacher" onClick={this.teacherChoose.bind(this)} >Я учитель</button>
                            </div>
                        </div>
                        <div className="name-row">
                            <input className="input" type="text" placeholder="Введите имя"/>
                        </div>
                        <div clasNames="image-row">
                            <input className="input" placeholder="Введите ссылку на вашу аву" />
                        </div>
                        <div className="education-row">
                            <input className="input" type="text" placeholder="Введите ваше образование"/>
                        </div>
                        <div className="post-row">
                            <button className="post-button" onClick={this.sendData.bind(this)}>Добавить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    closeModal(){
        ReactDOM.unmountComponentAtNode(document.getElementById('modal-root'));
    }

    teacherChoose(){
        this.setState({
            isStudent: false
        }) 
        document.getElementsByClassName('input')[3].removeAttribute('placeholder');
        document.getElementsByClassName('input')[3].setAttribute('placeholder','Введите свою квалификацию');
    }

    studentChoose(){
        this.setState({
            isStudent: true
        }) 
        document.getElementsByClassName('input')[3].removeAttribute('placeholder');
        document.getElementsByClassName('input')[3].setAttribute('placeholder','Введите своё образование');
    }

    sendData(){
            const  set = new DataSet({object : 'person'})

            const getBirth = document.getElementById('birthDay-info').value;
            const getID = parseInt(document.getElementsByClassName('input')[0].value);
            const getName = document.getElementsByClassName('input')[1].value;
            const getImage = document.getElementsByClassName('input')[2].value;
            const getQE = document.getElementsByClassName('input')[3].value;
            
            if(getBirth!='' && getName!='' && getImage!='' && getQE!='' && !isNaN(getID)){
                if(this.state.isStudent){
                    set.update(getID,
                        {  
                        fullName: getName,
                        qe: getQE ,
                        birthDate: getBirth ,
                        imagePath: getImage
                        },
                        'student'
                    )
                }
                if(!this.state.isStudent){
                    set.update(getID,
                        {  
                        fullName: getName,
                        qe: getQE ,
                        birthDate: getBirth ,
                        imagePath: getImage
                        },
                        'teacher'
                    )
                }
                alert('Данные пользователя с ID ' + getID + " были изменены");
            }
            else{
                alert('Данные не корректны или введены не полностью !');
            }
    }
    
}

export default ChangeModal;
    