import React from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

function App() {
    return (
      <div className="app">
        <Header />
        <NoteContainer />
      </div>
    );
}

export default App;

/**
 * Step 1: Create a 'GET' fetch request for Notes from local api
 * * Create state to store and track notes
 * * useEffect() bc we want to fetch on page load one time 
 * * setNotes(notes) to update the state and stores our Notes from api
 * * pass notes as props to <NoteContainer />
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
