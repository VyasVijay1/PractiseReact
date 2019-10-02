import React from 'react'
import BasicJoke from './BasicJoke'

class Joke extends React.Component {
    render(){
    return(
        <div>
            <BasicJoke
            punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
            <BasicJoke 
                question="What's the best thing about Switzerland?" 
                punchLine="I don't know, but the flag is a big plus!"
            />
            <BasicJoke 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />            
            <BasicJoke 
                question="Hear about the new restaurant called Karma?" 
                punchLine="There’s no menu: You get what you deserve."
            />            
            <BasicJoke 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />
            <BasicJoke 
                question="Did you hear about the claustrophobic astronaut?" 
                punchLine="He just needed a little space."
            />   
    </div>
    )
    }
}
export default Joke