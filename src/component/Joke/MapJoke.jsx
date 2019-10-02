import React from 'react'
import JokeData from './JokesData'
import BasicJoke from './BasicJoke'

function MapJoke(){
const Data = JokeData.map(joke => <BasicJoke id={joke.id} question={joke.question} punchLine={joke.punchLine}/>);
    return(<div>{Data}</div>)
}
export default MapJoke