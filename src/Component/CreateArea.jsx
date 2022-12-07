import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({ noteTitle: "", noteContent: "" });

  function handleSubmit(e) {
    let title = e.target.title.value;
    let content = e.target.content.value;

    props.toAdd(title, content);
    setNote({
      noteTitle: "",
      noteContent: "",
    });
    e.preventDefault();
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="">
        <div className="createNote">
          <input
            // maxLength={"25"}
            type="text"
            name="title"
            placeholder="title"
            // value={note.noteTitle}
            required
          />
          <hr />
          <textarea
            name="content"
            placeholder="note"
            id=""
            cols="30"
            rows="4"
            // value={note.noteContent}
            required
          ></textarea>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default CreateArea;
