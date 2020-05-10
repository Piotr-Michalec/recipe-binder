import React, {useEffect,useState} from 'react';

import AddNew from './AddNew';
import Item from './Item';

const List = () =>{

    useEffect(()=>{
        callAPI();
        console.log('useeff2')
    },[]) 
   

    const[items, setState]=useState(["test state"])

    const api = `http://localhost:8080/posts`;

    const createItems = props =>{
      setState(JSON.parse(props))
    }

    const callAPI= () =>{
        fetch(api)
            .then(res => res.text())
            .then(res => createItems(res))         
    }

    

  
       
     items.forEach((item)=>{console.log(item._id)})
   

    return(
        <div>
            {items.map((item,index)=>(<Item 
            title = {item.title}
            link = {item.link}
            date = {item.date}
            id= {item._id} />))}
        </div>
    );
};

export default List;