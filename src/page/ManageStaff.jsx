import React from 'react'
import Navi from '../component/Navi'
import { Link, useNavigate} from 'react-router-dom';

function ManageStaff() {
  return (
    <div>
        <Navi/>
        <div className='container'>
            <div className='title-l'>All Staff</div>

            <div>
           <div className='student-btns'> <ul>
               <li>
               <Link className="" to='/admin/add-student'>Add</Link>
               </li>
               <li>UPDATE</li>
               <li>DELETE</li>
               </ul></div>
       <table >
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Roman</td>
                <td>Behroz</td>
                <td>13.12.1997</td>
                <td>Male</td>
                <td>IT</td>
                <td>romanbrkz@live.com</td>
            </tr>
            <tr>
            <td>1</td>
                <td>Roman</td>
                <td>Behroz</td>
                <td>13.12.1997</td>
                <td>Male</td>
                <td>IT</td>
                <td>romanbrkz@live.com</td>
            </tr>
            </table>
       </div>


        </div>
    </div>
  )
}

export default ManageStaff