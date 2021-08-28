
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
      text:'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
      date:'15/04/2021'
    },
    {
      id:nanoid(),
      text:'I would love to change the world, but they won’t give me the source code.',
      date:'13/04/2021'
    },
    {
      id:nanoid(),
      text:'The glass is neither half-full nor half-empty; it’s twice as big as it needs to be.',
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
