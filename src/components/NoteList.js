import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onClick, handleNote}) {
  console.log(notes)
  return (
    <ul>
      {notes.map(note => {
        return (
          <NoteItem key={note.id} note={note} onClick={onClick} />
        )
        
      })}
  
    </ul>
  );
}

export default NoteList;

/**
 * Step 1c: Deconstruct notes and map notes into <NoteItem/> for each note?
 * 
 * Step 2c: Deconstruct onClick and pass as props to <NoteItem/> for each note that has been selected.
 */