import {Component} from './component.js'

/**
 * Компонент бегунка загрузки
 */

export class Loader extends Component {
    render = () =>{
        let ellipsis = document.createElement('div');
        ellipsis.setAttribute('class','lds-ellipsis');

        let elipsOne = document.createElement('div');
        let elipsTwo = document.createElement('div');
        let elipsThree = document.createElement('div');

        ellipsis.append(elipsOne);
        ellipsis.append(elipsTwo);
        ellipsis.append(elipsThree);

        let result = document.createElement('div');
        result.append(ellipsis);
        return result.innerHTML;
    }
}