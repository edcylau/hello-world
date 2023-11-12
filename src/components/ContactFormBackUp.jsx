import React, { useState } from 'react';
import { navigate, Link } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'

// Recaptcha public key
const SITE_RECAPTCHA_KEY = '6Lfg4Y0bAAAAACezrmapXKnEd-GJ80GdmubdzUcs'

const ContactForm = () => {
    const [state, setState] = useState({})
    // With this the button is disabled by default, but on Recaptcha change, the form can be submitted
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const recaptchaRef = React.createRef() // new Ref for reCaptcha

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const recaptchaValue = recaptchaRef.current.getValue()

        const encode = data => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&")
        }

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                'g-recaptcha-response': recaptchaValue,
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(error))
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
                action="/thank-you"
            >
                <input type="hidden" name="form-name" value="Contact Form" />
                <input type="hidden" name="subject" value="Contact form submission from Yae-works.com" />
                <input className="px-4 py-2 my-1" type="text" name="name" id="name" onChange={handleChange} required placeholder="Name" />
                <input className="px-4 py-2 my-1" type="email" name="email" id="email" onChange={handleChange} required placeholder="Email" />
                <textarea className="px-4 py-2 my-1" name="message" id="message" rows="5" onChange={handleChange} required placeholder="Your Message" />
                <Recaptcha
                    ref={recaptchaRef}
                    sitekey={SITE_RECAPTCHA_KEY}
                    size="normal"
                    id="recaptcha-google"
                    onChange={() => setButtonDisabled(false)} // disable the disabled button!
                />
                <p className="text-xxs text-white mb-4">We take your privacy seriously. For more information see our privacy policy.</p>
                <button className="px-4 py-2 w-fit text-white" type="submit" disabled={buttonDisabled}>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;