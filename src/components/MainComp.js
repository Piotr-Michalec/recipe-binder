import React from 'react';
import AddNew from './AddNew';
import List from './List';

const MainComp = () =>{
    return(
        <div>
          <div id = "add-new">
            <AddNew className = " "/>
          </div>
          <div id = "listDiv">
            <List/>
          </div>
        </div>
       
    );
};
export default MainComp;