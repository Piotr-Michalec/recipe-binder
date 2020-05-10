import React from 'react';
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
        <div>
            <p>{props.title}</p>
            <p>{props.link}</p>
            <p>{props.date}</p>
            <p>{props.id}</p>
            <button onClick = {deleteEntry}>delete</button>
            <button onClick = {openLink}>open link</button>
         

              
            <br/>
        </div>
    );
};
export default Item;