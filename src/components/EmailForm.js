
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { serviceId, templateId, publicKey } from './Credentials.js';

const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    //     <form ref={form} onSubmit={sendEmail}>
    //     <div class="form-group">
    //       <label for="exampleInputName1">Name</label>
    //       <input type="text" name="user_name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name"/>
    //     </div>
    //     <div class="form-group">
    //       <label for="exampleInputEmail1">Email address</label>
    //       <input type="email" name="user_email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    //     </div>
    //     <div class="form-group">
    //       <label for="exampleInputPassword1">Message</label>
    //       <input type="text" placeholder="Enter a Message"/>
    //     </div>
    //     <button type="submit" class="btn btn-primary">Submit</button>
    //   </form>
    );
};

export default EmailForm;