import React, { Component } from "react";
import { Link } from "react-router-dom";

class Note extends Component {
    render() {
        return (
            <li className="list-group-item d-flex align-items-center justify-content-between pe-2">
                <p>{this.props.note.title}</p>
                <Link to={`/note/${this.props.index}`}>
                    <button className="btn btn-outline-success">See</button>
                </Link>
            </li>
        )
    }
}

export default Note