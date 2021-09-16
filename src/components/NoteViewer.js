import React from "react";

function NoteViewer( {note, selectedNote}) {

  // useEffect(() => {
  //   fetch('http://localhost:3000/notes',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({})
  //   });
  // })
  return (
    <>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
