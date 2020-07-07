import React from "react";
class AddToDo extends React.Component {
    handleSubmit = (e) => {

    }
    handleChange = (e) => {

    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>Add New ToDo:</label>
            <input type="text" onChange={this.handleChange}/>
            <button>Submit</button>
            </form>
            </div>
        )
    }
}
export default AddToDo