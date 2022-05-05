import React from 'react'
import './Admin.css';
import Button from "../component/Button"
import Navi from "../component/Navi"
import { Link, useNavigate} from 'react-router-dom';

function Staff() {
  return (
        <div>
           
    <div className='container'>
       
        <div className='title-l'>
        Staff Page <br></br>
        Course Overview
        </div>

        <div className=''>
          <div className='btn'><Link className="" to='/staff/mathe'>MATHE</Link></div>
          <div className='btn'>CHEMIE</div>
          <div className='btn'>DEUTSCH</div>
          <div className='btn'>ENGLISCH</div>
          <div className='btn'>INFORMATIK</div>

        </div>
    </div></div>
  )
}

export default Staff