import React from 'react';
import Github from '../svgs/Github';
import Instagram from '../svgs/Instagram';
import Linkedin from '../svgs/Linkedin';
import Mail from '../svgs/Mail';

const Contact = () => {
  return (
    <div className='main'>
      <div className='slash' id='slash-1'></div>
      <div className='slash' id='slash-2'></div>
      <div className='contact'>
        <h1>Get in touch</h1>
        <h3>Drop me a line, I want to hear from you.</h3>
        <ul className='contact-links'>
          <li>
            <a
              href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jtenhold@gmail.com'
              target='_blank'
              rel='noreferrer'>
              <Mail />
            </a>
          </li>
          <li>
            <Linkedin height='60' />
          </li>
          <li>
            <Github width='60' height='60' />
          </li>
          <li>
            <Instagram />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
