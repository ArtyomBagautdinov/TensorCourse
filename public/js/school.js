export class School {
    constructor(){
        if(School.instance) 
            return School.instance;

        School.instance = this;
        this.members = [];
    }

    add = (item)=>{
        this.members.push(item);
    }

    getMember = (searchedName) =>{
        return this.members.find((currentValue)=>{
            return( currentValue._fullName == searchedName);
        });
    }

    removeMember = ()=>{
        this.members.pop();
        const removeIndex = document.getElementsByClassName('hero__item-student').length;
        document.getElementsByClassName('hero__item-student')[removeIndex-1].remove();  
    }

    appendToDOM = (pointOfDOM) =>{
        this.members.forEach( (item)=>{
            item.appendBlock(pointOfDOM);
        });
    }
    
}