import React from 'react';

function Food(props){
    console.log(props.fav)
  return    <h2>I like {props.fav}</h2>
}

function App(){
    return(
        <div>
            <h1>Hello World</h1>
            <Food fav="apple" />
        </div>
    )
}

export default App;
