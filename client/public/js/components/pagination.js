import {Component} from './component.js'
import {DataSet} from '../dataSet.js'
import {School} from '../school.js'
import {ComponentFactory} from '../factory.js'
import {Student} from './student.js'
import {Teacher} from './teacher.js'

/**
 * Компонент табло пагинации страницы
 */
export class Pagination extends Component {

    constructor(params){
        super();
        this.page = 1;
    }

    render = () => {
        let pagination = document.createElement('div');
        pagination.setAttribute('class','pagination');

        let container = document.createElement('div');
        container.setAttribute('class','pagination__container');

        let left = document.createElement('div');
        left.setAttribute('class','pagination__left');

        let right = document.createElement('div');
        right.setAttribute('class','pagination__right');

        let leftImg = document.createElement('img');
        leftImg.setAttribute('width','100%');
        leftImg.setAttribute('height','100%');
        leftImg.setAttribute('src','img/other/next.svg');
        leftImg.setAttribute('alt','left');
        
        let rightImg = document.createElement('img');
        rightImg.setAttribute('width','100%');
        rightImg.setAttribute('height','100%');
        rightImg.setAttribute('src','img/other/next.svg');
        rightImg.setAttribute('alt','right');
        
        let pageNum = document.createElement('div');
        pageNum.setAttribute('id','pageNum');
        
        
        let p = document.createElement('p');
        p.setAttribute('id','num')
        p.innerHTML = this.page;
        pageNum.append(p);

        left.append(leftImg);
        right.append(rightImg);

        container.append(left);
        container.append(pageNum)
        container.append(right);

        pagination.append(container);

        let result = document.createElement('div');
        result.append(pagination);
        return result.innerHTML;
    }


    
    afterMount = () => {
        const leftArrow = document.getElementsByClassName('pagination__left')[0]
        leftArrow.addEventListener('click', () => this.onClickLeft());

        const rightArrow = document.getElementsByClassName('pagination__right')[0]
        rightArrow.addEventListener('click', () => this.onClickRight());          
    }

    onClickLeft = () => {
        const school = new School();
        const factory = new ComponentFactory();
        const set = new DataSet({
            object : 'person'
        })
        
        if(this.page==1) {}
        else {
            this.page--;
            document.getElementById('num').innerHTML = this.page;
            set.readPage(this.page,3).then( res =>{
                if(res.length>0){
                    school.unmountAll()
                    school.clearAll();
                    res.forEach( (val)=>{
                    if(val.hasOwnProperty('education')){
                        const student = factory.create(Student,val);
                        school.addMember(student);
                    }
                    if(val.hasOwnProperty('qualification')){
                        const teacher = factory.create(Teacher,val);
                        school.addMember(teacher);
                    }
                    })
                    school.mountAll(document.getElementById('hero__container'));
                }
             });
         
        }
        
    }

    onClickRight = () => {
        const school = new School();
        const factory = new ComponentFactory();
        const set = new DataSet({
            object : 'person'
        })
        
        this.page++;
        set.readPage(this.page,3).then( res =>{
                if(res.length>0){
                    school.unmountAll()
                    school.clearAll();
                    res.forEach( (val)=>{
                    if(val.hasOwnProperty('education')){
                        const student = factory.create(Student,val);
                        school.addMember(student);
                    }
                    if(val.hasOwnProperty('qualification')){
                        const teacher = factory.create(Teacher,val);
                        school.addMember(teacher);
                    }
                    })
                    school.mountAll(document.getElementById('hero__container'));
                }
                else this.page--;
                document.getElementById('num').innerHTML = this.page;
        });     
    }
    
}


