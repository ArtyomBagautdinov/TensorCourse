import React from 'react';
import ReactDOM from 'react-dom';
import close from './img/other/close.svg';
import './css/Modal.css'

/**
 * Компонент всплывающего окна
 */

 
class Modal extends React.Component {

    constructor(props){
        super();
        this.state ={
            imagePath: props.imagePath,
            fullName : props.fullName,
            who : props.who,
            birthDate : new Date(props.birthDate).toLocaleDateString(),
            type : props.type
        }
    }

    render(){
            return(
                <center className="center">
                    <div className="modal-card">
                        <div className="modal-card__container">
                            <div className="modal-card__info">
                                <div className="info__name">{this.state.fullName}</div>
                                <div className="info__birthday">День рождения: {this.state.birthDate}</div>
                                <div className="info__education">{this.state.type == "student" ? "Учится:" : "Квалификация:" } {this.state.who}</div>
                            </div>
                            <div className="modal-card__avatar">
                                <img src={this.state.imagePath} alt="Student avatar"/>
                            </div>
                            <div id="modal-card__close-button" onClick={this.closeModal.bind(this)}>
                                <img src={close} alt="Student avatar"/>
                            </div>
                        </div>
                    </div>
                </center>
                );
    }

  
    closeModal(){
        ReactDOM.unmountComponentAtNode(document.getElementById('modal-root'));
    }

}

export default Modal;