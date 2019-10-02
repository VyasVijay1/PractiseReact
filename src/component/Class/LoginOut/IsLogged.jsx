import React from 'react'


class Islogged extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return {isLoggedIn: !prevState.isLoggedIn}
        })
    }
    render(){
        let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
        return(
            <div>
                <p><button onClick={this.handleClick}>{buttonText}</button></p>
            </div>
        )
    }
}
export default Islogged