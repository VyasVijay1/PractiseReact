import React from 'react'
import {NavLink} from 'react-router-dom'
import MenuStyle from './css/MenuStyle.css'

const Menu = () => {
return (
    <div className="navstyle">
      
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/PropsBasicContactCard">PropsBasicContactCard</NavLink></li>
            <li><NavLink to="/Todo">Todo</NavLink></li>  
            <li><NavLink to="/MapProduct">MapProduct</NavLink></li> 
            <li><NavLink to="/MapJoke">MapJoke</NavLink></li> 
            <li><NavLink to="/IsloggedIn1">IsloggedIn1</NavLink></li> 
            <li><NavLink to="/LifeCycleEvents">LifeCycleEvents</NavLink></li>
            <li><NavLink to="/PassEvents">PassEvents</NavLink></li>
            <li><NavLink to="/ SetState">SetState</NavLink></li>
            <li><NavLink to="/IsloggedIn">IsloggedIn</NavLink></li>
            <li><NavLink to="/BasicClass">BasicClass</NavLink></li>
        </ul>
    </div>
)
}
export default Menu