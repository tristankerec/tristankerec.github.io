import { isMobile } from 'react-device-detect';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { serviceId, templateId, publicKey } from './Credentials.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'



const EmailForm = () => {
    const form = useRef();
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [isNameInvalid, setNameValid] = useState('');
    const [isEmailInvalid, setEmailValid] = useState('');
    const [isMessageInvalid, setMessageValid] = useState('');

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    }
    
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    }

    const handleEmailInvalid = () => {
        setEmailValid(1);
        const nameInput = form.current.querySelector('input[name="user_name"]');
        const messageInput = form.current.querySelector('textarea[name="message"]');
        if (!nameInput.value) {
            setNameValid(1);
        } else {
            setNameValid(0);
        }
        if (!messageInput.value) {
            setMessageValid(1);
        } else {
            setMessageValid(0);
        }
        if (!nameInput.value || !messageInput.value) {
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
    }
    
    const handleMessageChange = (event) => {
        setMessageValue(event.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const nameInput = form.current.querySelector('input[name="user_name"]');
        const emailInput = form.current.querySelector('input[name="user_email"]');
        const messageInput = form.current.querySelector('textarea[name="message"]');
        setNameValid(0);
        setEmailValid(0);
        setMessageValid(0);
        if (!nameInput.value) {
            setNameValid(1);
        } 
        if (!emailInput.value) {
            setEmailValid(1);
        }
        if (!messageInput.value) {
            setMessageValid(1);
        }
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
            toast.success('Email sent successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setNameValue('');
            setEmailValue('');
            setMessageValue('');
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <>
            <div style={{ paddingBottom:'1vh', display:'flex',justifyContent:'center', maxWidth:'80vw', margin: '0 auto'}}>
                <h4 style={{fontSize: isMobile ? h1Size() * .5 : h1Size() * .32}}>Send me a message and I'll get back to you!</h4>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div style={{ textAlign: 'left', maxWidth: isMobile ? '88vw' : '60vw', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom:'0.5vh' }}>
                        <div style={{ width: '49.5%' }} className="form-group">
                            <div style={{display: 'flex'}}>
                                <label style={{ color:isNameInvalid ? '#FF6666' : 'white', paddingBottom:'0.2vh',fontSize: isMobile ? h1Size() * .45 : h1Size() * .32, fontWeight: '500' }} htmlFor="exampleInputName1">Name</label>
                                <h6 style={{color:isNameInvalid ?'#FF6666':'white'}}>*</h6>
                            </div>
                            <input style={{borderColor:isNameInvalid ?'#FF6666':'', borderWidth:'2px'}} type="text" value={nameValue} onChange={handleNameChange} name="user_name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" />
                        </div>
                        <div style={{ width: '49.5%' }} className="form-group">
                            <div style={{display: 'flex'}}>
                                <label style={{ color:isEmailInvalid ? '#FF6666' : 'white', paddingBottom:'0.2vh', fontSize: isMobile ? h1Size() * .45 : h1Size() * .32, fontWeight: '500' }} htmlFor="exampleInputEmail1">Email address</label>
                                <h6 style={{color:isEmailInvalid ?'#FF6666':'white'}}>*</h6>
                            </div>
                            <input style={{borderColor:isEmailInvalid ?'#FF6666':'', borderWidth:'2px'}} type="email" onInvalid={handleEmailInvalid} value={emailValue} onChange={handleEmailChange} name="user_email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div style={{display: 'flex'}}>
                            <label style={{ color:isMessageInvalid ? '#FF6666' : 'white', paddingBottom:'0.2vh', fontSize: isMobile ? h1Size() * .45 : h1Size() * .32, fontWeight: '500' }}>Message</label>
                            <h6 style={{color:isMessageInvalid ?'#FF6666':'white'}}>*</h6>
                        </div>
                        <textarea style={{borderColor:isMessageInvalid ?'#FF6666':'', borderWidth:'2px'}} rows='3' value={messageValue} onChange={handleMessageChange} name='message' type="text" className="form-control" placeholder="Enter a Message" />
                    </div>
                    <div style={{ paddingTop: '1.2vh', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            * Indicates a required field.
                        </div>
                        <div>{!nameValue || !emailValue || !messageValue ? 
                        
                        <><button style={{ minWidth: '80px', fontWeight: '500', backgroundColor: '#A1A5AA', borderColor: '#A1A5AA' }}
                            type="submit"
                            className="btn btn-secondary"
                            data-tooltip-id="disabled-tooltip"
                            data-tooltip-content="Please fill in all required fields."
                            data-tooltip-place="bottom"
                            >
                            Send
                        </button>{!isMobile && <Tooltip id="disabled-tooltip" />}</>
                        :
                        <button style={{ minWidth:'80px',fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70' }} 
                        type="submit" 
                        className="btn btn-primary"
                        onMouseEnter={(e) => {e.target.style.backgroundColor = '#1e9c53'; e.target.style.borderColor = '#1e9c53';}}
                        onMouseLeave={(e) => {e.target.style.backgroundColor = '#2ecc70'; e.target.style.borderColor = '#2ecc70';}}>
                        Send
                        </button>
                        }</div>
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