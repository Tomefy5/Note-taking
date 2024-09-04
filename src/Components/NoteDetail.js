import React, { Component } from "react";

class NoteDetail extends Component {
    render() {
        return (
            <div className="container h-100 bg-light">
                <h1 className="title display-6 mt-3 text-center">{this.props.note.title}</h1>
                <form className="input-group d-flex flex-column h-75 mt-4">
                    <input type="text" className="form-control w-100"/>
                    <input type="submit" value="Save" className="btn btn-outline-success"/>
                </form>
                {console.log(this.props)}
            </div>
        )
    }
}

export default NoteDetail