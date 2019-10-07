import React from 'react';
import './App.css';
import '../src/css/Todo.css'
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import MainSection from '../src/component/Main'
import Routing from '../src/component/Route/Routing'

function App() {
  return(
    <div>
    <div className="App-CutainLeft">

    </div>   
        <div>
          <Routing/>
        </div>    
    <div  className="App-CutainRight">
    
    </div>
    </div>
  );
}

const Home = () =>{
  return(
    <div>This is Home.</div>
  )
}
export default App;
