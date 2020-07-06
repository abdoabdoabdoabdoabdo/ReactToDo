import React from "react"
const ToDo=({todos}) => {
    const toDoList=todos.length ? (todos.map(item => {
        return (<div className="collection-item" key={item.id}>
            <span>{item.content}</span>
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