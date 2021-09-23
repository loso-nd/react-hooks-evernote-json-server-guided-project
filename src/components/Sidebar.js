import React from "react";
import NoteList from "./NoteList";
 
function Sidebar({notes, onClick, addNewNote}) {
  console.log(notes)

  const handleNote = () => {
      console.log("Coming from sideBar")
    const createNote = {
      title: "default",
      body: "placeholder"
    }
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createNote )
    })
    .then(res => res.json())
    .then((newNote) => {
      addNewNote(newNote);
      console.log(newNote)
    });
  }

  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onClick={onClick}/>
      <button onClick={handleNote}>New</button>
    </div>
  );
}

export default Sidebar;



/**
 * Step 2a: Deconstruct notes and pass as props to the end of the line.
 * 
 * you'll want to capture a title and a body from somewhere and then pass that information into your post request in the body!
 * */ 