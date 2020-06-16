import React from 'react';
import './../componentCss/item.css';

const api = `https://stormy-escarpment-31979.herokuapp.com/posts`;

const Item = props =>{
const id = props.id;
let url = props.link;
const deleteEntry = () =>{
   
     fetch(`${api}/${id}`,
    { method: 'DELETE'
  }).then(res=>res.json())
  //here props.call api from list component
  //console.log('usunieto')
  .then(()=>props.reload())
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
                <div id = 'deleteButton'  onClick = {deleteEntry}><p>Delete</p></div>
            </div>
            <hr style = {{
                    color: 'black'
                }}/>
        </li>
    );
};
export default Item;