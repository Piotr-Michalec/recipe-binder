import React from 'react';
import './../componentCss/item.css';

const api = `http://localhost:8080/posts`;

const Item = props =>{
const id = props.id;
let url = props.link;



const deleteEntry = () =>{
   // console.log('to id usun ',id)
    fetch(`${api}/${id}`,
   { method: 'DELETE'
}).then(res=>res.json(),console.log('first then'))
.then(()=>props.reload())//callApi method in List.js



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