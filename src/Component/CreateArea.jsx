import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name, value);
    setNote({
      ...note,
      [name]: value,
    });
    // console.log(note);
  };
  function handleSubmit(e) {
    props.toAdd(note);
    setNote({
      title: "",
      content: "",
    });
    // console.log(note);
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
            value={note.title}
            required
            onChange={changeHandler}
          />
          <hr />
          <textarea
            name="content"
            placeholder="note"
            id=""
            cols="30"
            rows="4"
            value={note.content}
            required
            onChange={changeHandler}
          ></textarea>
          <button className="addNoteButton" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateArea;
