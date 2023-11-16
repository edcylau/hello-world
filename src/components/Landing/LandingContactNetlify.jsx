import React from 'react';
import {isMobile} from 'react-device-detect';
import Footer from '../Footer';

const LandingContact = () => {

    return (
        <div className="z-[1] relative block">
            <video className="hidden md:block" id="videoId" autoPlay={isMobile ? false : true } playsInline loop muted={true} style={{
                position: "absolute",
                width: "100vw",
                height: "auto",
                objectFit: "cover",
                opacity: "1",
                zIndex: "-1",
            }} 
            >
            <source src="/video/sectionContactBackgroundVideo.mp4" type="video/mp4" />
            </video>
            <div className="md:w-screen bg-themegreen-light md:bg-transparent  flex justify-center items-center h-screen flex-col xl:px-32 py-20">
                <div className="bg-themepink-light md:bg-transparent">
                    <div className="text-white text-center w-full px-8">
                        <h2 className="w-full">CONTACT US</h2>
                        <p className="w-full">Contact us for more information on The Cheyne Residences.</p>
                    </div>
                    <form name="contact" className="w-full px-8 flex flex-col justify-center items-center" method="post" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact"></input>
                        <div className="form-floating mb-3">
                            <input type="text" name="name" className="form-control" id="floatingName" placeholder="NAME *" required />
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" name="_replyto" className="form-control" id="floatingEmail" placeholder="EMAIL *" required />
                        </div>
                        <div className="form-floating mb-3">
                            <textarea className="form-control" name="message" id="floatingMessage" rows="5" required placeholder="MESSAGE" />
                        </div>
                        <button className="text-white bg-themegreen-standard px-4 py-2" type="submit" id="button-addon1">SEND</button>
                    </form>
                </div>
            </div>
            <div className="absolute -bottom-[20rem] w-full">
                <Footer />

            </div>

        </div>
    );
};

export default LandingContact;