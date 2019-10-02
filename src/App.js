import React from 'react';
import './App.css';
import '../src/css/Todo.css'
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import MainSection from '../src/component/Main'

function App() {
  return (
    <div>
    <div className="App-CutainLeft">

    </div>   
        <div>
     <Header/>
     <MainSection/>
     <Footer/>
    </div>    
    <div  className="App-CutainRight">
    
    </div>
    </div>
  );
}

export default App;
