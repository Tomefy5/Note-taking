import React, { Component } from "react";

class SearchInput extends Component {
    render() {
        return(
            <form className="input-group container mb-3 mt-2 w-75">
                <input type="text" className="form-control" placeholder="Search note ..."></input>
                <button className="btn btn-secondary">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        )
    }
}

export default SearchInput