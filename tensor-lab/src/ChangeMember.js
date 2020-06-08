import React from 'react';
import ReactDOM from 'react-dom';
import AddModal from './AddModal.js';
import  './css/ChangeMember.css';
import plus from './img/other/plus.svg';
import minus from './img/other/minus.svg';
import change from './img/other/change.svg';
import RemoveModal from './RemoveModal.js';
import ChangeModal from './ChangeModal.js';

class ChangeMembers extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="tools-member">
                <div className="tools-member__container">
                    <div className="add-member__container" onClick={this.showAddModal.bind(this)}>
                        <img src={plus} width="60%" height="60%" alt="add"/>
                    </div>
                    <div className="change-member__container" onClick={this.showChangeModal.bind(this)}>
                        <img src={change} width="60%" height="60%" alt="add"/>
                    </div>
                    <div className="remove-member__container" onClick={this.showRemoveModal.bind(this)}>
                        <img src={minus} width="60%" height="60%" alt="add"/>
                    </div>
                </div>
            </div>
        )
    }

    showAddModal(){
        const rootModal = document.getElementById('modal-root');
        const modal = <AddModal isStudent = {true} />;
        ReactDOM.render(modal,rootModal);
    }

    showRemoveModal(){
        const rootModal = document.getElementById('modal-root');
        const modal = <RemoveModal/>;
        ReactDOM.render(modal,rootModal);
    }

    showChangeModal(){
        const rootModal = document.getElementById('modal-root');
        const modal = <ChangeModal isStudent = {true}/>;
        ReactDOM.render(modal,rootModal);
    }
}

export default ChangeMembers;




