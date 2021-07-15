import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CaseStudyCard from '../components/CaseStudyCard';
import '../App.css';

function CaseStudiesInner(){
    return(
        <div>
            <div className="h-screen bg-gradient">
                <Navbar link='case-studies-inner'/>
                <div className="flex flex-col justify-evenly items-center lg:flex-row lg:items-start stretch">
                    {/* Left */}
                    <div className="w-5/6 md:w-7/12">
                        {/* Intro */}
                        <section className="w-5/6 md:w-3/4 mt-24 md:ml-0 mx-auto text-center md:text-left">
                            <p className="font-medium mt-4 gray-text">Kanban Software</p>
                            <h1 className="font-extrabold text-4xl mt-4 sec-gray">Trello x Webber</h1>
                            <p className="mt-4 gray-text">Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-4 sec-gray">
                                <p className="font-medium">Industry: Technology</p>
                                <p className="font-medium">Use case: Developer operations</p>
                                <p className="font-medium">Since: 2018</p>
                                <p className="font-medium">Package: Enterprise+</p>
                            </div>
                        </section>

                        {/* Details */}
                        <section className="mt-24">
                            <h1 className="text-3xl font-bold sec-gray">The details</h1>
                            <p className="mt-8 leading-6 sec-gray">It is a long established fact that a reader will be distracted by the readable.
                                            There are many variations of passages of Lorem Ipsum available, but the majority 
                                            have suffered alteration in some form, by injected humour, or randomised words which
                                            don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                                            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as 
                                            necessary, making this the first true generator on the Internet. It uses a dictionary 
                                            of over 200 Latin words, combined with a handful of model sentence structures, to generate
                                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                                            from repetition, injected humour, or non-characteristic words etc.</p>

                            <img className="mt-8" src="https://user-images.githubusercontent.com/57569861/125405666-652c3c80-e3d1-11eb-83c0-86b62952ca0d.png" />

                            <p className="mt-4 font-semibold sec-gray">Breakdown of milestones</p>
                            <p className="mt-4 leading-6 sec-gray">- Mauris ullamcorper neque sed mauris gravida, vel mollis velit molestie.</p>
                                <p>- Donec iaculis erat in vulputate venenatis.</p>
                                <p>- Vestibulum et velit et metus commodo iaculis.</p>
                                <p>- Sed et urna a felis accumsan commodo vel vel nibh.</p>
                                <p>- Praesent sollicitudin nulla non sollicitudin varius.</p>
                                <p>- Integer convallis orci sed diam volutpat feugiat.</p>
                                <p>- Donec posuere arcu non semper maximus.</p> 
                            
                            <img className="mt-8" src="https://user-images.githubusercontent.com/57569861/125405669-66f60000-e3d1-11eb-9736-683cf144f9ab.png" />

                            <p className="mt-8 leading-6 sec-gray">It is a long established fact that a reader will be distracted by the readable.
                                            There are many variations of passages of Lorem Ipsum available, but the majority 
                                            have suffered alteration in some form, by injected humour, or randomised words which
                                            don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                                            you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as 
                                            necessary, making this the first true generator on the Internet. It uses a dictionary 
                                            of over 200 Latin words, combined with a handful of model sentence structures, to generate
                                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                                            from repetition, injected humour, or non-characteristic words etc.</p>                                           
                        </section>
                    </div>
                    {/* Right */}
                    <section className="w-5/6 lg:w-4/12 flex flex-col items-center justify-center lg:inline">
                        <img className="mt-8" src="https://user-images.githubusercontent.com/57569861/125405659-62c9e280-e3d1-11eb-8a01-e2325ef04725.png" />
                        <div className="gradient w-full h-80 mt-20 flex flex-col justify-evenly p-8">
                            <h1 className="text-white lg:text-2xl text-xl font-bold">Get Webber for your organization</h1>
                            <p className="text-white text-sm lg:text-base leading-6 mt-8">There are many variations of passages of Lorem Ipsum available, 
                                but the majority have suffered alteration in some form, by injected 
                                humour, or randomised words which don't look.</p>
                            <div className="mt-4">
                                <button className="rounded-sm bg-white w-28 h-8 sm:w-32 sm:h-12 blue-text">Start trial</button>
                                <button className="ml-4 border-solid border border-white bg-transparent rounded-sm w-28 h-8 sm:w-32 sm:h-12 text-white">Contact sales</button>
                            </div>
                        </div>
                    </section>
                </div>
                {/* more case studies */}
                <div className="bg-gray-100 mt-16 py-16 border-b border-gray-300 border-solid">
                    <h1 className="text-3xl  stretch font-bold text-center md:text-left">More case studies</h1>
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12  stretch mt-16">
                        <CaseStudyCard 
                            img="https://user-images.githubusercontent.com/57569861/125405779-8725bf00-e3d1-11eb-88ea-8c34bd2d4c02.png" 
                            tech="Kanban Software"
                            title="Swiss Airline"
                            desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
                        />
                        <CaseStudyCard
                            img="https://user-images.githubusercontent.com/57569861/125405786-8856ec00-e3d1-11eb-8215-9e546d2fabe3.png" 
                            tech="Kling and Sons"
                            title="Trello"
                            desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
                        />
                        <CaseStudyCard 
                            img="https://user-images.githubusercontent.com/57569861/125449915-51d43401-d84b-44df-8e5d-b6631c221cac.png" 
                            tech="Kanban Software"
                            title="Russel - Kertzmann"
                            desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
                        />
                        <CaseStudyCard 
                            img="https://user-images.githubusercontent.com/57569861/125405789-8a20af80-e3d1-11eb-9f29-9b9aed487bc1.png" 
                            tech="Kanban Software"
                            title="Swiss Airline"
                            desc="Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software"
                        />
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default CaseStudiesInner;