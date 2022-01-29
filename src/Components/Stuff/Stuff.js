import React from "react";
import One from "./stuff/One.jpg";
import Two from "./stuff/Two.jpg";
import Theree from "./stuff/Theree.jpg";
import Four from "./stuff/Four.jpg";
import { FaInstagram, FaFacebook , FaTwitter} from 'react-icons/fa';

const Stuff = () => {
  return (
    <div className="stuff">
      <h1>Our Stuff</h1>
      <div className="All">
        <div className="stuff-img">
          <div className="stuff-shadow">
            <div className="stuff-overlay">
            <FaFacebook className="stuf-social" />
            <FaInstagram  className="stuf-social"/>
            <FaTwitter  className="stuf-social" />
            </div>
            <img src={One} />
          </div>
          <h1>Frank Meyer</h1>
          <p>Lacus quis</p>
          
        </div>
        <div className="stuff-img">
          <div className="sevgi">
            <div className="stuff-shadow">
              <div className="stuff-overlay">
              <FaFacebook className="stuf-social" />
            <FaInstagram  className="stuf-social"/>
            <FaTwitter  className="stuf-social" />
              </div>
              <img src={Two} />
            </div>
          </div>
          <h1>Rose Holmes</h1>
          <p>Suspendisse amet</p>
          
        </div>
        <div className="stuff-img">
          <div className="stuff-shadow">
            <div className="stuff-overlay">
            <FaFacebook className="stuf-social" />
            <FaInstagram  className="stuf-social"/>
            <FaTwitter  className="stuf-social" />
            </div>
            <img src={Theree} />
          </div>
          <h1>Louis Fisher</h1>
          <p>Condimentum pharetra</p>
        </div>
        <div className="stuff-img">
          <div className="stuff-shadow">
            <div className="stuff-overlay">
            <FaFacebook className="stuf-social" />
            <FaInstagram  className="stuf-social"/>
            <FaTwitter  className="stuf-social" />
            </div>
            <img src={Four} />
          </div>
          <h1>Natasha James</h1>
          <p>Tincidunt quis</p>
        </div>
      </div>
    </div>
  );
};

export default Stuff;
