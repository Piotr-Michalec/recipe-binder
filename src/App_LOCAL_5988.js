import React from 'react';
//import MyForm from './components/test';
import MainComp from './components/MainComp';
import List from './components/List';
import AddNew from './components/AddNew'


import './App.css';

function App() {
  const listReloadHandler = () =>{
console.log('reload');

  }
  return (
    <main>
       <div id="main-view"> 
        <div>
          <AddNew reload = {listReloadHandler}/>
        </div>
            <List reload = {listReloadHandler}/>
        </div>
    </main>
  );
}

export default App;
