import React from "react";
export default class AddToDo extends React.Component {
    state = {
        content:""
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.add(this.state.content)
    }
    handleChange = (e) => {
        this.setState({
            content:e.target.value
        })
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>Add New ToDo:</label>
            <input type="text" onChange={this.handleChange}/>
            <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}
