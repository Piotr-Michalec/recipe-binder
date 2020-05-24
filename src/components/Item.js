import React from 'react';
import './../componentCss/item.css';

const api = `http://localhost:8080/posts`;

const Item = props =>{
const id = props.id;
let url = props.link;

const deleteEntry = () =>{
    console.log('to id usun ',id)
    fetch(`${api}/${id}`,
   { method: 'DELETE'
}).then(res=>res.json());
}

const openLink = () =>{
    if (!url.match(/^https?:\/\//i)) { //append protocol if link doesnt have one
    url = 'http://' + url;
}
  window.open(url,'_blank')
}
    return(
        
        //receive data from list by props 
        <li >
            <div className = 'gridContainer' >
                <div id = 'title' onClick = {openLink}><p>{props.title}</p></div>
                <div id = 'link' onClick = {openLink}><p>{props.link}</p></div>
                <div id = 'date' onClick = {openLink}><p>{props.date}</p></div>
                <div id = 'deleteButton'><button id="delete-button"  onClick = {deleteEntry}>delete</button></div>
            </div>
           
            <hr style = {{
                    color: 'black'
                }}/>
          
        </li>
    );
};
export default Item;