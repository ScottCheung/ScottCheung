import React from 'react';
import Navbar from '../conponent/Navbar';
import Contact from '../conponent/Contact';


function ContactPage() {
  const ContactPage = (
    <>
    <Navbar topTextColor={true}/>
    <Contact />
    </>
  );

  return (
    <div>
      {ContactPage}
    </div>
  );
}

export default ContactPage;
