import React, { useRef, useState } from 'react';
import './Contact.css';
import TwitterIcon from '../../assets/twitter.png';
import linkdin from '../../assets/linkdin2.png';
import InstagramIcon from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.webp'
import html from '../../asset/html1.webp';
import css from '../../asset/css1.png'
import js from '../../asset/js.png'
import react from '../../asset/react1.png';
import redux from '../../asset/redux2.webp';
import node from '../../asset/node.png';
import postgresql from '../../asset/postgresql2.svg';
import mongo from '../../asset/mongo.png';
import sql from '../../asset/sql.png';
import cpp from '../../asset/cpp.png'
import java from '../../asset/java.png';
import pyhton from '../../asset/python.png';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

export const Contact = () => {
  const form = useRef();

  const [loading,setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_ws90u1r", "template_e6kjagf", form.current, {
        publicKey: "aWBiaWP8eDf5053E5",
      })
      .then(
        () => {
          toast('Thank You for this Opportunitie');
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setTimeout(()=>{
            toast('Failed..');
            setLoading(false);
          },1000);
        } 
      )
      
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Skills</h1>

        <p className="clientDesc">
          Proficient in front-end and back-end technologies with a strong foundation in full-stack development.
        </p>

        <div className="clientImgs">
          <p>
            <img src={html} alt="html" className="clientImg" />
            HTML
          </p>
          <p>
            <img src={css} alt="css" className="clientImg" />
            CSS
          </p>
          <p>
            <img src={js} alt="js" className="clientImg" />
            JavaScript
          </p>
          <p>
            <img src={react} alt="react" className="clientImg" />
            REACT JS
          </p>
          <p>
            <img src={redux} alt="redux" className="clientImg" />
            REDUX
          </p>
          <p>
            <img src={node} alt="node" className="clientImg" />
            NODE JS
          </p>
          <p>
            <img src={postgresql} alt="postgresql" className="clientImg" />
            PostgreSql
          </p>
          <p>
            <img src={mongo} alt="mongo" className="clientImg" />
            MONGO DB
          </p>
          <p>
            <img src={sql} alt="sql" className="clientImg" />
            SQL
          </p>
          <p>
            <img src={cpp} alt="cpp" className="clientImg" />
            C++
          </p>
          <p>
            <img src={java} alt="java" className="clientImg" />
            JAVA
          </p>
          <p>
            <img src={pyhton} alt="pyhton" className="clientImg" />
            PYTHON
          </p>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form onSubmit={sendEmail} className="contactForm" ref={form}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="from_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button
            type="submit"
            value="Send"
            className="submitBtn"
            disabled={loading}
          >
            {loading ? (
              <>
                <ClipLoader 
                size="18px"
                color='black'
                />

              </>
            ) : (
              "Submit"
            )}
          </button>
          <div className="links">
            <a target="_blank">
              {" "}
              <img src={linkdin} alt="linkdin" className="link1" />
            </a>
            <a target="_blank">
              <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            </a>
            <a target="_blank">
              <img src={InstagramIcon} alt="InstagramIcon" className="link" />
            </a>
            <a target="_blank">
              <img src={whatsapp} alt="whatsapp" className="link2" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
