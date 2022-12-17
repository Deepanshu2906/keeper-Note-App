import { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(note) {
    // console.log(title, content);
    let newNote = {
      noteTitle: note.title,
      noteContent: note.content,
    };
    setNotes((prev) => {
      return [...prev, newNote];
    });
    // console.log(notes);
  }
  function deleteNote(id) {
    // console.log("handle delete ");
    let note = notes.slice();
    let index = note.findIndex((p) => p.id == id);
    note.splice(index, 1);
    setNotes(note);
  }
  return (
    <>
      <Header />
      <CreateArea toAdd={handleAddNote} />
      <div className="note-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.noteTitle}
            content={note.noteContent}
            delete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
