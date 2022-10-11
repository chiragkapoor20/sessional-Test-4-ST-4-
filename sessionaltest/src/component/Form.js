import React, { useState } from 'react'
import './Form.css'
import { Link, useNavigate } from 'react-router-dom';
import Another from './Another';

export default function Form() {
  const [name, setname] = useState('');
  const [team, setteam] = useState('');
  const [tnum, settnum] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = name, b = team, c = tnum;
    Another.push({ a, b, c });
    console.log(Another);
    history('/startup');
  }

  // console.log(name);
  return (
    <div>

      <div className='container'>
        <h1>New Start Up Form</h1>
        <form className='for'>

          <label for="fname" className='lname'  >Student Name:</label><br />
          <input type="text" value={name}  onChange={(e) => setname(e.target.value)} required/><br />
          <label for="lname" className='lname' >Team Name:</label><br />
          <input type="text" value={team} onChange={(e) => setteam(e.target.value)} required/><br />
          <label for="lname" >Team No.:</label><br />
          <input type="number" className='lname' value={tnum} onChange={(e) => settnum(e.target.value)} required/><br /><br />




          {/* <Link to='/startup'> */}
            <input type="submit" value="Submit" className='btn' onClick={handleSubmit} />
          {/* </Link> */}
        </form>
      </div>






    </div>
  )
}
