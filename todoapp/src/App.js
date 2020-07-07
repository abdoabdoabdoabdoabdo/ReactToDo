import React from 'react';
import ToDo from "./todos.js"
import AddToDo from "./AddForm.js"
class App extends React.Component{
  state={
    todolist:[{id:1, content:"go code"}]
  }
  deleteTodo = id => {
    const todos=this.state.todolist.filter(item => item.id !== id)
    this.setState({
      todolist:todos
    })
  }
  addToDo = content => {
    this.setState({
      todolist:[...this.state.todolist, {id:this.state.todolist.length, content}]
    })
  }
  render(){
    return (
      <div className="App">
        <AddToDo add={this.addToDo}/>
        <h1 className="center blue-text">Todo's</h1>
        <ToDo todos={this.state.todolist} del={this.deleteTodo}/>
        
      </div>

    );
  }
}

export default App;
