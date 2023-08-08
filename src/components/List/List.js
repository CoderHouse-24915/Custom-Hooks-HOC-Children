import React from "react";

const styles = {
  ul: {
    backgroundColor: "yellow",
    minWidth: "400px",
    height: "100px",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "3px solid black",
    borderRadius: "4px",
    paddingRight: "20px",
  },
};

const List = ({ data, render }) => {
  return (
    <ul style={styles.ul}>
      {Object.entries(data).map(([key, description]) => (
        <li key={key}>
          {/*<strong>{key}:</strong> {description}  */}
          {render({ key, description })}
        </li>
      ))}
    </ul>
  );
};
export default List;
