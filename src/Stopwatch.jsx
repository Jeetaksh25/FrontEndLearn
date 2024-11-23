import React,{useEffect, useRef, useState} from 'react'
import "./pages/CSS/Stopwatch.css"
const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTime = useRef(0)

    useEffect(()=>{ 
      if (isRunning){
        intervalIdRef.current = setInterval(()=>{
          setElapsedTime(Date.now() - startTime.current)
        },10)
        return ()=> {
          clearInterval(intervalIdRef.current)
        }
      }
    },[isRunning])

    function Start(){
      setIsRunning(true);
      startTime.current = Date.now() - elapsedTime;

    }

    function Stop(){
      setIsRunning(false); 
    }

    function Reset(){
      setElapsedTime(0);
      setIsRunning(false);
    }

    function formatTime() {

      let hours = Math.floor(elapsedTime/(1000*60*60));
      let minutes = Math.floor(elapsedTime/(1000*60)) % 60;
      let seconds = Math.floor(elapsedTime/1000) % 60;
      let milliseconds = (elapsedTime % 1000);

      hours = String(hours).padStart(2,"0");
      minutes = String(minutes).padStart(2,"0");
      seconds = String(seconds).padStart(2,"0");
      milliseconds = String(milliseconds).padStart(3,"00");

      return {hours,minutes,seconds,milliseconds};
    }

    const {hours,minutes,seconds,milliseconds} = formatTime();
    
  return (
    <>
        <div className='StopwatchC'>

            <h1>{hours}:{minutes}:{seconds}<span style={{fontSize:"40px"}}>:{milliseconds}</span></h1>

            <div className='ControlC'>
                <button className='Control' onClick={Start}>Start</button>
                <button className='Control' onClick={Stop}>Stop</button>
                <button className='Control' onClick={Reset}>Reset</button>
            </div>
        </div>
    </>
  );
}

export default Stopwatch
