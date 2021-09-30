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
 * Step 1b: Deconstruct notes and pass as props to NoteLists
 * 
 * Step 2b: Deconstruct onClick and pass onClick as props to <NoteList/>
 * 
 * Step 4b:
 * Deconstruct addNewNote
 * Add onClick to 'new' button and create a handle function for the synthetic event > console.log("coming from sidebar") to check functionality
 * We want to capture a title and a body from somewhere and then pass that information into your post request in the body
 * Inside handle function, create pessimistic rendering by object with 'title' & 'body' attributes 
 * Create a POST fetch request > pass createNote obj in body > after parsed json updated the state by invoking addNewNote() passed down from parent
 * Pass newNote json response as an arg, to addNewNote() which will invoke the function and update the state setNotes
 * console.log to browser for test or check react dev tools
 * 
 * */ 