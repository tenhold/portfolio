import React from 'react';
import Mail from '../svgs/Mail';

const Contact = () => {
  return (
    <div className='main'>
      <div className='slash' id='slash-1'></div>
      <div className='slash' id='slash-2'></div>
      <div className='contact'>
        <h1>contact me</h1>
        <h3>Drop me a line I want to hear from you.</h3>
        <a
          href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jtenhold@gmail.com'
          target='_blank'
          rel='noreferrer'>
          <Mail className='mail' />
        </a>
      </div>
    </div>
  );
};

export default Contact;
