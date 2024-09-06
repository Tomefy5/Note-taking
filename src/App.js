import './bootstrap-5.3.3-dist/css/bootstrap.min.css'
import './fontawesome-free-6.0.0-beta3-web/css/all.min.css'
import './App.css';
import { Component } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SearchInput from './Components/SearchInput';
import NotesListe from './Components/NotesListe';
import MenuBar from './Components/MenuBar';
import NoteDetailWrapper from './Components/NoteDetailWrapper';

class App extends Component {
  constructor(props) {
    super(props)

    const savedNotes = localStorage.getItem("notes")
    this.state = {
      notes: savedNotes ? JSON.parse(savedNotes) : [],
      functions: {
        addNewNote: this.addNewNote,
        saveNoteHandler: this.saveNoteHandler,
        deleteHandler: this.deleteHandler
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) {
      localStorage.setItem("notes", JSON.stringify(this.state.notes))
    }
  }

  addNewNote = (e) => {
    e.preventDefault()
    const newNoteTitle = prompt("Enter the note's title:")

    if (newNoteTitle.trim() !== "") {
      const newNote = {
        id: this.state.notes.length + 1,
        title: newNoteTitle,
        body: "",
        favorite: false
      }
      this.setState({
        notes: [...this.state.notes, newNote]
      })
    }
  }

  saveNoteHandler = (noteId) => {
    const textarea = document.querySelector("textarea")

    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => {
      return  note.id === noteId 
              ? { ...note,  body: textarea.value} 
              : note
      })
    }))
  }

  deleteHandler = (noteId) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((todo) => (todo.id !== noteId))
    }))
  }
  render() {
    const isDetailPage = this.props.location.pathname.startsWith('/note/')
    return (
      <div className="container card mt-5 d-flex align-items-center p-0 app">
          {!isDetailPage && <h1 className="title display-6 mt-3">Note Taking</h1>}
          {!isDetailPage && <SearchInput />}
          {!isDetailPage && <MenuBar functions={this.state.functions} />}
          <Routes>
            <Route  
                  path='/' 
                  element={<NotesListe notes={this.state.notes} deleteHandler={this.deleteHandler} />}
            />
            <Route 
                  path='/note/:id'
                  element={<NoteDetailWrapper notes={this.state.notes} functions={this.state.functions}/>} 
            />
          </Routes>
      </div>
    )
  }
}

function displayWithRouter(Component) {
  function ComponentDisplayed(props) {
    const location = useLocation()
    return <Component {...props} location={location} />
  }
  return ComponentDisplayed
}
export default displayWithRouter(App);
