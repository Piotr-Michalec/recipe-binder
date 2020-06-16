import React from 'react';
import {useEffect,useState} from 'react';
//import MyForm from './components/test';
import MainComp from './components/MainComp';
import List from './components/List';
import AddNew from './components/AddNew';
import Popup from './components/Popup';

import './App.css';

function App() {

useEffect(()=>{
  callAPI();
  console.log('useeff2')
},[]) 


const[items, setState]=useState(["test state"])

const api = `https://stormy-escarpment-31979.herokuapp.com/posts`;

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

  return (
    <main>
       <div id="main-view"> 
        <div>
          <AddNew reload = {callAPI}/>
        </div>
            <List items = {items} reload = {callAPI}/>
        </div>
    </main>
  );
}

export default App;
