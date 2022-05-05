import React from 'react'
import './AddStudent.css'
import Navi from '../component/Navi'
import { Link, useNavigate} from 'react-router-dom';

function AddStudent() {
  return (
      <div> <Navi/>
    <div className='addstudent'>
        Firstname:
        <input type="text" />
        Lastname:
        <input type="text" />
        Date of birth:
        <input type="text" />
        Department:
        <input type="text" />
        Gender:
        <select id="role" name="role">
                                <option value="male">male</option>
                                <option value="female">female</option>
                              
            </select>
        Email:
        <input type="text" />
        <div className='space'>  <Link className="btn" to=''>ADD</Link> </div>
       
    </div></div>
  )
}

export default AddStudent