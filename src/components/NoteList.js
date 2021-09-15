import React, {useState, useEffect} from "react";
import NoteItem from "./NoteItem";

function NoteList() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    console.log("useEffect called")
    //fetch notes from db
    fetch('http://localhost:3000/notes')
    .then(res => res.json())
    .then(notes => {
      setNotes(notes)
    });

  }, [])
  console.log(notes)
  return (
    <ul>
      {/* Render list of notes here... */}
      <NoteItem />
    </ul>
  );
}

export default NoteList;

/**
 * ?What do we have?
 * * function that takes in some props and returns some jsx
 * 
 * !UseEffect : Fetch data (GET, POST, PATCH)
 */