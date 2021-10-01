import React, {useState} from "react";

function NoteEditor({notes, setNotes, selectedNote, onCancelEdit }) {
  console.log("selected note from NoteEditor", selectedNote.id);
  const [title, setTitle] = useState (selectedNote.title)
  const [body, setBody] = useState (selectedNote.body)

  //Handle Save Note
  const handleSubmit = (e, selectedNote) => {
    e.preventDefault()

    const updatedNote = {
      id: selectedNote.id,
      title: title,
      body: body
    }
    //patch request to save to db & update selectedNote
    fetch(`http://localhost:3000/notes/${selectedNote.id}`,{
      method: 'PATCH',
      headers: {  "Content-type": "application/json"  },
      body: JSON.stringify(updatedNote)
    })
    .then(res => res.json())
    .then(updatedNote => { 
      console.log("I am the updated note", updatedNote)
    })
    
    //update the sidebar with edited selected Note
    const newSidebar = notes.map(note =>{
      if (note.id === selectedNote.id){
        return updatedNote
      } else { return note }
    })
    setNotes(newSidebar)
  }

  const handleClick = () => {
    onCancelEdit(true)
  }


  return (
    <form className="note-editor" onSubmit={(e) => handleSubmit(e, selectedNote)}>
      <input 
        type="text" 
        name="title"
        value={title}
        placeholder="Title" 
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        name="body" 
        value={body}
        placeholder="Body" 
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button"
          onClick={handleClick}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
