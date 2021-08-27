
import { useState,useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import NotesList from './components/noteslist';
import Search from './components/Search';
import Header from './components/Header'; 


function App() {
  const [notes,setNotes] =useState([
    {
    id:nanoid(),
    text:'This is my forst note',
    date:'15/04/2021'
    },
    {
      id:nanoid(),
      text:'This is my first note',
      date:'15/04/2021'
    },
    {
      id:nanoid(),
      text:'This is my second note',
      date:'13/04/2021'
    },
    {
      id:nanoid(),
      text:'This is my third note',
      date:'11/04/2021'
    },
]);

const [searchText, setSearchText] = useState('');

const [mode, setMode] = useState('false');

// useEffect(()=>{
//   const savedTheme = JSON.parse(
//     localStorage.getItem('react-mode')
//     );

//     if(savedTheme){
//       setMode(savedTheme);
//     }
// }, []);

// useEffect(() => {
//   localStorage.setItem('react-mode', 
//   JSON.stringify(mode));
// }, [mode]);

useEffect(()=>{
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes){
      setNotes(savedNotes);
    }
}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data', 
    JSON.stringify(notes)
    );
}, [notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
  // console.log(text);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=>note.id !== id);
  setNotes(newNotes);
;}

  return (
    <div className={`${mode && 'dark-mode'}`}>
        <div className="container">
        <Header handleToggleDarkMode={setMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={
            notes.filter((note) => 
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
        </div>
    </div>
  );
}



export default App;
