import React from 'react'

class SetState extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState ((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Click this</button>
            </div>
        )
    }
}
export default SetState