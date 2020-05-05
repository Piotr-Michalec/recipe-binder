import React from 'react';


    class AddItem extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            title: '',
            link: '',
          };

        }
   submitHandler = event =>{
   
    event.preventDefault();
    console.log('state', this.state)
   
    // send userInput to server
    fetch('http://localhost:8080/posts',{
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify( {
            title: this.state.title,
           link: this.state.link 
        })
    })
      .then(res => {
         return res.json()
      })
      .then(data => console.log('post req: ', data)) 
}

 changeHandler = event =>{
   let nam = event.target.name;
    let val = event.target.value
    this.setState({[nam]: val});
   
    
}
  render(){
    return(
        <form onSubmit = {this.submitHandler} >
           
            <p>title</p>
            <h1>title{this.state.name}</h1>
            <h1>link{this.state.link}</h1>
            <input 
              type='text'
              name = 'title'
              onChange={this.changeHandler}/>
              <br/>
              <p>link</p>
            <input 
            type='text'
            name = 'link'
              onChange={this.changeHandler}/>
            <input type = 'submit' />
        </form>
        
    );
  }
};
export default AddItem; 