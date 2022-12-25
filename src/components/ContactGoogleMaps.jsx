import React, { useState } from "react";

//custom style
import { ComponentGoogleMaps } from "./style/ContactStyle";

//map
import GoogleMaps from "./GoogleMapsReact";

import "axios"

const ContactGoogleMaps = (props) => {
  const [input, setInput] = useState({
    email: "",
    name: "",
    site: "",
    textArea: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (e) => {
    if (e.target.getAttribute("name") === "name") {
      setInput({
        name: e.target.value,
      });
    } else if (e.target.getAttribute("name") === "email") {
      setInput({
        email: e.target.value,
      });
    } else if (e.target.getAttribute("name") === "website") {
      setInput({
        site: e.target.value,
      });
    } else if (e.target.getAttribute("name") === "message") {
      setInput({
        textArea: e.target.value,
      });
    }
  };

  return (
    <ComponentGoogleMaps className="contact-location">
      <div className="container contact-location__container">
        {/* map */}

        <GoogleMaps/>

        
        

        {/* form */}
        <form className="contact-location__form" onSubmit={handleSubmit}>
          <h2>Get in touch</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={input.name}
            minLength={3}
            required="required"
            onChange={handleChangeInput}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            pattern='/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i'
            minLength={3}
            required="required"
            value={input.email}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            placeholder="Website"
            name="website"
            minLength={3}
            required="required"
            value={input.site}
            onChange={handleChangeInput}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            minLength={3}
            required="required"
            value={input.textArea}
            onChange={handleChangeInput}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </ComponentGoogleMaps>
  );
};

export default ContactGoogleMaps;
