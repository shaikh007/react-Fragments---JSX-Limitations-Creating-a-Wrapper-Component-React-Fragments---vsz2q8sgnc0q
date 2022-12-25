import React from "react";
import ListItems from "./ListItems";

const List = ({ listx }) => {
  return (
    // code here
    <React.Fragment>
      {listx.map((value) => (
        <ListItems valuex={value} />
      ))}
    </React.Fragment>
  );
};

export default List;
