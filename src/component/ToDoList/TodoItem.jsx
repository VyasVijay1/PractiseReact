import React from "react"

function TodoItem(props) {
    const CompletedStyle = {
        fontstyle: "iatlic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">            
             <input type="checkbox" 
                checked={props.data.completed} 
                onChange = {() => props.handleChange(props.data.id)}
                /> 
            <p style={props.data.completed ? CompletedStyle : null}>{props.data.text}</p>
        </div>
    )
}

export default TodoItem