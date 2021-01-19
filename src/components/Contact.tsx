import React from 'react';

const Contact = () => {
  return (
    <div className='main'>
      <div className='contact'>
        <h1>contact me</h1>
        <a
          href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jtenhold@gmail.com'
          target='_blank'
          rel='noreferrer'>
          email it
        </a>
        {/* <a href='mailto: jtenhold@gmail.com'>email me</a> */}
      </div>
    </div>
  );
};

export default Contact;
