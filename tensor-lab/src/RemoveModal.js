import React from 'react';
import ReactDOM from 'react-dom';
import DataSet from './DataSet.js'
import close from './img/other/close.svg';
import './css/ChangeModal.css';


/**
 * Компонент всплывающего окна для добавления студента или учителя в базу данных
 */

class RemoveModal extends React.Component {

    constructor(){
        super();
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
                            <p>Введите ID студента или учителя, которого хотите удалить</p>
                        </div>
                       
                        <div className="name-row">
                            <input className="input" type="text" placeholder="Введите Id" />
                        </div>
                        <div className="post-row">
                            <button className="post-button" onClick={this.sendData.bind(this)}>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    closeModal(){
        ReactDOM.unmountComponentAtNode(document.getElementById('modal-root'));
    }


    sendData(){
         const  set = new DataSet({object : 'person'})
         const getId = parseInt(document.getElementsByClassName('input')[0].value);
         if(!isNaN(getId)){
            set.delete(getId);
            alert("Карточка с ID " + getId + " была удалена из базы");
         }
         else {
             alert("Введите корректные данные");
         }
         
    }
    
}

export default RemoveModal;
    