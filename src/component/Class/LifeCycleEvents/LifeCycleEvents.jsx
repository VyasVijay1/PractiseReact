import React from 'react'

class LifeCycleEvents extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true

        }
    }
    componentDidMount(){
setTimeout( () => {
    this.setState ({
        isLoading: false
    })
} 
    , 2500)
}
    render() {
        return(
            <div>{ this.state.isLoading ? "Loading" : "Page Loaded"}</div>
        )
    }
    }

export default LifeCycleEvents