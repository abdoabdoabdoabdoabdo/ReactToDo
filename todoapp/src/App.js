import React from 'react';
import ToDo from "./todos.js"

class App extends React.Component{
  state={
    todolist:[{id:1, content:"go code"}]
  }
  render(){
    return (
      <div className="App">
        <h1 className="center blue-text"></h1>
        <ToDo todos={this.state.todolist}/>
      </div>

    );
  }
}

export default App;
