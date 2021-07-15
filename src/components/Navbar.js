import React from 'react';
import { Link, Switch, BrowserRouter as router, Route } from 'react-router-dom';
import '../App.css';
import { MenuAlt2Icon } from '@heroicons/react/solid';

function Navbar(props){
    return(
        <div className="flex justify-between items-center h-28 stretch">
            {/* Left Part - LOGO */}
            <div className="flex flex-col items-center ">
                        <svg width="74" height="43" viewBox="0 0 74 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M68.4275 4.86251C65.5951 2.02921 61.8254 0.32942 57.8277 0.0830343C53.8303 -0.163352 49.8806 1.06066 46.7221 3.52471C43.8379 1.2826 40.2895 0.0651642 36.6371 0.0644561C32.9846 0.063748 29.436 1.27981 26.5509 3.5208C23.2605 0.937403 19.1087 -0.291964 14.9431 0.0836796C10.7775 0.459321 6.91226 2.41165 4.13651 5.54207C1.36075 8.67251 -0.11621 12.745 0.0071491 16.928C0.130508 21.1111 1.84488 25.0894 4.80028 28.0506L14.8933 38.1509C14.9012 38.1585 14.909 38.1658 14.9178 38.1737C14.9266 38.1815 14.929 38.1852 14.9346 38.1908C14.9451 38.2013 14.9564 38.2108 14.9669 38.2213C15.1273 38.3802 15.2901 38.535 15.4555 38.6858C15.5405 38.7637 15.6265 38.8393 15.713 38.9153C15.7831 38.9764 15.8537 39.037 15.9245 39.0969C18.8016 41.5361 22.4301 42.9106 26.2003 42.9888C29.9708 43.0673 33.653 41.8451 36.629 39.5274C39.7875 41.9913 43.7373 43.2154 47.7347 42.969C51.7323 42.7226 55.502 41.0228 58.3344 38.1896L68.4277 28.0906C71.5017 25.008 73.2279 20.8312 73.2279 16.4765C73.2279 12.1219 71.5014 7.94513 68.4275 4.86251ZM36.6339 4.34235C39.0336 4.34081 41.3798 5.05166 43.3755 6.38489C45.3714 7.71813 46.9268 9.61381 47.8453 11.832C48.7639 14.0502 49.004 16.4913 48.5355 18.8461C48.0669 21.201 46.9107 23.3638 45.2131 25.0608L36.6339 33.6447L28.0545 25.0608C26.3569 23.3638 25.2006 21.2009 24.7321 18.8461C24.2635 16.4912 24.5037 14.0501 25.4222 11.8319C26.3408 9.61369 27.8964 7.718 29.8921 6.38479C31.888 5.05159 34.2342 4.34076 36.6339 4.34235ZM14.4074 26.5759C14.4031 24.9809 14.7149 23.4011 15.3249 21.9276C15.9349 20.4541 16.831 19.1164 17.9612 17.9917L20.2446 15.707C20.1341 17.9907 20.5024 20.2723 21.326 22.4051C22.1495 24.5377 23.41 26.4744 25.0265 28.0906L33.4302 36.4993C31.6175 37.7696 29.4912 38.5178 27.2828 38.6621C25.0746 38.8063 22.8689 38.3414 20.9066 37.3177C18.9442 36.2937 17.3004 34.7508 16.1543 32.8564C15.0082 30.9623 14.4038 28.7895 14.4069 26.5751L14.4074 26.5759ZM7.82783 25.0205C5.68036 22.8723 4.41615 19.9963 4.28494 16.9608C4.15373 13.9253 5.16504 10.9508 7.11911 8.62513C9.07318 6.29941 11.8279 4.79153 14.8391 4.39933C17.8504 4.00713 20.8991 4.75917 23.3831 6.50684L14.9332 14.9617C13.4041 16.4833 12.1919 18.2933 11.3666 20.2869C10.5414 22.2805 10.1195 24.418 10.1254 26.5759C10.1254 26.8306 10.1314 27.0843 10.1433 27.3373L7.82783 25.0205ZM46.7277 38.7153C44.2488 38.7212 41.8286 37.9615 39.7973 36.5399L48.2423 28.0906C49.8588 26.4744 51.1191 24.5377 51.9427 22.405C52.7662 20.2723 53.1346 17.9907 53.0242 15.707L55.3076 17.9917C57.0045 19.6896 58.1597 21.8527 58.6278 24.2076C59.0961 26.5624 58.8557 29.0034 57.9372 31.2216C57.0189 33.4399 55.4637 35.3358 53.4685 36.6696C51.4731 38.0035 49.1274 38.7153 46.7277 38.7153ZM65.3999 25.0608L63.1248 27.3373C63.1363 27.0845 63.1421 26.8308 63.1426 26.5759C63.1485 24.418 62.7266 22.2805 61.9014 20.2869C61.0761 18.2933 59.8637 16.4833 58.3347 14.9617L49.8906 6.51246C52.379 4.77984 55.4256 4.04218 58.4304 4.4447C61.4352 4.84719 64.1806 6.36072 66.126 8.68725C68.0713 11.0138 69.0756 13.9847 68.9412 17.0151C68.8069 20.0456 67.5436 22.9158 65.3999 25.0608Z" fill="#27272A"/>
                        </svg>
                        <h3 className="font-black sec-gray">WEBBER</h3>
            </div>

            {/* Middle Part - Links */}
            <div className="md:w-1/2 xl:w-5/12 flex md:flex-row md:justify-between gray-text sm:p-0 md:static md:bg-transparent md:h-8 hidden md:flex md:justify-evenly
                            flex-col justify-between w-5/12 h-28 items-end absolute top-16 right-16 pr-2 pt-2 nav">
                <Link className={props.link=='home'?'active':null} to='/'>Overview</Link>
                <Link className={props.link=='pricing'?'active':null} to='/pricing'>Pricing</Link>
                <Link className={props.link=='case-studies'||props.link=='case-studies-inner'?'active':null} to='/case-studies'>Case Studies</Link>
                <Link className={props.link=='faq'?'active':null} to='/pricing'>FAQ</Link>
            </div>

            {/* Links - Narrow */}
            <div className="bg-white w-screen nav-small hidden">
                <Link className={props.link=='home'?'active':null} to='/'>Overview</Link>
                <Link className={props.link=='pricing'?'active':null} to='/pricing'>Pricing</Link>
                <Link className={props.link=='case-studies'||props.link=='case-studies-inner'?'active':null} to='/case-studies'>Case Studies</Link>
                <Link className={props.link=='faq'?'active':null} to='/pricing'>FAQ</Link>
            </div>
            {/* Right Part -Sign in button */}
            <button className="light-blue h-9 w-24 rounded-sm hidden md:inline">Sign In</button>
            {/* <BurgerIcon />  */}
            <MenuAlt2Icon className="h-8 w-8 sec-gray md:hidden cursor-pointer" onClick={e => {
                document.querySelector('.nav-small').classList.toggle('hidden')
                document.querySelector('.nav').classList.toggle('hidden')
            }
            }/>
        </div>
    )
}

export default Navbar;
