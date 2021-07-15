import React from 'react';
import '../App.css';

function PriHeading(props){
    return(
        <h1 className="w-3/4 lg:w-3/5 text-5xl sm:text-7xl xl:text-8xl mt-20 font-black pri-gray text-center">{props.text}</h1>

    )
}

export default PriHeading;