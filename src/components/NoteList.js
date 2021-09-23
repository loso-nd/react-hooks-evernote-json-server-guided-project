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
 * Step 2b: deconstruct notes and map notes into the <NoteItem/>?
 * 
 */