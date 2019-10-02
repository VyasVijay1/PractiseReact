import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">            
            <p> <input type="checkbox" 
                checked={props.data.completed} 
                onChange = {() => props.handleChange(props.data.id)}
                /> 
            {props.data.text}</p>
        </div>
    )
}

export default TodoItem