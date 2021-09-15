import React, {useState, useEffect} from "react";
import NoteItem from "./NoteItem";

function NoteList() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    // console.log("useEffect called")
    //When component renders, we fetch local api once > GET '/notes' > set notes to state
    fetch('http://localhost:3000/notes')
    .then(res => res.json())
    .then(notes => {
      setNotes(notes)
    });

  }, [])
  console.log(notes)
  return (
    <ul>
      {notes.map(note => {
        return (
          <NoteItem key={note.id} note={note}/>
        )
        
      })}
  
    </ul>
  );
}

export default NoteList;

/**
 * ?What do we have?
 * * function that takes in some props and returns some jsx
 * 
 * !UseEffect : Fetch data (GET, POST, PATCH)
 * * When component renders, we fetch local api once > GET '/notes' > set notes to state
 */