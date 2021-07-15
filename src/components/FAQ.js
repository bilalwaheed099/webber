import React from 'react';

function FAQ(props){
    return(
        <div className="">
            <h1 className="text-2xl font-semibold sec-gray">{props.question}</h1>
            <p className="mt-4 leading-6 gray-text">{props.answer}</p>
        </div>
    )
}

export default FAQ;