import React, { Component } from "react";
import NoteDetailMenu from "./NoteDetailMenu";

class NoteDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.note.body
        }
    }

    handleChange = (e) => {
        this.setState({text: e.target.value})
    }
    render() {
        return (
            <div className="container h-100 bg-light p-0">
                <h1 className="title display-6 mt-3 text-center">{this.props.note.title}</h1>
                <form className="input-group d-flex flex-column h-75">
                    <textarea className="form-control w-100" placeholder="Put your note here..." onChange={this.handleChange} value={this.state.text}></textarea>
                </form>
                <NoteDetailMenu functions={this.props.functions} note={this.props.note}/>
            </div>
        )
    }
}

export default NoteDetail