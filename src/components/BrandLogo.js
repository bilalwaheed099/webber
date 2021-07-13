import React from 'react';
import '../App.css';

function BrandLogo(props){
    return(
        <div className="h-24 w-48 flex justify-center brand-shadow">
            <img className="object-none" src={props.image} />
        </div>
    )
}

export default BrandLogo;