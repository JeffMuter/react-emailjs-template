import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useRef } from "react";

function App() {
  return (
    <div className="App">
      <form>
        <label>Name</label>
        <input type="text" name="user_name" required></input>
        <label>Email</label>
        <input type="email' name="user_email" required></input>
        <label>Message</label>
        <textarea name="message" required></textarea>
        <input type="submit" value="SEND"></input>
      </form>
    </div>
  );
}

export default App;
