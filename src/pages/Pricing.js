import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PriHeading from '../typography/PriHeading';
import SecHeading from '../typography/SecHeading';
import FAQ from '../components/FAQ';

function Pricing(){
    return(
        <div className="bg-gradient">
            {/* Navbar */}
            <Navbar link='pricing'/>
            <div className="flex flex-col items-center justify-center">

                {/* Priamary Heading */}
                <PriHeading text="SIMPLE PRICING" />
                <p className="text-center mt-8 gray-text w-5/6 md:w-7/12">No contracts. No surprise fees. Register now or try out the Webbber free trial so you’re
                 absolutely sure that it’s the right fit for your frontend team</p>

                {/* Buttons */}
                <div className="flex mt-12 justify-evenly">
                        <button className="w-28 sm:w-36 h-12 gradient-rot text-white rounded-sm sm:text-md text-sm">MONTHLY</button>
                        <button className="w-28 sm:w-36 h-12 light-blue text-blue-500 rounded-sm sm:-text-md text-sm">YEARLY</button>
                </div>

                {/* Table - wide */}
                <section className="mt-20 w-5/6 grid grid-cols-4 gray-text hidden md:grid">
                    {/* Column 1 */}
                    <div className="mt-8">
                        <p className="table-margin">&nbsp;</p>
                        <p className="table-margin">&nbsp;</p>
                        <p className="small-screen-margin table-margin table-text text-sm sm:text-base lg:text-lg ">All available links</p>
                        <p className="small-screen-margin table-margin table-text text-sm sm:text-base lg:text-lg ">Own analytics platform</p>
                        <p className="small-screen-margin table-margin table-text text-sm sm:text-base lg:text-lg ">Chat support</p>
                        <p className="small-screen-margin table-margin table-text text-sm sm:text-base lg:text-lg ">Number of users</p>
                        <p className="small-screen-margin table-margin table-text text-sm sm:text-base lg:text-lg ">Optimise hashtags</p>
                        <p className="small-screen-margin table-margin table-text text-sm sm:text-base lg:text-lg ">Account manager</p>
                        <p className="small-screen-margin table-margin table-text text-sm sm:text-base lg:text-lg ">Number of articles</p>
                        <p className="small-screen-margin table-margin table-text text-sm sm:text-base lg:text-lg ">Satisfaction guaranteed</p>
                        <p className="small-screen-margin table-margin table-text text-sm sm:text-base lg:text-lg ">&nbsp;</p>
                    </div>
                    {/* Column 2 */}
                    <div className="mt-8 sm:mt-8 table-column-height">
                        <p className="text-xl sm:text-3xl font-extrabold text-center">Starter</p>
                        <p className="font-medium text-center table-margin"><span className="text-2xl sm:text-4xl font-bold sec-gray">$20</span>/month</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding">1 user</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405630-5b0a3e00-e3d1-11eb-915d-1b34c838b4c8.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405630-5b0a3e00-e3d1-11eb-915d-1b34c838b4c8.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><button className="w-24 h-8 md:w-36 md:h-12 text-sm lg:text-md light-blue text-blue-500">Learn More</button></p>
                    </div>
                    {/* Column 2 */}
                    <div className=" mt-8 lg:mt-8 bg-white rounded-sm mt-8 table-card py-12 relative -top-12">
                        <p className="text-xl sm:text-3xl font-extrabold text-center">Pro</p>
                        <p className="font-medium text-center table-margin"><span className="text-2xl sm:text-4xl font-bold sec-gray">$20</span>/month</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding">3 users</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405630-5b0a3e00-e3d1-11eb-915d-1b34c838b4c8.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><button className="w-24 h-8 md:w-36 md:h-12 text-sm lg:text-md gradient-rot text-white">Get Started</button></p>
                    </div>
                    {/* Column 4 */}
                    <div className="mt-8 lg:mt-8">
                        <div className="text-xl sm:text-3xl font-extrabold text-center">Enterprise</div>
                        <div className="font-medium text-center table-margin"><span className="text-2xl sm:text-4xl font-bold sec-gray">$20</span>/month</div>
                        <div className="text-center flex justify-center table-padding table-margin"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></div>
                        <div className="text-center flex justify-center table-padding table-margin"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></div>
                        <p className="text-center flex justify-center table-padding table-margin"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding">Unlimited</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><button className="w-24 h-8 md:w-36 md:h-12 text-sm lg:text-md light-blue text-blue-500">Learn More</button></p>
                    </div>
                </section>

                            
                {/* Table - NARROW */}
                <section className="mt-20 flex flex-col items-center gray-text md:hidden">
                {/* Section 1 */}
                <div className="mt-8 w-full">
                    <div className="flex justify-between border-b border-gray-200">
                        <p className="text-3xl font-extrabold text-center">Starter</p>
                        <p className="ml-8 font-medium text-center"><span className="text-2xl sm:text-4xl font-bold sec-gray">$20</span>/month</p>  
                    </div>
                    {/* table */}
                    <div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">All available links</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Own analytics platform</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Number of users</p>
                            <p className="text-sm text-base text-center">1</p>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Optimise hashtags</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Account manager</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Number of articles</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Satisfaction guaranteed</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <button className="mt-8 w-24 h-8 md:w-36 md:h-12 text-sm lg:text-md light-blue text-blue-500">Learn More</button>
                    </div>
                </div>    
                <div className="mt-16 w-full">
                    <div className="flex justify-between border-b border-gray-200">
                        <p className="text-3xl font-extrabold text-center">Pro</p>
                        <p className="ml-8 font-medium text-center"><span className="text-2xl sm:text-4xl font-bold sec-gray">$100</span>/month</p>  
                    </div>
                    {/* table */}
                    <div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">All available links</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Own analytics platform</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Number of users</p>
                            <p className="text-sm text-base text-center">3</p>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Optimise hashtags</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Account manager</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Number of articles</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Satisfaction guaranteed</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <button className="mt-8 w-24 h-8 md:w-36 md:h-12 text-sm lg:text-md light-blue text-blue-500">Learn More</button>
                    </div>
                </div>    
                <div className="mt-16 w-full">
                    <div className="flex justify-between border-b border-gray-200">
                        <p className="text-3xl font-extrabold text-center">Enterprise</p>
                        <p className="ml-8 font-medium text-center"><span className="text-2xl sm:text-4xl font-bold sec-gray">$200</span>/month</p>  
                    </div>
                    {/* table */}
                    <div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">All available links</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Own analytics platform</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Number of users</p>
                            <p className="text-sm text-base text-center">Unlimited</p>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Optimise hashtags</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Account manager</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Number of articles</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <div className="w-full flex justify-between mt-8">
                            <p className="text-sm text-base">Satisfaction guaranteed</p>
                            <img className="ml-8 h-4 w-4 objct-contain relative top-1" src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/>
                        </div>
                        <button className="mt-8 w-24 h-8 md:w-36 md:h-12 text-sm lg:text-md light-blue text-blue-500">Learn More</button>
                    </div>
                </div>                 
                </section>
                {/* FAQs */}
               <section className="bg-gray-100 py-28">
                   <div className="mt-4"></div>
                    <SecHeading text="Frequently asked questions"/>
                    <div className="grid sm:grid-rows-3 grid-cols-1 sm:grid-cols-2 stretch gap-8 sm:gap-4 mt-20">
                        <FAQ question="How do I use the webber for 3+ members?" answer="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."/>
                        <FAQ question="What does early access mean" answer="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."/>
                        <FAQ question="Whats the best way to make the most out of it?" answer="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."/>
                        <FAQ question="How are enterprise package customers accomodated?" answer="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."/>
                        <FAQ question="How do I use the webber for 3+ members" answer="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."/>
                        <FAQ question="How do I use the webber for 3+ members" answer="Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil."/>
                    </div>
                </section>

                {/* Blue banner */}
                <section className="gradient w-full h-80 flex flex-col justify-evenly items-center py-16">
                    <h1 className="text-white mx-auto w-100 text-center font-extrabold text-3xl sm:text-5xl">Get results, no matter what</h1>
                    <p className="text-white w-1/2 text-center mt-8 mb-4">Start your free trial today, you get all the pro features for 1 month for you and your team. If you think its not for you can easily unsubscribe</p>
                    <button className="bg-white w-40 h-12 blue-text">Start free trial</button>
                </section>

                {/* Footer */}

                <Footer />
            </div>              
        </div>
    )
}

export default Pricing;



