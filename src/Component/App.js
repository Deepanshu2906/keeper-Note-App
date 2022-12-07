import { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(title, content) {
    // console.log(title, content);
    let newNote = {
      noteTitle: title,
      noteContent: content,
    };
    setNotes((prev) => {
      return [...prev, newNote];
    });
    console.log(notes);
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
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
