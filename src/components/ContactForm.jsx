import React from "react";

const ContactFrom = ({
  contact_from_heading,
  contact_from_subheading,
  contact_from_button
}) => {
  return (
    <div className="Container-fluid contactFromDiv">
      <header className="contactHeading">
        <h2>{contact_from_heading}</h2>
        <h4>{contact_from_subheading}</h4>
      </header>
      <div className="form">
        <input type="text" name="name" placeholder="enter name" />
        <input type="email" name="email" placeholder="enter Email" />
        <textarea name="message" placeholder="Leave message here" />
        <br />
        <input type="submit" value={contact_from_button} />
      </div>
    </div>
  );
};
export default ContactFrom;
