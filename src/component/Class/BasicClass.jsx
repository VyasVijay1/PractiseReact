import React, {Component} from 'react'

class BasicClass extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Vijay',
            age: '35'
        }
    }
    render(){
        return (
            <div>
                {this.state.name}
                {this.state.age}
            </div>
        )
    }
}

export default BasicClass