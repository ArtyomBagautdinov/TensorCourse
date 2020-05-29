import {Component} from './component.js'

/**
 * Базовый класс предок для классов Student и Teacher
 */

export class Person extends Component {
    constructor(item){
        super();
        this.item = item;
        this.divItem = document.createElement('div');
        this.divItem.setAttribute('class','hero__item-student');
    
        this.divContainer = document.createElement('div');
        
        this.divImage = document.createElement('div');
        this.divImage.setAttribute('class','item-student__image');
    
        this.image = document.createElement('img');
        this.image.setAttribute('src',item.imagePath);
        this.image.setAttribute('alt','Student avatar');
    
        this.divInfo = document.createElement('div');
        this.divInfo.setAttribute('class','item-student__student-info');
    
        this.divName = document.createElement('div');
        this.divName.innerHTML = item.fullName;
    
        this.divUniversity = document.createElement('div');
    }

    get fullName(){
        return this.item.fullName;
    }
    
   
}





