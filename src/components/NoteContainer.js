import React, {useState} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer({notes, onSearchChange, addNewNote }) {
  //console.log(notes)
  const [selectedNote, setSelectedNote] = useState(null)

//Render this function whenever a note is clicked
// Step 3: Create and Updated State
  const displayNotes = (selectedNote) => {
    console.log(selectedNote, 'Coming from NoteContainer')
    setSelectedNote(selectedNote)
  }
  console.log(notes)

// Step 2: Pass notes as props to be deconstructed to display our notes in the db
  return (
    <>
    {console.log(notes)}
      <Search onSearchChange={onSearchChange}/>
      <div className="container">
        <Sidebar notes={notes} onClick={displayNotes} addNewNote={addNewNote}/>
        <Content notes={notes} selectedNote={selectedNote}/>
      </div>
    </>
  );
}

export default NoteContainer;


/*** 
* ! CRUD Basics
* * A function takes in some props and returns some jsx
* 
 * Step 1: Create a 'GET' fetch request for Notes from local api
 * * Create state to store and track notes
 * !  UseEffect : Fetch data (GET, POST, PATCH)
 * * useEffect() bc we want to fetch on page load one time 
 * * setNotes(notes) to update the state and stores our Notes from api
 * * pass notes as props to <Sidebar />
 * * To check if notes has been passed as props check react dev tools
 * 
 * Step 2: When a note from the sidebar is clicked, display its contents in the right panel.
 * * Create state to store and track selected notes
 * * Create handleChange func which will be invoked to update the state of setSearch
 * * pass handleSearchChange() as a prop to <NoteContainer/>
 * 
 * Step 3: Filter Notes: Implement the filter to search through your notes list by title.
 * * Since notes are fetched, tracked and stored in parent we can create our filter function here. 
 * * Create a const filteredNotes which filters the array of notes for each note.title perform array methods w/ .toLowerCase(), .includes(search).toLowerCase() state
 * * Pass filterdNotes as props called notes to <NoteContainer/> that way the notes being passed down have a filtered function.
 *  
 * Step 4: Clicking >New< will create a new note via a POST request with some default title and body.     
 * * Create a function addNewNote() which will add a new note to the existing list of notes in the sidebar via spread operater to upstate the state of setNotes
 * * Pass addNewNotes() as props to <NoteContainer/>
 * *                                                   
 */

/** 


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