import React from "react";

//custom style
import { ComponentContact } from "./style/ContactStyle";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactOptions = (props) => {
  return (
    <ComponentContact className="contact">
      <div className="container contact__container">
        {/* Address */}
        <address className="contact__item">
          <div className="contact__item-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact__font" />
          </div>
          <div className="contact__item-description">
            <h2>Address</h2>
            <p>
              <span> Sumqayit</span>
              <span> 31ci donge</span>
            </p>
          </div>
        </address>

        {/* Phone */}
        <div className="contact__item">
          <div className="contact__item-icon">
            <FontAwesomeIcon icon={faPhoneAlt} className="contact__font" />
          </div>
          <div className="contact__item-description">
            <h2>Hotline</h2>
            <p>
              <span>+99455-555-55-55</span>
              <span> / 012-555-55-55</span>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="contact__item">
          <div className="contact__item-icon">
            <FontAwesomeIcon icon={faEnvelope} className="contact__font" />
          </div>
          <div className="contact__item-description">
            <h2>Email</h2>
            <p> Support@gmail.com</p>
          </div>
        </div>
      </div>
    </ComponentContact>
  );
};

export default ContactOptions;
