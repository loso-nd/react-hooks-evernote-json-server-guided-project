import React from "react";

function NoteItem({note, onClick}) {
  return (
    <li onClick={() => onClick(note)}>
      <h2>{note.title}</h2>
      <p className="autoShowHide">{note.body}</p>
    </li>
  );
}

export default NoteItem;


/**
 * Step 2c: Deconstruct note and render content to the DOM
 *
 * ?Explanaiton
 * * onClick is being passed down from the parent <NoteContainer/> where we created a function called displayNote() with an init console.log("From NoteContainer") to ensure functionality is working
 * 
 * ?How do we get a specific note that was clicked into the NoteViewer Section
 * * Since 'note' is being passed in as props, we already have access to the notes. Therefore we can invoke the onClick and pass in the note. 
 * 
 *  !RECALL: in order to pass the parameters to onClick , we need to makes sure that is it nested into another callback 
 *  
 */