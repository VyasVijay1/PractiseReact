import React from 'react'
import todosData from './todosData'
import TodoItem from './TodoItem'

class PassEvents extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : todosData
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(id)
    {
        this.setState(prevState => {
            const updatedtodos = prevState.todos.map(todo =>{
                if (todo.id === id)
                {
                    todo.completed = !todo.completed
                }
                return todo
             } )
             return {updatedtodos}
        }
        )
    }
    render(){
        const todositem = this.state.todos.map((item) => <TodoItem key={item.id} 
        data={item} handleChange={this.handleClick}/>
        )
        return(
            <div className="todo-list">
                {todositem}
            </div>
        )
    }
}

export default PassEvents