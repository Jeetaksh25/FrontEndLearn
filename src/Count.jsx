import React,{useState,useEffect} from 'react'
import "./pages/CSS/Count.css"
const Count = () => {

    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },500);

        return ()=>{
            clearInterval(interval);
        }

    },[]);

    function formatTime(){
        let hours=time.getHours();
        const meridiem = hours >=12 ? "PM" : "AM";
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();

        hours = hours % 12 || 12;

        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }

  return (
    <>
    <div className='ClockC'>
        <h1>{formatTime()}</h1>
    </div>
    </>
  )
}

export default Count
