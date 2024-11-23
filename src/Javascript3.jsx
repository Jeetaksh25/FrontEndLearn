import React,{useEffect,useRef,useState} from 'react'
import './pages/CSS/Javascript3.css'
const Javascript3 = () => {

	const [inputValue,setinputValue] = useState("");
	const paraRef = useRef("Entered Text")
	const imageRef = useRef(null);

	useEffect(()=>{
		const para = document.createElement("p")
		para.innerText = "Hello World"
		document.body.appendChild(para)

		return () => {
			document.body.removeChild(para)
		}
	},[])

	useEffect(()=>{
		const para2 = document.createElement("p")
		para2.innerText = "Hello Saran"
		document.querySelector(".Container").appendChild(para2)

		return () => {
			document.querySelector(".Container").removeChild(para2)
		}
	},[])

	function handleChange(event){
		setinputValue(event.target.value);
	}

	function handleClick(){
		if (imageRef.current.classList.contains("active")) {
			imageRef.current.classList.remove("active");
		}
		else{
			imageRef.current.classList.add("active");
		}
	}




  return (
    <>
		<div className='Container' style={{border:"1px solid black"}}>
			<h2 ref={paraRef}>{inputValue}</h2>
			<input type="text" value={inputValue} onChange={handleChange} placeholder='Enter Text' style={{fontSize:"20px", padding:"10px"}}/>
		</div>

		<div className='imageC' ref={imageRef}>
			<img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt="" width={"200px"} height={"150px"} ref={imageRef} className='image'/>
			<button onClick={handleClick} className='Button' style={{fontSize:"20px", padding:"10px",margin:"10px"}}>Click</button>
		</div>

    </>
  )
}

export default Javascript3
