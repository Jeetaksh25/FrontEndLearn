import React from 'react'
import "./pages/CSS/Form.css"
const Form = () => {
  return (
    <div align="center">
        <h1>Form</h1>
        <form action="" className='FormC'>
            <div>
                <label htmlFor="" className='Label'>Name</label>
                <input type="text" className='Input' placeholder='Enter Name'/>
            </div>
            
            <div>
                <label htmlFor="" className='Label'>Address</label>
                <textarea style={{width:"100%",boxSizing:"border-box",margin:"2px 0px",fontFamily:"sans-serif", fontSize:"18px",resize:"vertical",minHeight:"50px"}} placeholder='Enter Address'/>
            </div>

            <div className='CheckC'> 
                <input type="checkbox" className='Check1'/>
                <input type="checkbox" className='Check2'/>
                <input type="checkbox" className='Check3'/>
            </div>

            <div>
                <select name="" className='Input'>
                    <option value="">Select Car</option>
                    <option value="">BMW</option>
                    <option value="">Audi</option>
                    <option value="">Mercedes</option>
                    <option value="">Honda</option>
                    <option value="">Toyota</option>
                    <option value="">Volkswagen</option>
                    <option value="">Nissan</option>
                    <option value="">Ferrari</option>
                    <option value="">Lamborghini</option>
                    <option value="">Porsche</option>
                    <option value="">Jaguar</option>
                    <option value="">Bugatti</option>
                    <option value="">Koenigsegg</option>
                </select>

            </div>
        </form>
    </div>
  );
}

export default Form;
