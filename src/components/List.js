import React, { useEffect, useState } from "react";

import AddNew from "./AddNew";
import Item from "./Item";
import styles from "./../componentCss/list.css";

const List = (props) => {
  return (
    <ul className={styles.ul}>
      {props.items
        .slice(0)
        .reverse()
        .map((item, index) => (
          <Item
            title={item.title}
            link={item.link}
            date={item.date}
            id={item._id}
            reload={props.reload}
          />
        ))}
    </ul>
  );
};

export default List;
