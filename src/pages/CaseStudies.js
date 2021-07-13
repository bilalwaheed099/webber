import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import PriHeading from '../typography/PriHeading';
import CaseStudyCard from '../components/CaseStudyCard';

function CaseStudies(){
    return(
        <div className="bg-gradient">
            {/* Navbar */}
            <Navbar link='case-studies'/>
            <div className="flex flex-col items-center justify-center">
                {/* Priamary Heading */}
                <PriHeading text="CASE STUDIES" />
                <p className="text-center mt-8 w-2/3 gray-text">See how leading organizations and freelance developers have used Webber to tackle <br/>
                 different use cases and get ahead of the competition</p>

                {/* Buttons */}
                <div className="flex mt-12 justify-evenly border border-gray-300 bg-transparent w-96 p-4 gray-text">
                    {/* <input className="bg-transparent text-gray-800" type="text"/>
                    <input className="bg-transparent text-gray-800" type="text"/>
                    <input className="bg-transparent text-gray-800" type="text"/> */}
                    <p className="flex items-center justify-evenly">
                        <span className="mr-1.5">Region: All</span> 
                        <span><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#27272A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </span>
                    </p>
                    <p className="flex items-center justify-evenly">
                        <span className="mr-1.5">Industry: All</span> 
                        <span><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#27272A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </span>
                    </p>
                    <p className="flex items-center justify-evenly">
                        <span className="mr-1.5">Type: All</span> 
                        <span><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#27272A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </span>
                    </p>
                </div>
            </div>

            {/* Story Cards */}

            <article className="w-3/4 mx-auto grid grid-cols-2 gap-20 mt-16 mb-20">
                <div className="mt-24 grid grid-rows-3 gap-20">
                    <CaseStudyCard 
                        img="https://user-images.githubusercontent.com/57569861/125405471-36ae6180-e3d1-11eb-9d29-ccef640fcbdf.png" 
                        tech="Technology - SaaS"
                        title="Adobe Systems Inc"
                        desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
                    />
                    <CaseStudyCard
                        img="https://user-images.githubusercontent.com/57569861/125405485-3a41e880-e3d1-11eb-952a-abc6e0ca54f0.png" 
                        tech="Kanban Software"
                        title="Trello"
                        desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
                    />
                    <CaseStudyCard 
                        img="https://user-images.githubusercontent.com/57569861/125405500-3e6e0600-e3d1-11eb-943a-011859328f3e.png" 
                        tech="Technology - SaaS"
                        title="Gutkowski, Schuppe and Pagac"
                        desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
                    />
                </div>
                <div className="grid grid-rows-3 gap-12">
                <CaseStudyCard 
                    img="https://user-images.githubusercontent.com/57569861/125405511-429a2380-e3d1-11eb-8ce4-5303f6199a63.png" 
                    tech="Airline"
                    title="Swiss Airline"
                    desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
                />
                <CaseStudyCard 
                    img="https://user-images.githubusercontent.com/57569861/125405522-44fc7d80-e3d1-11eb-8fa7-7deed84c8325.png" 
                    tech="Technology - SaaS"
                    title="Adobe Systems Inc"
                    desc="Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software"
                />
                <CaseStudyCard 
                    img="https://user-images.githubusercontent.com/57569861/125405535-475ed780-e3d1-11eb-9480-790fa9112caf.png" 
                    tech="Kanban Software"
                    title="Mann and Sons"
                    desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
                />
                </div>
            </article>
        </div>
    )
}

export default CaseStudies;