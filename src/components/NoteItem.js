import React from "react";

function NoteItem({note, onClick}) {
  console.log(note.id)
  return (
    <li onClick={() => onClick(note)}>
      <h2>{note.title}</h2>
      <p className="autoShowHide">{note.body}</p>
    </li>
  );
}

export default NoteItem;



/**
 * Step 1d: Deconstruct note and render jsx to the DOM
 *
 * Step 2d: Deconstruct onClick. 
 * * Set onClick prop as a return cb function up the parent, which will invoke displayNotes(), update setSelected state, and display selected note to <NoteViewer />
 * * Since we have access to a note via props, therefore we can invoke the onClick cb function as w/ an arg (note) passed in
 * * This will run back to parent and invoke the displayNotes() function
 * ?  Explanaiton
 * * onClick is being passed down from the parent <NoteContainer/> where we created a function called displayNote() with an init console.log("From NoteContainer") to ensure 
 * * functionality is working
 * 
 *  !RECALL: in order to pass the parameters to onClick , we need to makes sure that is it nested into another callback (anonymous cb fun)
 *  
 */