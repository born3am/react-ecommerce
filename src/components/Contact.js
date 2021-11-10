import React, { useRef, useState } from 'react'
import EmailJS from 'emailjs-com'

export default function Contact() {
    const formRef = useRef()

    const [status, setStatus] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault()
        EmailJS.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                if (result.text === 'OK') {
                    setStatus(true)
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Contact Us</h1>
            {status ? <p>Thank you for your email</p> : <form ref={formRef} action="" onSubmit={sendEmail}>
                <label htmlFor="name" >Name: </label>
                <input type="text" name="user_name" id="name" /> <br />



                <label >Email:
                    <input type="email" name="useremail" /> <br />
                </label>

                <label htmlFor="message" >Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button>send email</button>
            </form>}



        </div>
    )
}
