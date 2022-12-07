import React from "react";

const Note = (props) => {
  return (
    <div className="note">
      {/* <div className="note-title"> */}
      <h1>{props.title}</h1>
      {/* </div> */}
      {/* <div className="note-content"> */}
      <p>{props.content}</p>
      {/* </div> */}
    </div>
  );
};

export default Note;
