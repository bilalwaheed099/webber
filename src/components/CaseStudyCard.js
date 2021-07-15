import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function CaseStudyCard(props){
    return(
        <div className="flex flex-col justify-center items-center text-center md:inline md:text-left">
            <img src={props.img}/>
            <p className="mt-4 font-medium gray-text">{props.tech}</p>
            <h1 className="text-3xl font-extrabold mt-4 sec-gray">{props.title}</h1>
            <p className="mt-4 leading-6 gray-text">{props.desc}</p>
            <Link to='/case-studies-inner'>
                <div className="flex items-center justify-start mt-4">
                    <span className="underline blue-text font-medium">Read Story</span>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16678 10H15.8334" stroke="#0E7490" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 13.3333L15.8333 10" stroke="#0E7490" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.5 6.66661L15.8333 9.99994" stroke="#0E7490" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default CaseStudyCard;