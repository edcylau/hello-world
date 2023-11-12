import React, { useState, useEffect } from 'react';
import { navigate, Link } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'
import Popup from 'reactjs-popup';



// Recaptcha public key
const SITE_RECAPTCHA_KEY = '6Lfg4Y0bAAAAACezrmapXKnEd-GJ80GdmubdzUcs'

const ContactForm = () => {

    const [state, setState] = useState({})
    // With this the button is disabled by default, but on Recaptcha change, the form can be submitted
    const [buttonDisabled, setButtonDisabled] = useState(true)
    // For submission modal
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)

    useEffect(() => {
        document.getElementById("myForm").reset();
    }, [open])

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const recaptchaRef = React.createRef() // new Ref for reCaptcha

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        setOpen(o => !o)
        navigate(form.getAttribute('action'))
    }

    return (
        <div className="w-full h-full lg:w-1/3 mb-20 lg:mb-0">
            <h1 className="text-white text-5xl">Contact Us</h1>
            <form className="flex flex-col"
                name="Contact Form"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                onSubmit={handleSubmit}
                id="myForm"
                action="/"
            >
                <input type="hidden" name="form-name" value="Contact Form" />
                <input type="hidden" name="subject" value="Contact form submission from Yae-works.com" />
                <input className="px-4 py-2 my-1" type="text" name="name" id="name" onChange={handleChange} required placeholder="Name" />
                <input className="px-4 py-2 my-1" type="email" name="email" id="email" onChange={handleChange} required placeholder="Email" />
                <textarea className="px-4 py-2 my-1" name="message" id="message" rows="5" onChange={handleChange} required placeholder="Your Message" />
                <p className="text-xxs text-white mb-4">We take your privacy seriously. For more information see our privacy policy.</p>
                <button className="px-4 py-2 w-fit text-white" type="submit">Submit</button>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className="modal rounded text-white bg-custommist">
                        <div className="text-center px-4 py-10">
                            <h2>Thanks! We will get back to you soon!</h2>
                            <div className="py-2 px-4 w-fit mx-auto mt-8" onClick={closeModal}>
                                <Link to="/" >Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </Popup>
            </form>
        </div>
    );
};

export default ContactForm;