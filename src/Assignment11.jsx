import React, { useRef, useState } from "react";
import "./pages/CSS/Assignment11.css";
const Assignment11 = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const [nameMessage, setNameMessage] = useState("Name must be at least 3 characters long.");
  const [emailMessage, setEmailMessage] = useState("Please enter a valid email address.");
  const [passMessage, setPassMessage] = useState("Password must be at least 6 characters long.");

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);

  const [nameMcolor, setNameMcolor] = useState("red");
  const [emailMcolor, setEmailMcolor] = useState("red");
  const [passMcolor, setPassMcolor] = useState("red");

  function handleNameChange() {
    if (nameRef.current.value.length <= 3) {
      setNameMessage("Name must be at least 3 characters long.");
      setNameMcolor("red");
      setValidName(false);
    } else {
      setNameMessage("Looks Good!");
      setNameMcolor("green");
      setValidName(true);
    }
  }

  function handleEmailChange() {
    if (
      emailRef.current.value.includes("@") &&
      emailRef.current.value.includes(".")
    ) {
      setEmailMessage("Valid Email!");
      setEmailMcolor("green");
      setValidEmail(true);
    } else {
      setEmailMessage("Please enter a valid email address.");
      setEmailMcolor("red");
      setValidEmail(false);
    }
  }

  function handlePassChange() {
    if (passRef.current.value.length <= 6) {
      setPassMessage("Password must be at least 6 characters long.");
      setPassMcolor("red");
      setValidPass(false);
    } else {
      setPassMessage("Strong Password!");
      setPassMcolor("green");
      setValidPass(true);
    }
  }

  function handleSubmit(event) {
    if (validName && validEmail && validPass) {
      alert("Form Submitted Successfully");
    } else {
      alert("Please fill the form correctly");
      event.preventDefault();
    }
  }

  return (
    <div className="MainC">
      <form action="">
        <label htmlFor="Name">
          Name:&nbsp;
          <input
            type="text"
            placeholder="Name"
            className="Input"
            ref={nameRef}
            onChange={handleNameChange}
            style={{ borderColor: nameMcolor }}
          />
          &nbsp;
          <p className="nameValid" style={{ color: nameMcolor }}>
            {nameMessage}
          </p>
        </label>
        <label htmlFor="Email">
          Email:&nbsp;
          <input
            type="email"
            placeholder="Email"
            className="Input"
            ref={emailRef}
            onChange={handleEmailChange}
            style={{ borderColor: emailMcolor }}
          />
          &nbsp;
          <p className="emailValid" style={{ color: emailMcolor }}>
            {emailMessage}
          </p>
        </label>
        <label htmlFor="password" className="passC">
          <p>Password:</p>&nbsp;
          <div className="passInput">
            <input
              type="password"
              placeholder="Password"
              className="Input"
              ref={passRef}
              onChange={handlePassChange}
              style={{ borderColor: passMcolor }}
            />
          </div>
          &nbsp;
          <p className="passValid" style={{ color: passMcolor }}>
            {passMessage}
          </p>
        </label>
        <button type="submit" className="submitB" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Assignment11;
