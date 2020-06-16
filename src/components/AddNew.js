import React from "react";
import  "./../componentCss/addNew.css"
import Popup from './../components/Popup';

const api ='https://stormy-escarpment-31979.herokuapp.com'

class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      link: "",
      popupVisible: false,
      popupText: "test"

    };
 
  }


 openPopup = (props) =>{
  this.setState({popupText:props},()=>{console.log("callback",this.state.popupText)})
   this.setState({popupVisible: true});
    console.log('popup state',this.state.popupText);
    console.log("open",props)
   
}

 closePopup = () =>{
   this.setState({popupVisible: false});
   this.setState({popupText: ""})
 }

  submitHandler = (event) => {
    const text = "This is not a valid link"
    event.preventDefault();
    this.validateTitle();
   ( this.validateUrl()? this.postIt(): this.openPopup(text))
  };

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };


  validateUrl = () => {
    let url = this.state.link;
    //console.log("yrl", url);
    //console.log("val");
    let valid = false;
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(url)) {
      valid = true;
    }
    return valid;
  };

  validateTitle = () =>{
    let title = this.state.title;
    const text = "Enter title"
    title ==''? this.openPopup(text):console.log("ok")
  }

  postIt = () => {
    fetch(`${api}/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.title,
        link: this.state.link,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log("post req: ", data))
      .then(()=>this.props.reload())
  };

  render() {
    return (
      <div className = 'addNewContainer'>
        {this.state.popupVisible ? <Popup visible = {this.closePopup} text = {this.state.popupText}/> :null}
        <form onSubmit={this.submitHandler}>
          
          <input className = 'titleInput' type="text" name="title" placeholder = 'Title' onChange={this.changeHandler} />
          <br />
          
          <input className='linkInput' type="text" name="link" placeholder = 'Paste link here' onChange={this.changeHandler} />
          <input className ='submit' type="submit" value="Add New Recipe"/>
        </form>
      </div>
    );
  }
}
export default AddNew;