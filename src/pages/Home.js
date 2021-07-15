import React from 'react';
import Navbar from '../components/Navbar';
import SecHeading  from '../typography/SecHeading';
import PriHeading  from '../typography/PriHeading';
import Feature from '../components/Feature';
import BrandLogo from '../components/BrandLogo';
import Card from '../components/Card';
import Footer from '../components/Footer';
import '../App.css';

function Home(){
    return(
        <div>
            <div className="h-screen bg-gradient">
                <Navbar link='home'/>
                <div className="flex flex-col items-center justify-center">
                    {/* Heading */}
                    <PriHeading text="DEPLOY YOUR FRONT-END"/>
                    {/* Buttons */}
                    <div className="flex w-1/2 md:w-1/4 mt-12 justify-evenly">
                        <button className="w-24 md:w-36 h-12 md:h-12 gradient-rot text-white">Get Started</button>
                        <button className="w-24 md:w-36 h-12 md:h-12 light-blue text-blue-500">Learn More</button>
                    </div>
                </div>
            </div>


                {/* Blue Container */}
                <div className="relative -mt-20 gradient-rot2 w-full h-56 flex justify-center stretch"></div>
                    {/* Browser frame */}
                <div className="w-3/4 mx-auto relative -mt-32 flex justify-center">
                    <img className="object-contain" src="https://user-images.githubusercontent.com/57569861/125332027-2c08b380-e362-11eb-91ee-8e40180ceda4.png"/>
                </div>

                
            {/* Features */}
            <div className="mt-48 md:h-screen">
                <SecHeading text="Tailor-made features"/>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-8 w-5/6 mx-auto mt-20">
                        <Feature icon="https://user-images.githubusercontent.com/57569861/125334898-55770e80-e365-11eb-86d2-26ce53ad7cd2.png" heading="Robust workflow" />
                        <Feature icon="https://user-images.githubusercontent.com/57569861/125334900-560fa500-e365-11eb-9705-fc212c53ab15.png" heading="Flexibility" />
                        <Feature icon="https://user-images.githubusercontent.com/57569861/125334902-560fa500-e365-11eb-8c47-f4669b4ebe61.png" heading="User friendly" />
                        <Feature icon="https://user-images.githubusercontent.com/57569861/125334903-56a83b80-e365-11eb-839e-ec8a40d42e44.png" heading="Mulitple layouts" />
                        <Feature icon="https://user-images.githubusercontent.com/57569861/125334905-5740d200-e365-11eb-8e71-f993b311383e.png" heading="Better components" />
                        <Feature icon="https://user-images.githubusercontent.com/57569861/125334954-64f65780-e365-11eb-81b5-fe219d3b7a34.png" heading="Well organised" />
                </div>
            </div>

            {/* How it works */}
            <div className="md:mt-8 mt-16">
                <SecHeading text="How it works"/>
                <section className="flex md:flex-row md:items-center md:justify-evenly mt-12 flex-col-reverse items-center ">
                    {/* Left */}
                    <div className="flex flex-col justify-center ">
                        <h1 className="font-extrabold text-3xl md:text-5xl pri-gray text-left">Sign Up</h1>
                        <p className="mt-8 md:text-xl gray-text md:text-left text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat <br/>
                        vitae a consectetur dolor. Elementum habitant urna, ac quis <br/>
                        laoreet urna purus. Aliquam at est vel auctor rhoncus et. Sit <br/>
                        ac enim, malesuada mattis. Dignissim nibh augue posuer</p>
                        <div className="flex justify-evenly sm:justify-between items-center mt-8">
                        <button className="w-36 h-12 gradient-rot text-white">Learn more</button>

                            <div className="flex w-32 justify-evenly items-center">
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538406 6.65686 0.928931L0.292893 7.29289ZM22 7L1 7L1 9L22 9L22 7Z" fill="#1F2937"/>
                                </svg>
                                <div className="sea-green items-center p-4 rounded-full">
                                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8839 10.8839C22.372 10.3957 22.372 9.60427 21.8839 9.11612L13.9289 1.16117C13.4408 0.673011 12.6493 0.673011 12.1612 1.16117C11.673 1.64932 11.673 2.44078 12.1612 2.92893L19.2322 10L12.1612 17.0711C11.673 17.5592 11.673 18.3507 12.1612 18.8388C12.6493 19.327 13.4408 19.327 13.9289 18.8388L21.8839 10.8839ZM-1.09278e-07 11.25L21 11.25L21 8.75L1.09278e-07 8.75L-1.09278e-07 11.25Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div>
                    <img className="object-contain w-2/3 mt-12 md:mt-0 relative left-8 sm:mb-0 mb-8" src="https://user-images.githubusercontent.com/57569861/125330992-dc75b800-e360-11eb-9f1e-fa3c6ed2631b.png"></img>
                    </div>
                </section>
            </div>

            {/* Blue Banner */}
            <section className="gradient w-full h-96 md:h-64 mt-28 flex flex-col-reverse md:flex-row md:justify-evenly md:items-end p-8 md:py-16 md:px-24">
                {/* left */}
                <div className="text-white flex items-center justify-center md:justify-evenly mt-4 md:mt-0">
                    <img className="object-contain" src="https://user-images.githubusercontent.com/57569861/125337092-02528b00-e368-11eb-9ef6-5b735f0b6ad2.png"/>
                    <div className="md:ml-4 ml-8">
                        <h3 className="font-semibold text-lg">Jenny Wilson</h3>
                        <p className="text-sm leading-6">Vice President</p>
                    </div>
                </div>
                {/* right */}
                <div className="flex md:w-4/6 w-full md:w-5/6 mx-auto">
                    <svg width="28" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.264 10.6001V22.1921H0.528V14.7041C0.528 11.9201 1.032 9.40012 2.04 7.14412C3.048 4.88812 4.728 2.56012 7.08 0.16012L11.328 3.54412C8.928 5.99212 7.464 8.34412 6.936 10.6001H12.264ZM27.312 10.6001V22.1921H15.576V14.7041C15.576 11.9201 16.08 9.40012 17.088 7.14412C18.096 4.88812 19.776 2.56012 22.128 0.16012L26.376 3.54412C23.976 5.99212 22.512 8.34412 21.984 10.6001H27.312Z" fill="white"/>
                    </svg>
                    <p className="text-white w-full font-medium text-center md:text-left text-sm md:text-lg ml-4 leading-8">
                        Eos enim quo est necessitatibus nobis consectetur rerum qui dolores. Quia commodi similique
                        est sed aut. Aspernatur voluptas nisi tenetur voluptates iusto debitis ex voluptatem odit.
                        Repudiandae et et quod et. Enim sit delectus numquam. Molestiae aut voluptatem. Quia
                        commodi similique est sed aut. Aspernatur voluptas nisi tenetur voluptates iusto debitis.</p>
                </div>
            </section>

            {/* Brands */}
            <div className="mt-48 sm:h-screen">
                <SecHeading text="Brands using our services"/>
                <section className="sm:grid flex flex-col items-center mt-20 2xl:grid-cols-4 2xl:grid-rows-2 gap-6 lg:w-1/2 sm:w-2/3 mx-auto lg:grid-cols-3 lg:grid-rows-3 sm:grid-rows-4 sm:grid-cols-2">
                    <BrandLogo image='https://user-images.githubusercontent.com/57569861/125329648-32496080-e35f-11eb-9017-eaa3389e5c6a.png' />
                    <BrandLogo image='https://user-images.githubusercontent.com/57569861/125329661-35445100-e35f-11eb-981c-4c099e419a55.png' />
                    <BrandLogo image='https://user-images.githubusercontent.com/57569861/125329678-37a6ab00-e35f-11eb-8920-2e059fefc230.png' />
                    <BrandLogo image='https://user-images.githubusercontent.com/57569861/125329602-2198ea80-e35f-11eb-9ce7-91139c5c82c6.png' />
                    <BrandLogo image='https://user-images.githubusercontent.com/57569861/125329634-2c537f80-e35f-11eb-9969-23386db2db47.png' />
                    <BrandLogo image='https://user-images.githubusercontent.com/57569861/125329587-1940af80-e35f-11eb-8964-e06a0a5932ba.png' />
                    <BrandLogo image='https://user-images.githubusercontent.com/57569861/125329613-278ecb80-e35f-11eb-90f6-ecbc8e00a19b.png' />
                    <BrandLogo image='https://user-images.githubusercontent.com/57569861/125329640-2f4e7000-e35f-11eb-8008-879be51da3e7.png' />
                </section>
            </div>

            {/* By the numbers */}
            <section className="gradient w-full h-screen sm:h-84 flex flex-col justify-evenly items-center mt-40 sm:mt-20">
            <h1 className="text-white mx-auto w-100 text-center font-black text-4xl sm:text-6xl relative sm:top-14">By the numbers</h1>
                <p className="text-white w-2/3 sm:w-full text-center sm:mt-4 relative sm:top-20">5 years, consistent quality and you get results. No matter what</p>
                <div className="grid sm:grid-cols-4 sm:grid-rows-1 grid-cols-2 grid-rows-2 gap-6 mt-8 relative sm:top-28">
                    <Card number="40+" text="Happy Clients"/>
                    <Card number="540+" text="Projects Completed"/>
                    <Card number="300" text="Dedicated Members"/>
                    <Card number="25+" text="Awards Won"/>
                </div>
            </section>

            {/* Download */}
            <section className="flex flex-col justify-evenly items-center mb-32">
                <h1 className="text-3xl md:text-5xl font-black w-2/3 md:w-1/2 mt-24 sm:mt-60 text-center pri-gray">Build the next big thing and ship to market faster </h1>
                <button className="w-36 h-12 mt-20 gradient-rot text-white">Download now</button>

            </section>
            <Footer />
        </div>
    )
}

export default Home;