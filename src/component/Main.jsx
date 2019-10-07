import React from 'react'
import Menu from '../Menu'
import PropsBasicContactCard from './ContactCard/PropsContactCard'
import MapJoke from '../component/Joke/MapJoke'
import MapProduct from '../component/Product/MapProduct'
import Todo from './ToDoList/Todo'
import BasicClass from './Class/BasicClass'
import IsloggedIn1 from './Class/IsloggedIn'
import SetState from './Class/ClickEvents/SetState'
import PassEvents from './Class/ClickEvents/PassEvent/PassEvents'
import LifeCycleEvents from './Class/LifeCycleEvents/LifeCycleEvents'
import IsloggedIn from './Class/LoginOut/IsLogged'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class Main extends React.Component {
    render() {
        return(
            
            <div className="App-marginleft">
               {/* <BrowserRouter>
            <div>
                <div>
                <Menu/>
                <Switch>
                <Route path="/IsloggedIn1" Component={IsloggedIn1}/> 
                <Route path="/LifeCycleEvents" Component={LifeCycleEvents}/>
                <Route path="/PassEvents" Component={PassEvents}/> 
                <Route path="/SetState" Component={SetState} /> 
                <Route path="/IsloggedIn" Component={IsloggedIn}/> 
                <Route path="/BasicClass" Component={BasicClass}/>  
                <Route path="/Todo" Component={Todo}/>  
                <Route path="/MapProduct" Component={MapProduct}/> 
                <Route path="/MapJoke" Component={MapJoke}/> 
                <Route path="/PropsBasicContactCard" Component={PropsBasicContactCard}/>
                </Switch>
                </div>
            </div>
            </BrowserRouter> */}
            </div>  
            
        )
        
    }
}

export default Main