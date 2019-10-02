import React from 'react'
import PropsBasicContactCard from './ContactCard/PropsContactCard'
import MapJoke from '../component/Joke/MapJoke'
import MapProduct from '../component/Product/MapProduct'
import Todo from './ToDoList/Todo'
import BasicClass from './Class/BasicClass'
// import IsloggedIn from './Class/IsloggedIn'
import SetState from './Class/ClickEvents/SetState'
import PassEvents from './Class/ClickEvents/PassEvent/PassEvents'
import LifeCycleEvents from './Class/LifeCycleEvents/LifeCycleEvents'
import IsloggedIn from './Class/LoginOut/IsLogged'

class Main extends React.Component{
    render(){
        return(
            <div className="App-marginleft">
                {/* <IsloggedIn/> */}
                {/* <LifeCycleEvents/> */}
                {/* <PassEvents/> */}
                {/* <SetState /> */}
                {/* <IsloggedIn/> */}
                {/* <BasicClass/> */}
                <Todo/>  
                {/* <MapProduct/> */}
                {/* <MapJoke/> */}
                {/* <PropsBasicContactCard/> */}
            </div>
        )
        
    }
}

export default Main