import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3>Todos List:</h3>
      {props.todos.length === 0
        ? "Nothing to display."
        : props.todos.map((each_item) => {
            return (
              <TodoItem
                key={each_item.sno}
                todoItem={each_item}
                onDelete={props.onDelete}
              />
            );
          })}
    </div>
  );
}
