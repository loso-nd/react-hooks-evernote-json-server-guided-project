import React from "react";

function NoteViewer( {selectedNote}) {
  return (
    <>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
