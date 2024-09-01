import React, { Component } from "react";

class Note extends Component {
    render() {
        return (
            <li className="list-group-item d-flex align-items-center justify-content-between pe-2">
                <p>{this.props.note.title}</p>
                <button className="btn btn-outline-success">See</button>
                {console.log(this.props)}
            </li>
        )
    }
}

export default Note