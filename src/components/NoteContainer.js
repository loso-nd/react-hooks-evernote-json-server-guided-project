import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)

  // Step 1: Fetch the notes from local API
  useEffect(() => {
    // console.log("useEffect called")
    //When component renders, we fetch local api once > GET '/notes' > set notes to state
    fetch('http://localhost:3000/notes')
    .then(res => res.json())
    .then(notes => {
      setNotes(notes)
    });

  }, [])
//Render this function whenever a note is clicked
// Step 3: Create and Updated State
  const displayNotes = (selectedNote) => {
    console.log(selectedNote, 'Coming from NoteContainer')
    setSelectedNote(selectedNote)
  }
// Step 2: Pass notes as props to be deconstructed to display our notes in the db
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes={notes} onClick={displayNotes}/>
        <Content notes={notes} selectedNote={selectedNote}/>
      </div>
    </>
  );
}

export default NoteContainer;


/** 
* !Basics
* * A function takes in some props and returns some jsx
* 
* !UseEffect : Fetch data (GET, POST, PATCH)
* * When component renders, we fetch local api once > GET '/notes' > set notes to state
*
* Step 2: Create a callback function
* * Create a function that is passed as props to <NoteItem/> as an onClick event. B/c we want the function to be invoked when a note is clicked.
* * After we have displayed the notes on the page, we can pass in the note into our function diplayNotes() and console.log(note) to ensure that we are indeed getting that note. 
*
* Step 3: Create a new state and udpate state track and store what note has been clicked
* * Created a new state (selectedNote) which has been passed into 'displayedNotes()' - a cb function that is invoked with the state we want track and store any note that has be clicked. 
* * We update the state, which is then displaye into our <NoteViewer />



*/