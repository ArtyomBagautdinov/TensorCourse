
export class DataSet {
    constructor(options){
        this.options = {
            host : 'http://localhost:8080/api/',
            model : {} || options.model,
            object : options.object
        }
    }

    getHost = () =>{
        return this.options.host;
    }
    /**
     * непосредственно сам запрос
     * @param {object} params example : { _page : 1, _limit : 3}
     */
    query = (query, options, params) => {
        let url = new URL(this.options.host);
        url.pathname += query;
        for(let k in params){
            url.searchParams.set(k,params[k]);
        }
        return fetch(url,options).then( response => response.json())
    }

    /**
     * получить пользователя по id
     */
    read = (id) => {
        return this.query(
            `${this.options.object}/${id}`,
            {
                method : 'GET'
            }
        );   
    }

    /**
     * получить страничку с pageLimit пользователями
     */
    readPage = (pageIndex,pageLimit) => {
        return this.query(
            `${this.options.object}`,
            {
                method : 'GET'
            },
            {
                _page: pageIndex,
                _limit : pageLimit
            }
        );   
    }

    /**
     * получить всех пользователей
     */
    read = () => {
        return this.query(
            `${this.options.object}`,
            {
                method : 'GET'
            }
        );   
    }
    
    /**
     * добавить пользователя в базу
     * @param {string} type  либо student либо teacher
     * @param {object} object {fullName, education, birthDate, imagePath }
     * @param {any} curId нужный Id
     */

    create = (object,curId,type) => {
        if(type=='student')
            return this.query(
                `${this.options.object}`,
                {
                    method : 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body : JSON.stringify({
                                id: curId,
                                fullName: object.fullName,
                                education: object.qe,
                                birthDate:  object.birthDate,
                                imagePath:  object.imagePath
                             })
                },
                
            );   
        if(type=='teacher')
        return this.query(
            `${this.options.object}`,
            {
                method : 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body : JSON.stringify({
                            id: curId,
                            fullName: object.fullName,
                            qualification: object.qe,
                            birthDate:  object.birthDate,
                            imagePath:  object.imagePath
                        })
            }
            
        ); 
    }

    /**
     * удалить пользователя из базы
     */
    
    delete = (id) => {
        return this.query(
            `${this.options.object}/${id}`,
            {
                method : 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                }
                
            }
            
        );
    }

    /**
     * изменить информацию о конкретном пользователе
     * @param {string} type  либо student либо teacher
     * @param {object} object {fullName, education, birthDate, imagePath }
     * @param {any} curId нужный Id
     */

     update = (id,object,type) => {
        if(type=='student'){
            return this.query(
                `${this.options.object}/${id}`,
                {
                    method : 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body : JSON.stringify({
                                fullName: object.fullName,
                                education: object.qe,
                                birthDate:  object.birthDate,
                                imagePath:  object.imagePath
                            })
                }
                
            ); 
        }
        if(type=='teacher'){
            return this.query(
                `${this.options.object}/${id}`,
                {
                    method : 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body : JSON.stringify({
                                fullName: object.fullName,
                                qualification: object.qe,
                                birthDate:  object.birthDate,
                                imagePath:  object.imagePath
                            })
                }
                
            ); 
        }
     }
}

