import React from "react";
import "./../componentCss/popup.css";

const Popup = (props) => {
  const popupVisibilityHandler = () => {
    props.visible();
  };

  return (
    <div className="popup">
      <h2>{props.text}</h2>
      <button onClick={popupVisibilityHandler}>Close</button>
    </div>
  );
};

export default Popup;
