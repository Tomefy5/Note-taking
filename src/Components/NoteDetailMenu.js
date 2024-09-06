import React, { Component } from "react";
import { Link } from "react-router-dom";

class NoteDetailMenu extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg bg-light d-flex justify-content-around">
                <div>
                    <Link to={'/Note-taking'}>
                        <button className="btn btn-secondary">
                            <i className="fas fa-reply"></i>
                        </button>
                    </Link>
                </div>
                <div>
                    <button className="btn btn-success" onClick={() => this.props.functions.saveNoteHandler(this.props.note.id)}>
                        <i className="fas fa-save"></i>
                    </button>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => this.props.functions.deleteHandler(this.props.note.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
                <div>
                    <button className="btn btn-dark">
                        <i className="fas fa-star"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default NoteDetailMenu