import React, { useState } from "react";

export default function AddTodo(props) {
  let [Title, setTitle] = useState("");
  let [Desc, setDesc] = useState("");
  function submit(event) {
    event.preventDefault();
    if (!Title && !Desc) {
      alert("Title or decription cannot be blank.");
    } else {
      props.addTodo(Title, Desc);
      Title = "";
      Desc = "";
    }
  }
  return (
    <div className="container my-3">
      <h4>Add a task or agenda.</h4>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Todo title</label>
          <br />
          <small id="emailHelp" className="form-text text-muted">
            Add an item here
          </small>
          <input
            type="text"
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            // placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            value={Desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
            placeholder="Todo detail"
          />
        </div>
        <div className="form-check"></div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
