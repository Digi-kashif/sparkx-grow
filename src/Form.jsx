import { useState } from "react";
import center from "../src/images/center.jpg";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [mess, setMess] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control success popup visibility
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false); // State to control error popup visibility
  const [loading, setLoading] = useState(false); // State to control loading spinner
 
  function formSubmitData(e) {
    e.preventDefault();
    setLoading(true); 

    const formData = { name, email, mobile, mess };
    axios
      .post("http://localhost:5000/send-email", formData)
      .then((response) => {
        setLoading(false);
        setIsPopupOpen(true);
        setName("");
        setEmail("");
        setMobile("");
        setMess("");
      })
      .catch((error) => {
        setLoading(false);
        setIsErrorPopupOpen(true);
        console.error("There was an error sending the email!", error);
      });
  }

  return (
    <>
      {isPopupOpen && (
        <POP
          message="Thank you for contacting our team. We will get in touch with you soon."
          closePopup={() => setIsPopupOpen(false)}
        />
      )}
      {isErrorPopupOpen && (
        <POP
          message="Error submitting the form.try again later."
          closePopup={() => setIsErrorPopupOpen(false)}
        />
      )}
      <div className="contact" data-aos="zoom-in">
        <div className="contactImg">
          <img src={center} alt="call center" />
        </div>
        <div className="contactDetail">
          <h1>How can we help you?</h1>
          <p>
            Want to know more about us? Reach out using the form below and we
            will get back to you.
          </p>
          <form onSubmit={formSubmitData} className="contactForm">
            <label htmlFor="name">Name</label> <br />
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="sparxgrow"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="sparxgrow@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="mobile">Mobile</label>
            <br />
            <input
              required
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="03183391019"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <br />
            <label htmlFor="mess">Message</label>
            <br />
            <textarea
              required
              name="mess"
              id="mess"
              value={mess}
              onChange={(e) => setMess(e.target.value)}
            ></textarea>
            <br />
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default  Form;

function POP({ message, closePopup }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>
          &times;
        </button>
        <h1>{message}</h1>
      </div>
    </div>
  );
}
