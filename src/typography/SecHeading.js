import React from 'react';
import '../App.css';

function SecHeading(props){
    return(
        <h1 className="text-black mx-auto w-100 text-center font-black text-6xl pri-gray">{props.text}</h1>
    )
}

export default SecHeading;