import {Component} from './component.js'

/**
 * Компонент контейнера для карточек студентов и преподавателей 
 */
export class Hero extends Component {
    render = () =>{
        let main = document.createElement('main');
        main.setAttribute('class','hero');

        let divContainer = document.createElement('div');
        divContainer.setAttribute('id','hero__container')

        main.append(divContainer);

        let result = document.createElement('div');
        result.append(main);

        return result.innerHTML;
    }
}