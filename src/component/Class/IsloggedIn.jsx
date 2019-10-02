import React from 'react'

class IsloggedIn extends React.Component{
    constructor(){
        super()
        this.state = {
            IslogedIn: false
        }
    }
    render()
    {
        let wordDisplay
        if(this.state.IslogedIn === true)
        {wordDisplay = "in"}
        else{wordDisplay = "out"}
        return(
            <div>
                <h1> You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}
export default IsloggedIn