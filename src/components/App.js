import React, {useState, useEffect} from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

function App() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")

    // Step 1: Fetch the notes from local API
  useEffect(() => {
      console.log("useEffect called")
     //When component renders, we fetch local api once > GET '/notes' > set notes to state
     fetch('http://localhost:3000/notes')
     .then(res => res.json())
     .then(notes => setNotes(notes));
  }, [])

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));

  const handleSearchChange = (searchTerm) => {
    console.log("After Update: ", searchTerm)
    setSearch(searchTerm)
    }

  const addNewNote = (newNote) => {
    console.log("Adding new Note")
    setNotes([...notes, newNote])
  }

    return (
      <div className="app">
        <Header />
        <NoteContainer notes={filteredNotes} onSearchChange={handleSearchChange} addNewNote={addNewNote} />
      </div>
    );


}

export default App;