import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.js';
import './css/Student.css';
import './css/Teacher.css';

class Member extends React.Component{
    constructor(props){
        super();
        this.state ={
            imagePath: props.imagePath,
            fullName : props.fullName,
            who : props.who,
            birthDate : props.birthDate,
            type : props.type
        }
    }

    render(){
        return (
            <div id="hero__item-student">
                <div className={this.state.type=="student" ? "item-student__container" : "item-teacher__container" } onClick={this.showModal.bind(this)}>
                    <div className="item-student__image">
                        <img src={this.state.imagePath} alt="Student avatar"/>
                    </div>
                    <div className="item-student__student-info">
                        <div className={this.state.type=="student" ? "student-info__name" : "teacher-info__name"}>{this.state.fullName}</div>
                        <div className={this.state.type=="student" ? "student-info__university" : "teacher-info__university"}>{this.state.type=="student" ? this.state.who : this.state.who}</div>
                    </div>
                </div>
            </div>  
        )
    }
    
    showModal(){
        const rootModal = document.getElementById('modal-root');
        const modal = <Modal fullName={this.state.fullName} birthDate={this.state.birthDate} who={this.state.who} imagePath={this.state.imagePath} type={this.state.type}/>;
        ReactDOM.render(modal,rootModal);
    }
    
}

export default Member;
