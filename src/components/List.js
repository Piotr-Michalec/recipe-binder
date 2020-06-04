import React, {useEffect,useState} from 'react';

import AddNew from './AddNew';
import Item from './Item';
import styles from "./../componentCss/list.css";

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
        console.log('api')
        fetch(api)
            .then(res => res.text())
            .then(res => createItems(res))         
    }

    

  
       
    // items.forEach((item)=>{console.log(item._id)})
   

    return(
        <ul className = {styles.ul}>
            <button onClick={callAPI}>bbb</button>
            {items.slice(0).reverse().map((item,index)=>(<Item 
            reload = {callAPI}
            title = {item.title}
            link = {item.link}
            date = {item.date}
            id= {item._id} />
            ))}
           
        </ul>
    );
};

export default List;