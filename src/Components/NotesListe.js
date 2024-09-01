import React, { Component } from "react";
import Note from "./Note";

class NotesListe extends Component {
    render() {
        return (
            <div className="container card mb-3 list-notes">
                <ul className="list-group list-group-flush ">
                    {
                        this.props.notes.map((note,index) => {
                            return (
                                <Note   key={index}
                                        note={note} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default NotesListe