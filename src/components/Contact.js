import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>

            <form action="">
                <label>Name:
                    <input type="text" name="name" /> <br />
                </label>


                <label >Email:
                   <input type="email" name="email" /> <br />
                </label>
                
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="send" />

            </form>

        </div>
    )
}
