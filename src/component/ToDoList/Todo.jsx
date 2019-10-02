import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos : todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render(){
    const Todo = this.state.todos.map((item) => <TodoItem key={item.id}
                 data={item}
                 handleChange={this.handleChange}/>)
        return(
            <div className="App-marginleft">
                <div className="todo-list">
               {Todo}
                </div>
                
            </div>
        )
    }
}

export default Todo