import React from "react";
import NoteList from "./NoteList";
 
function Sidebar({notes, onClick}) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onClick={onClick}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;


/**
 * Step 2a: Deconstruct notes and pass as props to the end of the line.
 * 
 * */ 