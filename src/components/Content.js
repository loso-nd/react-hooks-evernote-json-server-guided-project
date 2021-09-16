import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/


function Content( {notes, selectedNote}) {

  // function passNote(){
  //   return notes.map(note => <NoteViewer note={note}/>)
  // }
  const getContent = () => {
    if (false) {
      return <NoteEditor />;
    } else if (selectedNote) {
      return <NoteViewer selectedNote={selectedNote}/>
      // ( notes.map(note => <NoteViewer key={note.id} note={note} selectedNote={selectedNote}/> ))
      
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
