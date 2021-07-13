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
                <p className="text-center mt-8 gray-text">No contracts. No surprise fees. Register now or try out the Webbber free trial so you’re <br/>
                 absolutely sure that it’s the right fit for your frontend team</p>

                {/* Buttons */}
                <div className="flex mt-12 justify-evenly">
                        <button className="w-36 h-12 gradient-rot text-white rounded-sm">MONTHLY</button>
                        <button className="w-36 h-12 light-blue text-blue-500 rounded-sm">YEARLY</button>
                </div>

                {/* Table */}
                <section className="mt-20 w-5/6 grid grid-cols-4 gray-text">
                    {/* Column 1 */}
                    <div className="mt-8">
                        <p className="table-margin">&nbsp;</p>
                        <p className="table-margin">&nbsp;</p>
                        <p className="table-margin">All available links</p>
                        <p className="table-margin">Own analytics platform</p>
                        <p className="table-margin">Chat support</p>
                        <p className="table-margin">Number of users</p>
                        <p className="table-margin">Optimise hashtags</p>
                        <p className="table-margin">Account manager</p>
                        <p className="table-margin">Number of articles</p>
                        <p className="table-margin">Satisfaction guaranteed</p>
                        <p className="table-margin">&nbsp;</p>
                    </div>
                    {/* Column 2 */}
                    <div className="mt-8 table-column-height">
                        <p className="text-3xl font-extrabold text-center">Starter</p>
                        <p className="font-medium text-center table-margin"><span className="text-4xl font-bold sec-gray">$20</span>/month</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding">1 user</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405630-5b0a3e00-e3d1-11eb-915d-1b34c838b4c8.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405630-5b0a3e00-e3d1-11eb-915d-1b34c838b4c8.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><button className="w-36 h-12 light-blue text-blue-500">Learn More</button></p>
                    </div>
                    {/* Column 2 */}
                    <div className="bg-white rounded-sm mt-8 table-card py-12 relative -top-12">
                        <p className="text-3xl font-extrabold text-center">Pro</p>
                        <p className="font-medium text-center table-margin"><span className="text-4xl font-bold sec-gray">$20</span>/month</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding">3 users</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405630-5b0a3e00-e3d1-11eb-915d-1b34c838b4c8.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><button className="w-36 h-12 gradient-rot text-white">Get Started</button></p>
                    </div>
                    {/* Column 4 */}
                    <div className="mt-8">
                        <div className="text-3xl font-extrabold text-center">Enterprise</div>
                        <div className="font-medium text-center table-margin"><span className="text-4xl font-bold sec-gray">$20</span>/month</div>
                        <div className="text-center flex justify-center table-padding table-margin"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></div>
                        <div className="text-center flex justify-center table-padding table-margin"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></div>
                        <p className="text-center flex justify-center table-padding table-margin"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding">Unlimited</p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><img src="https://user-images.githubusercontent.com/57569861/125405622-5a71a780-e3d1-11eb-9517-d91c87c4ca70.png"/></p>
                        <p className="table-margin text-center flex justify-center table-padding"><button className="w-36 h-12 light-blue text-blue-500">Learn More</button></p>
                    </div>
                </section>

                {/* FAQs */}
               <section className="bg-gray-100 py-28">
                   <div className="mt-4"></div>
                    <SecHeading text="Frequently asked questions"/>
                    <div className="grid grid-rows-3 grid-cols-2 stretch gap-4 mt-20">
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
                    <h1 className="text-white mx-auto w-100 text-center font-extrabold text-5xl">Get results, no matter what</h1>
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

