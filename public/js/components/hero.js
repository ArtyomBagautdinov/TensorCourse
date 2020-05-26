import {Component} from './component.js'

/**
 * Компонент контейнера для карточек студентов и преподавателей 
 */
export class Hero extends Component {
    render = () =>{
        let main = document.createElement('main');
        main.setAttribute('class','hero');

        let div_container = document.createElement('div');
        div_container.setAttribute('id','hero__container')

        main.append(div_container);

        let result = document.createElement('div');
        result.append(main);

        return result.innerHTML;
    }
}