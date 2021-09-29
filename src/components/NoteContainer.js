import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { BrowserRouter } from 'react-router-dom';

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")
  const [selectedNote, setSelectedNote] = useState(null)


  // Step 1: Fetch the notes from local API
  useEffect(() => {
      console.log("useEffect called")
     //When component renders, we fetch local api once > GET '/notes' > set notes to state
     fetch('http://localhost:3000/notes')
     .then(res => res.json())
     .then(notes => setNotes(notes));
  }, [])

    //filter search
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

    //update state of search bar via user input
    const handleSearchChange = (searchTerm) => {
      console.log("After Update: ", searchTerm)
      setSearch(searchTerm)
    }
  
    //Create new note
    const addNewNote = (newNote) => {
      console.log("Adding new Note")
      setNotes([...notes, newNote])
    }


//Render this function whenever a selected note is clicked from sidebar
  const displayNotes = (selectedNote) => {
    console.log(selectedNote, 'Coming from NoteContainer')
    setSelectedNote(selectedNote)
  }
  console.log(notes)

  return (
    <>
    {console.log(notes)}
      <Search onSearchChange={handleSearchChange}/>
      <div className="container">
        <Sidebar notes={filteredNotes}  onClick={displayNotes} addNewNote={addNewNote}/>
        <BrowserRouter>
          <Content notes={notes} selectedNote={selectedNote} setNotes={setNotes}/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default NoteContainer;


/** 
* CRUD
* !Basics
* * A function takes in some props and returns some jsx
* 
* Step 1a: Deconstruct props and pass notes as props to <Sidebar />
* !UseEffect : Fetch data (GET, POST, PATCH)
* * When component renders, we fetch local api once > GET '/notes' > set notes to state
*
* Step 2a
* * Deconstruct onSearchChange and pass as props to <Search /> 
* * Create state to track and store the selectedNotes
* * Add onClick to <Sidebar /> call it displayNotes
* * Create displayNotes() function that will update the state of our selectedNotes
* * displayNotes() will take (selecedNote as an argment) > console.log(selectedNotes) to ensure the one we clicked is seen in the browser console 
* * display note on <NoteViewer />
*
* Step 3: Create a new state and udpate state track and store what note has been clicked
* * Created state (selectedNote) which has been passed into 'displayedNotes()' - a cb function that is invoked with the state we want track and store any note that has be clicked. 
* * We update the state, which is then displaye into our <NoteViewer />
*
* Step 4a: Deconstruct addNewNote and pass as props to <Sidebar/>
*
*/