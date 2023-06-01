import { isMobile } from 'react-device-detect';
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
        // <form ref={form} onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input type="text" name="user_name" />
        //     <label>Email</label>
        //     <input type="email" name="user_email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send" />
        // </form>
        <>
            <div style={{ paddingBottom:'1vh', display:'flex',justifyContent:'center', maxWidth:'80vw', margin: '0 auto'}}>
                <h4 style={{fontSize: isMobile ? h1Size() * .5 : h1Size() * .32}}>Feel free to send me a quick message and I'll get back to you!</h4>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div style={{ textAlign: 'left', maxWidth: isMobile ? '88vw' : '60vw', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom:'0.5vh' }}>
                        <div style={{ width: '49.5%' }} className="form-group">
                            <label style={{ paddingBottom:'0.2vh',fontSize: isMobile ? h1Size() * .45 : h1Size() * .32, fontWeight: '500' }} htmlFor="exampleInputName1">Name</label>
                            <input type="text" name="user_name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" />
                        </div>
                        <div style={{ width: '49.5%' }} className="form-group">
                            <label style={{ paddingBottom:'0.2vh', fontSize: isMobile ? h1Size() * .45 : h1Size() * .32, fontWeight: '500' }} htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="user_email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label style={{ paddingBottom:'0.2vh', fontSize: isMobile ? h1Size() * .45 : h1Size() * .32, fontWeight: '500' }}>Message</label>
                        <textarea rows='3' name='message' type="text" className="form-control" placeholder="Enter a Message" />
                    </div>
                    <div style={{ paddingTop: '1.2vh', display: 'flex', justifyContent: 'end' }}>
                        <button style={{ minWidth:'80px',fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70' }} type="submit" className="btn btn-primary">Send</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EmailForm;


function h1Size() {
    // if (Platform.OS === 'ios' || Platform.OS === 'android') {
    //     if (Platform.isPad) {
    //         return 20;
    //     }
    //     return 35;
    // } else {
    if (isMobile) {
        return 35;
    } else {
        return 60;
    }
    // }
}