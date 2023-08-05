import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Footer1 from "../Footer1/Footer1";

function myFunction() {
    alert("Your message has been sent");
}

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_xb75vxy",
            "template_omqu9dt",
            form.current,
            "IB0phte2RjliKB7Vm"
        );

        e.target.reset();
    };
    return (
        <div className="Contact-background">
            <div className="ContactText-overlay">
                <section id="contact">
                    <div className="header2">
                        <h2>Contact a Professional</h2>
                    </div>

                    <div className="container contact__container">
                        <div className="contact__options">
                            <article className="contact__option">
                                <MdOutlineEmail className="contact__option-icon" />
                                <h4>Email</h4>
                                <h5>GeniusFitness@gmail.com</h5>
                                <a href="mailto:anhvuong146@gmail.com" target="_blank">
                                    Send a message
                                </a>
                            </article>

                             {/* <article className="contact__option">
                                 <RiMessengerLine className="contact__option-icon" />
                             <h4>Messenger</h4>
                             <h5>Anh Vuong</h5>
                             <a href="https://m.me/bushvuong" target="_blank">
                                     Send a message
                                </a>
                                </article> */}

                            <article className="contact__option">
                                <BsWhatsapp className="contact__option-icon" />
                                <h4>Phone</h4>
                                <h5>(408)123-4567</h5>
                                {/* <a href='mailto:anhvuong146@gmail.com' target='_blank'>Send a message</a> */}
                            </article>
                        </div>

                        {/* END OF CONTACT OPTIONS */}
                        <form ref={form} onSubmit={sendEmail}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                            <textarea
                                name="message"
                                rows="7"
                                placeholder="Your Message"
                                required
                            />
                            <button
                                type="submit"
                                onClick={myFunction}
                                className="Contact-button"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="Footer-bg">
                        <Footer1 />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
