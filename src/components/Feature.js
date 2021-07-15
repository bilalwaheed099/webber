import React from 'react';
import '../App.css';

function Feature(props){
    return(
        <div className="flex flex-col justify-center items-center">
            {/* Icon */}
            <img src={props.icon} />
            {/* Heading */}
            <h3 className="font-semibold text-xl md:text-2xl mt-4 sec-gray">{props.heading}</h3>
            {/* Text */}
            <p className="mt-4 text-lg md:text-xl gray-text">Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit. Sed erat nibh tristique.</p>
        </div>
    )
}

export default Feature;