import React,{useState} from 'react'
import "./CSS/Home.css"
const Home = () => {

  const [passwordType,setpasswordType] = useState("password")
  const [passLook,setpassLook]=useState("🙈")
  const [number,setnumber]=useState("square")
  const [name,setName]=useState("")
  function handlepasswordType(){
    setpasswordType(prevType=>(prevType === "password" ? "text" : "password"))
    setpassLook(prevType=>(prevType === "🙈" ? "🫣" : "🙈"))
  }

  return (
    <div className="home">

      <table className='Table'>

        <thead className='Thead'>
          <tr>
          <th>Name</th>
          <th colSpan={2}>Marks</th>
          <th>Total Marks</th>
          </tr>
        </thead>

        <tbody className='Tbody'>
          <tr>
            <td rowSpan={2}>Jeetaksh</td>
            <td>Sub1</td>
            <td>95</td>
            <td rowSpan={2}>195</td>
          </tr>
          <tr>
            <td>Sub2</td>
            <td>100</td>
          </tr>
          <tr>
            <td rowSpan={2}>Faayim</td>
            <td>Sub1</td>
            <td>100</td>
            <th rowSpan={2}>200</th>
          </tr>
          <tr>
            <td>Sub2</td>
            <td>100</td>
          </tr>
        </tbody>

      </table>

      <form action="" className='Form'>
      <label htmlFor="">Name</label>
      <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
      <textarea name="" id="" placeholder='Address'></textarea>
      <input type="checkbox"/>
      <select name="cars">
        <option value="">Select Car</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="lotus">Lotus</option>
      </select>
      <div className='gender'>
        <input type="radio" id='male' name='gender' value='male'/>
        <label htmlFor="male">Male</label>
        <input type="radio" id='female' name='gender' value='female'/>
        <label htmlFor="female">Female</label>
        <input type="radio" id='other' name='gender' value='other'/>
        <label htmlFor="other">Other</label>
      </div>

      <input type="file" typeof="pdf"/>
      <div className='passC'>
        <input type={passwordType} placeholder='Password' id='password'/>
        <button type='button' onClick={handlepasswordType} className='passLook'>{passLook}</button>
      </div>
      <button type='submit' className='submit' onClick={()=>alert("Submitted")}>Submit</button>
      </form>

      <div className='GridC' align="center">
        <div className="Item" style={{gridRowStart:"2"}}>1</div>
        <div className="Item">2</div>
        <div className="Item">3</div>
        <div className="Item">4</div>
        <div className="Item">5</div>
        <div className="Item">6</div>
        <div className="Item">7</div>
        <div className="Item">8</div>
        <div className="Item">9</div>
        <div className="Item">10</div>
        <div className="Item">11</div>
        <div className="Item">12</div>
      </div>
    </div>
  );
}

export default Home;
