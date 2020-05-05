import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };

    console.log('state     '   ,this);

  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    /* let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    } */
    console.log('state     '   ,this.state);
   
  }
  
 
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    console.log('changehandler',nam, '', val)
  }
 
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      
    
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
     
      <input type='submit' />
      </form>
    );
  }
}

export default MyForm;
