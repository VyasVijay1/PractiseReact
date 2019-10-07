import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Menu from '../../Menu'
import PropsBasicContactCard from '../ContactCard/PropsContactCard'
import MapJoke from '../Joke/MapJoke'
import MapProduct from '../Product/MapProduct'
import Todo from '../ToDoList/Todo'
import BasicClass from '../Class/BasicClass'
import IsloggedIn1 from '../Class/IsloggedIn'
import SetState from '../Class/ClickEvents/SetState'
import PassEvents from '../Class/ClickEvents/PassEvent/PassEvents'
import LifeCycleEvents from '../Class/LifeCycleEvents/LifeCycleEvents'
import IsloggedIn from '../Class/LoginOut/IsLogged'

const Routing = () => {
return (
    <div>
        <BrowserRouter>
            <div>
                <div>
                    <Menu/>
                    <div>
                        <table>
                            <tr>
                                <td className="tdwidth10perc">&nbsp;</td>
                                <td className="tdwidth80perc">
                                <Switch>
                                    <Route path="/" exact component={Home}/>
                                    <Route path="/IsloggedIn" component={IsloggedIn1}/> 
                                    <Route path="/LifeCycleEvents" component={LifeCycleEvents}/>
                                    <Route path="/PassEvents" component={PassEvents}/> 
                                    <Route path="/SetState" component={SetState} /> 
                                    <Route path="/IsloggedIn" component={IsloggedIn}/> 
                                    <Route path="/BasicClass" component={BasicClass}/>  
                                    <Route path="/Todo" component={Todo}/>  
                                    <Route path="/MapProduct" component={MapProduct}/> 
                                    <Route path="/MapJoke" component={MapJoke}/> 
                                    <Route path="/PropsBasicContactCard" component={PropsBasicContactCard}/>
                                </Switch>
                                </td>
                                <td className="tdwidth10perc">&nbsp;</td>
                            </tr>
                        </table>
                        
                        </div>        
                    </div>
            </div>
        </BrowserRouter>
    </div>
)
}
const Home = () =>{
    return(
      <div>This is Home.</div>
    )
  }
export default Routing