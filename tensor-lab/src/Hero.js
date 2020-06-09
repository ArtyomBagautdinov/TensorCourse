import React from 'react';
import Member from './Member.js';
import DataSet from './DataSet.js';
import next from './img/other/next.svg';
import './css/Hero.css';
import './css/Pagination.css'



class Hero extends React.Component{
    constructor(){
        super();
        this.state ={
            items: [],
            page : null
        }
    }
 
    render(){
        return (
            <main className="hero">
                <div id="hero__container">

                    {this.state.items.map((val) => {

                        if(val.hasOwnProperty('education')) return <Member imagePath={val.imagePath} fullName={val.fullName} who={val.education} birthDate={val.birthDate} type="student"/>

                        if(val.hasOwnProperty('qualification')) return <Member imagePath={val.imagePath} fullName={val.fullName} who={val.qualification} birthDate={val.birthDate} type="teacher"/>
                        
                        })
                    }
                </div>
                <div className="pagination">
                <div className="pagination__container">
                    <div className="pagination__left" onClick={this.moveBack.bind(this)}> 
                        <img width="50%" height="50%" src={next} alt="left"/>
                    </div>
                    <div id="pageNum">
                        <p id="num">{this.state.page}</p>
                    </div>
                    <div className="pagination__right" onClick={this.moveForward.bind(this)} >
                        <img width="50%" height="50%" src={next} alt="right"/>
                    </div>
                </div>
            </div>
            </main>
            
          )
    }

    componentDidMount(){

        const set = new DataSet(
            {
            object : 'person'
            }
        );
        
        this.setState({
            page : 1
        })
        
        set.readPage(this.state.page,3).then( res =>{

            let elements = [];

            res.forEach( (val)=> elements.push(val))
            
            this.setState({
                items: elements,
            })
              
        });

        
    }

    moveForward(){
        const set = new DataSet(
            {
            object : 'person'
            }
        );
        
        set.readPage(this.state.page+1,3).then( res =>{
            if(res.length>0){
                console.log(res);
                let elements = [];
                this.setState({
                    items:[]
                }) 
                res.forEach( (val)=> elements.push(val));

                this.setState({
                    items: elements,
                    page : this.state.page + 1
                }) 
            } 
        });
    }

    moveBack(){
        const set = new DataSet(
            {
            object : 'person'
            }
        );
        
        set.readPage(this.state.page-1,3).then( res =>{
            if(res.length>0){
                console.log(res);
                let elements = [];
    
                res.forEach( (val)=> elements.push(val))

                console.log(elements);

                if(this.state.page>1){
                    this.setState({
                        items:[]
                    }) 
                    this.setState({
                        items: elements,
                        page : this.state.page - 1
                    }) 
                }
            } 
        });
    }

}

export default Hero;
