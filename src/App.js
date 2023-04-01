import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useRef } from "react";
import emailjs, { sendForm } from "emailjs-com";

function App() {
  const form = useRef();

  //creating a function to send the email through the EmailJS to my email.
  const sendEmail = (e) => {
    e.preventDefault();

    //all the required info in order for the info to get to EmailJS & indentify my account.
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      //.then used because sendForm is asynchronous.
      //if clear, logs the text, if error, error message
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };

  return (
    <div className="App">
      {/* a form for the user to write an email, add their name and email */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required></input>
        <label>Email</label>
        <input type="email" name="user_email" required></input>
        <label>Message</label>
        <textarea name="message" required></textarea>
        <input type="submit" value="SEND"></input>
      </form>
    </div>
  );
}

export default App;
