import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  //console.log(notes)
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")
  const [selectedNote, setSelectedNote] = useState(null)
  const [viewNote, setViewNote] = useState(null) // track notes in NoteViewer section
  const [toggleForm, setToggleForm] = useState(false)

  // Step 1: Fetch the notes from local API
  useEffect(() => {
    console.log("useEffect called")
    //When component renders, we fetch local api once > GET '/notes' > set notes to state
    fetch('http://localhost:3000/notes')
    .then(res => res.json())
    .then(notes => setNotes(notes));
  }, [])

  //Render this function whenever a note is clicked to be displayed in NoteViewer
  const displayNotes = (id) => {
    console.log(id, 'Coming from NoteContainer')
    setSelectedNote(id)
    setViewNote(notes.filter(note => note.id === id)) // track notes in NoteViewer section
    setToggleForm(false)
  }

  //Function responsible for updating the state of toggle
  const viewForm = () => {
    // setEditViewForm(true)
    setToggleForm(true)
  }

  //Function allows up to add a new note to the sidebar
  const addNewNote = (newNote) => {
    console.log("Adding new Note")
    setNotes([...notes, newNote])
  }

  const onCancelEdit = () => {
    console.log("Cancel Edit Button has been Clicked")
    setToggleForm(false)
  }
  
  //Callback function to handle onChange on search bar and update its state
  const handleSearchChange = (searchTerm) => {
    console.log("After Update: ", searchTerm)
    setSearch(searchTerm)
  }

  //Filtered notes
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
    {console.log(notes)}
      <Search onSearchChange={handleSearchChange}/>
      <div className="container">
        <Sidebar notes={filteredNotes} onClick={displayNotes} addNewNote={addNewNote}/>
        <Content 
          notes={notes} 
          setNotes={setNotes} 
          note={viewNote} 
          toggleForm={toggleForm} 
          viewForm={viewForm} 
          selectedNote={selectedNote}
          onCancelEdit={onCancelEdit} 
        />
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
 * * setNotes(notes) to update the state and stores our response from api
 * * pass notes as props to <Sidebar />
 * * To check if notes has been passed as props check react dev tools
 * 
 * Step 2: When a note from the sidebar is clicked, display its contents in the right panel.
 * * Create state to store and track selected notes (selectedNote) 
 * * Create a function 'displayedNotes()' - a cb function that is invoked when a note on SideBar is clicked. 
 * * Pass the function an arg > invoke setSelectedNote(id) with the same id passed in 
 * * Update the state of setViewNote on filtered notes from api res where for each note, if the note.id === id passed in as an arg then we update the state with those notes. And setToggleForm(false)
 * * Create funciton viewForm that will update the 
 * 
 *  Pass the following as Props to Content
 * ? notes: pass the notes received from init 'GET' fetch request
 * ? setNotes: updates the state of notes received from init 'GET' fetch request
 * ? viewNote: tracks the state for the filtered notes that will be displayed in NoteViewer
 * ? toggleForm: init state of the form that displays the >edit form< when edit button is clicked
 * ? viewFrorm: cb function that updates the init state of the togggleForm from false to true
 * ? selectedNotes: init state of the note.id that are passed into the displayNotes(id)
 * 
 * Step 3: Filter Notes: Implement the filter to search through your notes list by title.
 * * Create handleSearchChange() which will be invoked to update the state of setSearch with the searchTerm passed in as in arg into  the funnction and into the state
 * * pass handleSearchChange() as a prop to <Search/>
 * * Create a const filteredNotes which will filter the array of notes received from api, where we filter search for each note.title incluing the search term typed into the input field. Perform array methods w/ .toLowerCase(), .includes(search).toLowerCase()
 * * To account for the filtered notes we passe filterdNotes as props called notes to SideBar that way the notes 
 *  
 * Step 4: Clicking >New< will create a new note via a POST request with some default title and body.     
 * * Create a function addNewNote() which will add a new note to the existing list of notes in the Sidebar via spread operater to upstate the state of setNotes
 * * Pass addNewNotes() as props to <Sidebar/>
 *                                                    
 */