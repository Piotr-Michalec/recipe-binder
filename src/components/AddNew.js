import React from "react";

class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      link: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();
    if (this.validateUrl()) {
      console.log("sub");
      this.postIt();
      console.log("validation passed");
    } else {
      console.log("validation failed");
    }
  };

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  validateUrl = () => {
    let url = this.state.link;
    console.log("yrl", url);
    console.log("val");
    let valid = false;
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(url)) {
      valid = true;
    }
    return valid;
  };

  postIt = () => {
    console.log("state", this.state);

    // send userInput to server
    fetch("http://localhost:8080/posts", {
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
      .then((data) => console.log("post req: ", data));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <p>title</p>
        <input type="text" name="title" onChange={this.changeHandler} />
        <br />
        <p>link</p>
        <input type="text" name="link" onChange={this.changeHandler} />
        <input type="submit" />
      </form>
    );
  }
}
export default AddNew;