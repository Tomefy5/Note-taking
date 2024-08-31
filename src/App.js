import './bootstrap-5.3.3-dist/css/bootstrap.min.css'
import './fontawesome-free-6.0.0-beta3-web/css/all.min.css'
import './App.css';
import { Component } from 'react';
import SearchInput from './Components/SearchInput';
import NotesListe from './Components/NotesListe';
import MenuBar from './Components/MenuBar';

class App extends Component {
  render() {
    return (
      <div className="container card mt-5 d-flex align-items-center p-0 app">
        <h1 className="title display-6 mt-3">Note Taking</h1>
        <SearchInput/>
        <NotesListe/>
        <MenuBar/>
      </div>
    )
  }
}

export default App;
