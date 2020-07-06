import React from 'react';
import ToDo from "./todos.js"

class App extends React.Component{
  state={
    todolist:[{id:1, content:"go code"}]
  }
  render(){
    return (
      <div className="App">hi</div>
    );
  }
}

export default App;
