import React from 'react'
import './Navi.css'
import { Link, useNavigate} from 'react-router-dom';
function Navi() {
  return (
    <div>
        <nav>
        <ul>
            <li>  <Link className="" to='/admin'>HOME</Link></li>
            <li>  <Link className="" to='/admin/manage-students'>STUDENTS</Link></li>
            <li>  <Link className="" to='/admin/manage-staff'>STAFF</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navi