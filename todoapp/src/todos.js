import React from "react"
const ToDo=({todos, del}) => {
    const toDoList=todos.length ? (todos.map(item => {
        return (<div className="collection-item" key={item.id}>
            <span onClick={() => del(item.id)}>{item.content}</span>
        </div>
        )
    })) : (<h1 className="center">You have no todos left yay!</h1>)
    return(
        <div className="todos collection">
            {toDoList}
        </div>
    )
}
export default ToDo