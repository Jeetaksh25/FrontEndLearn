import React, { useState } from 'react'
import "./pages/CSS/Practice2.css"
const Practice2 = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [submit, setSubmit] = useState("Register")

    function handleSubmit(e) {
        e.preventDefault();
        if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
            alert("Please fill all the fields");
        }
        else if (email.includes("@") === false || email.includes(".") === false) {
            alert("Please enter a valid email address");

        }
        else if (password.length < 6) {
            alert("Password must be at least 6 characters long");
        }
        else if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match");
            setPassword("");
            setConfirmPassword("");
        }
        else{
            alert("Form Submitted Successfully");
            window.location.reload();
        }
    }

  return (
    <>
    <nav className='navbar'>
        <ul type="none">
            <li onClick={()=>window.location.href="#"}>Home</li>
            <li onClick={()=>setSubmit("Register")}>Register</li>
            <li onClick={()=>setSubmit("Login")}>Login</li>
        </ul>
    </nav>
    <div className='FormC1'>
    <form action="">
        <input type="text" placeholder='Enter Username' className='Input' onChange={(e)=>setName(e.target.value)} value={name} id='name'/>
        <input type="text" placeholder='Enter Email' className='Input' onChange={(e)=>setEmail(e.target.value)} value={email} id='email'/>
        <input type="password" placeholder='Enter Password' className='Input' onChange={(e)=>setPassword(e.target.value)} value={password} id='password'/>
        <input type="password" placeholder='Confirm Password' className='Input' onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} id='confirmPassword'/>
        <button onClick={handleSubmit}>{submit}</button>
    </form>
    </div>
    </>
  )
}

export default Practice2
