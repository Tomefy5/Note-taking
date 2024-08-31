import React, { Component } from "react";
import Note from "./Note";

class NotesListe extends Component {
    render() {
        return (
            <div className="container card mb-3 list-notes">
                <ul className="list-group list-group-flush ">
                    <Note />
                    <Note />
                    <Note />
                </ul>
            </div>
        )
    }
}

export default NotesListe