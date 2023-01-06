import React from "react";

export default function TodoItem(props) {
  return (
    <div>
      <h4>{props.todoItem.title}</h4>
      <p>{props.todoItem.desc}</p>

      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          props.onDelete(props.todoItem);
        }}
      >
        Delete
      </button>
    </div>
  );
}
