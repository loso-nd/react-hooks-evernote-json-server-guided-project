import React from "react";

function NoteViewer( {selectedNote, viewForm}) {

  const handleEditForm = () => {
    viewForm()
  }
  return (
    <>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button onClick={handleEditForm}>Edit</button>
    </>
  );
}

export default NoteViewer;
