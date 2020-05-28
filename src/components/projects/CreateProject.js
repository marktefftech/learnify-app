import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Create a New Project</h5>
                <div className="input-field" ng-show="on_reset">
                    <input placeholder="Project Title"  onfocus="this.placeholder = ''"   type="text" id='title' onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <input placeholder="Description"  onfocus="this.placeholder = ''" id="content" className="materialize-textarea" onChange={this.handleChange}></input>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1">Create</button>
                </div>
                </form>
            </div>
        )
    }
}

export default CreateProject
