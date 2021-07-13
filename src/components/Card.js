import React from 'react';

function Card(props){
    return(
        <div className="border-2 p-8 text-center rounded-2xl bg-white h-60 flex flex-col justify-center items-center ">
            <h1 className="sec-gray text-5xl font-extrabold">{props.number}</h1>
            <p className="gray-text text-xl mt-4">{props.text}</p>
        </div>
    )
}

export default Card;