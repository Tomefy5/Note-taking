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
                                        index={index}
                                        note={note} 
                                        deleteHandler={this.props.deleteHandler}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default NotesListe