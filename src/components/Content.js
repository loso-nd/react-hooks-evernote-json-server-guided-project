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


function Content( { notes, selectedNote, setNotes, toggleForm, viewForm, onCancelEdit}) {
  // const [toggleForm, setToggleForm] = useState(false)

  // const viewForm = () => {
  //   console.log("Toggle Edit Form")
  //   setToggleForm(toggleForm => !toggleForm)
  // }

  const getContent = () => {
    if (toggleForm) {
      return <NoteEditor notes={notes} selectedNote={selectedNote} setNotes={setNotes} onCancelEdit={onCancelEdit}/>;
    } else if (selectedNote) {
      return <NoteViewer selectedNote={selectedNote} viewForm={viewForm}/>      
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
