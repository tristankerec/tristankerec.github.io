import { isMobile } from 'react-device-detect';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { serviceId, templateId, publicKey } from './Credentials.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const nameInput = form.current.querySelector('input[name="user_name"]');
        const emailInput = form.current.querySelector('input[name="user_email"]');
        const messageInput = form.current.querySelector('textarea[name="message"]');
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            toast.error('Please fill in all required fields.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => 
        {
            console.log(form.current);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
            <div style={{ paddingBottom:'1vh', display:'flex',justifyContent:'center', maxWidth:'80vw', margin: '0 auto'}}>
                <h4 style={{fontSize: isMobile ? h1Size() * .5 : h1Size() * .32}}>Feel free to send me a message and I'll get back to you!</h4>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div style={{ textAlign: 'left', maxWidth: isMobile ? '88vw' : '60vw', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom:'0.5vh' }}>
                        <div style={{ width: '49.5%' }} className="form-group">
                            <div style={{display: 'flex'}}>
                                <label style={{ paddingBottom:'0.2vh',fontSize: isMobile ? h1Size() * .45 : h1Size() * .32, fontWeight: '500' }} htmlFor="exampleInputName1">Name</label>
                                <h6 style={{color:'#FF6666'}}>*</h6>
                            </div>
                            <input type="text" name="user_name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" />
                        </div>
                        <div style={{ width: '49.5%' }} className="form-group">
                            <div style={{display: 'flex'}}>
                                <label style={{ paddingBottom:'0.2vh', fontSize: isMobile ? h1Size() * .45 : h1Size() * .32, fontWeight: '500' }} htmlFor="exampleInputEmail1">Email address</label>
                                <h6 style={{color:'#FF6666'}}>*</h6>
                            </div>
                            <input type="email" name="user_email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div style={{display: 'flex'}}>
                            <label style={{ paddingBottom:'0.2vh', fontSize: isMobile ? h1Size() * .45 : h1Size() * .32, fontWeight: '500' }}>Message</label>
                            <h6 style={{color:'#FF6666'}}>*</h6>
                        </div>
                        <textarea rows='3' name='message' type="text" className="form-control" placeholder="Enter a Message" />
                    </div>
                    <div style={{ paddingTop: '1.2vh', display: 'flex', justifyContent: 'end' }}>
                        <button style={{ minWidth:'80px',fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70' }} 
                        type="submit" 
                        className="btn btn-primary"
                        onMouseEnter={(e) => {e.target.style.backgroundColor = '#1e9c53'; e.target.style.borderColor = '#1e9c53';}}
                        onMouseLeave={(e) => {e.target.style.backgroundColor = '#2ecc70'; e.target.style.borderColor = '#2ecc70';}}>
                        Send
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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