import React from 'react'
import './Admin.css';
import Button from "../component/Button"
import Navi from "../component/Navi"


function Admin() {
  return (
        <div>
             <Navi/>
    <div className='container'>
       
        <div className='title-l'>
        Admin Page
        </div>

        <div className='content'>
            <div className='buttons'>
                <Button name={"Manage Students"} link={"./manage-students"}/>
                 <Button name={"Manage Staff"} link={"./manage-staff"}/>
            </div>
        </div>
    </div></div>
  )
}

export default Admin