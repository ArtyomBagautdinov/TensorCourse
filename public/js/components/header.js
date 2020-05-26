import {Component} from './component.js'
/**
 * Компонент хедера страницы
 */
export class Header extends Component {
    render = ({title,description}) =>{
        let header = document.createElement('header');
        header.setAttribute('class','header');

        let headerContainer = document.createElement('div');
        headerContainer.setAttribute('class','header__container');

        let headlineBlock = document.createElement('div');
        headlineBlock.setAttribute('class','header__headline-block');

        let row = document.createElement('div');
        row.setAttribute('class','headline-block__row');
        
        let logo = document.createElement('div');
        logo.setAttribute('class','row__logo');

        let img = document.createElement('img');
        img.setAttribute('src','img/other/logo.png');
        img.setAttribute('alt','Tensor company logo');
        img.setAttribute('width','25px');
        img.setAttribute('heigth','20px');

        let headline = document.createElement('div');
        headline.setAttribute('class','row__headline');

        let span = document.createElement('span');
        span.setAttribute('title','Tensor School');
        span.innerHTML = title;

        let border = document.createElement('div');
        border.setAttribute('class','headline-block__border');

        let headerDescription = document.createElement('div');
        headerDescription.setAttribute('class','header__description');
        headerDescription.innerHTML = description;
        

        logo.append(img);
        headline.append(span);

        row.append(logo);
        row.append(headline);
        
        headlineBlock.append(row);
        headlineBlock.append(border);

        headerContainer.append(headlineBlock);
        headerContainer.append(headerDescription);

        header.append(headerContainer);

        let result = document.createElement('div');
        result.append(header);

        return result.innerHTML;
    }
}