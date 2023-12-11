import React from 'react';
import {isMobile} from 'react-device-detect';
import Footer from '../Footer';

const LandingContact = () => {

    return (
        <div id="contact" className="z-[1] relative w-full overflow-hidden bg-[#c2c6af]">
            <video className="hidden lg:block absolute top-0 left-0 min-w-full h-auto -z-10" id="videoId" autoPlay={isMobile ? false : true } playsInline loop muted={true} style={{
                objectFit: "cover",
            }} 
            >
            <source src="/video/sectionContactBackgroundVideo.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 bg-[#c2c6af] bg-opacity-50 h-full xl:bg-transparent flex justify-center items-center py-20 lg:py-[4.5rem] xl:py-24 2xl:py-24 3xl:py-40 4xl:py-48 px-8">
                    <div className="bg-[#E8BDBB] py-12 3xl:bg-transparent 3xl:py-0 xl:px-12 2xl:px-0 mx-auto">
                        <div className="w-full xl:w-[70%] 2xl:w-[70%] mx-auto 2xl:mx-32 3xl:mx-auto">
                            <div className="text-white text-center w-full px-8">
                                <h2 className="w-full my-4">CONTACT US</h2>
                                <p className="w-full my-4 mx-auto">Contact us for more information on The Cheyne Residences.</p>
                            </div>
                            <form name="contact" className="w-full px-8 flex flex-col justify-center items-center" method="post" data-netlify="true">
                                <input type="hidden" name="form-name" value="contact"></input>
                                <div className="form-floating mb-3">
                                    <input type="text" name="name" className="form-control text-themegreen-standard" id="floatingName" placeholder="NAME *" required />
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" name="_replyto" className="form-control" id="floatingEmail" placeholder="EMAIL *" required />
                                </div>
                                <div className="form-floating mb-8 2xl:mb-12">
                                    <textarea className="form-control" name="message" id="floatingMessage" rows="4" required placeholder="MESSAGE" />
                                </div>
                                <button className="text-white bg-themegreen-standard px-4 py-2" type="submit" id="button-addon1">SEND</button>
                            </form>
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingContact;