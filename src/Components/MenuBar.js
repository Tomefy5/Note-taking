import React, { Component } from "react";

class MenuBar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light w-100 menu-bar">
                <div className="container-fluid bg-light justify-content-around">
                    <div className="d-flex flex-column align-items-center">
                        <button type="button" className="btn btn-outline-primary mb-1" onClick={(e => this.props.functions.addNewNote(e))}>
                            <i className="fas fa-plus"></i>
                        </button>
                        <small className="text-muted">New note</small>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <button className="btn btn-outline-primary mb-1">
                            <i className="navbar-toggler-icon"></i>
                        </button>
                        <small className="text-muted">Menu</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuBar