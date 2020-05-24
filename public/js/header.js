import {Component} from './component.js'

export class Header extends Component {
    render = ({title, description}) => {
        return `<header class="header">
        <div class="header__container">
            <div class="header__headline-block">
                <div class="headline-block__row">
                    <div class="row__logo">
                        <img src="img/other/logo.png" alt="Tensor company logo" width="25px" height="20px">
                    </div>
                    <div class="row__headline">
                        <span title="Tensor School">${title}</span>
                    </div>
                </div>
                <div class="headline-block__border"></div>
            </div>
            
            <div class="header__description">
                ${description}
            </div>
        </div>
    </header>`;
    }
}

