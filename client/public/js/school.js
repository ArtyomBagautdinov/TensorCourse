
/**
 * Cинглтон класс School, хранящий в себе обьекты классов Student и Teacher вместе с основными методами манипулирования DOM
 */
export class School {
    constructor(){
        if(School.instance) 
            return School.instance;

        School.instance = this;
        this.members = [];
    }

    /**
     * Добавить всех студентов и учителей в DOM
     */

    mountAll = (container,position) => {
        this.members.forEach((member)=>{
              member.mount(container,position)
        })
    }

    /**
     * Удалить всех студентов и учителей из DOM
     */

    unmountAll = () => {
        this.members.forEach((member)=>{
              member.unmount()
        })
    }


    /**
     * Добавить учителя или студента в коллекцию школы
     */

    addMember = (component)=>{
        this.members.push(component);
    }

    /**
     * Получить обьект учителя/студента по имени
     */

    getMember = (searchedName) =>{
        return this.members.find((currentValue)=>{
            return( currentValue.fullName == searchedName);
        });
    }

    /**
     * Удалить обьект учителя/студента по имени
     */

    removeMember = (searchedName)=>{
        const item =  this.members.find((currentValue)=>{
            return( currentValue.fullName == searchedName);
        }); 
        item.unmount();
    }

    /**
     * Очистить коллекцию учителей и студентов НО не удалять из DOM то, что было вмонтированно
     */

    clearAll = () => {
        this.members = [];
    }


    /**
     * Получить список обьектов всех учеников и студентов в школе 
     */

    getMembers = () => {
        return this.members;
    }
    
}