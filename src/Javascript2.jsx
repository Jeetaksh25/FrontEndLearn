import React, { useRef } from 'react';
import './pages/CSS/Javascript2.css';

const Javascript2 = () => {
  const inputRef = useRef(null);

  function handleKeyDown() {
    if (inputRef.current) {
      inputRef.current.classList.add('active');
    }
    else{
      inputRef.current.classList.remove('active');
    }
  }

  function handleBlur() {
    if (inputRef.current) {
      inputRef.current.classList.remove('active');
    }
  }

  function handleEmpty(event){
    if (inputRef.current.value.trim() === "") {
        event.preventDefault();
        alert("Input field is empty");
        inputRef.current.focus();
    }
    else {
        alert("Form Submitted Successfully");
    }
  }

  return (
    <>
    <form action="">
        <input ref={inputRef} type="text" placeholder="Enter Text" onKeyDown={handleKeyDown} onBlur={handleBlur} className="inputText" required/>
        <button type="submit" onClick={handleEmpty}>Submit</button>
    </form>
    </>

  );
};

export default Javascript2;
