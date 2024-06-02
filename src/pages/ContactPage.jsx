import React from "react";
import Navbar from "../conponent/NavBar/Navbar";
import Contact from "../conponent/Contact";

function ContactPage() {
  const ContactPage = (
    <div className="overflow-hidden">
      <Navbar topTextColor={true} />
      <Contact />
    </div>
  );

  return <div>{ContactPage}</div>;
}

export default ContactPage;
