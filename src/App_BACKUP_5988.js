import React from 'react';
import {useEffect,useState} from 'react';
//import MyForm from './components/test';
import MainComp from './components/MainComp';
import List from './components/List';
import AddNew from './components/AddNew';
import Popup from './components/Popup';

import './App.css';

function App() {
<<<<<<< HEAD
  const listReloadHandler = () =>{
console.log('reload');

  }
=======






useEffect(()=>{
  callAPI();
  console.log('useeff2')
},[]) 


const[items, setState]=useState(["test state"])

const api = `http://localhost:8080/posts`;

const createItems = props =>{
setState(JSON.parse(props))
}
console.log(items)


const callAPI= () =>{
  fetch(api)
      .then(res => res.text())
      .then(res => createItems(res))  
             
}



//////////////////////

>>>>>>> sec
  return (
    <main>
       <div id="main-view"> 
        <div>
<<<<<<< HEAD
          <AddNew reload = {listReloadHandler}/>
        </div>
            <List reload = {listReloadHandler}/>
=======
          <AddNew reload = {callAPI}/>
        </div>
            <List items = {items} reload = {callAPI}/>
>>>>>>> sec
        </div>
    </main>
  );
}

export default App;
