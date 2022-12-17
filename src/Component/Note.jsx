import React from "react";

const Note = (props) => {
  function handleDelete() {
    props.delete(props.id);
    // console.log("clicked");
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={handleDelete}
        className="btn btn-outline-danger btn-sm ms-auto"
      >
        delete
      </button>
    </div>
  );
};

export default Note;
