import React, { useState } from 'react'
import './Form.css'
import { Link, useNavigate } from 'react-router-dom';
import another from './another';







export default function Form() {
    const [name, setname] = useState('');
    const [team,setteam] = useState('');
    const [tnum, settnum] = useState('');
  
    let history = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      let a = name, b = team, c = tnum;
      another.push({ a, b, c });
      console.log(another);
      history('/added');
  
  
    }
  return (
    <div>
      
       <div className='container'>
      <h1>New Start Up Form</h1>
        <form  className='for'>

            <label for="fname" className='lname' onChange={(e) => setname(e.target.value)} required>Student Name:</label><br/>
            <input  type="text"/><br/>
            <label for="lname" className='lname' onChange={(e) => setteam(e.target.value)} required>Team Name:</label><br/>
            <input type="text" /><br/>
            <label for="lname" className='lname' onChange={(e) =>settnum(e.target.value)} required>Team No.:</label><br/>
            <input type="number"/><br/><br/>




           <Link to='/added'>
            <input type="submit" value="Submit" className='btn' onClick={handleSubmit} />
            </Link>
        </form>
        </div>






    </div>
  )
}
