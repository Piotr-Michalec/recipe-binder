import React from 'react';
import AddNew from './AddNew';
import List from './List';

const MainComp = () =>{
    return(
        <div>
          <div className = "">
            <AddNew className = "bg-dark"/>
          </div>
          <div className = "">
            <List/>
          </div>
        </div>
       
    );
};
export default MainComp;