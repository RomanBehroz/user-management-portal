import React, { useState, Fragment } from 'react'
import Navi from "../component/Navi"
import './Student.css'
import { Link, useNavigate} from 'react-router-dom';
import data from '../data/students-data.json';
import {nanoid} from 'nanoid';
import ReadOnlyRow from '../component/ReadOnlyRow';
import EditableRow from '../component/EditableRow';

function Student() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear()-18;
    var yyyy2 = today.getFullYear()-60;

    today = yyyy + '-' + mm + '-' + dd;
      
       var ValidMinDate = new Date(
            yyyy,
            mm,
            dd,
    
        );

        ValidMinDate = yyyy + '-' + mm + '-' + dd;

       var ValidMaxDate = new Date(
            yyyy2,
            mm,
            dd,
    
        );
        ValidMaxDate = yyyy2 + '-' + mm + '-' + dd;

    
    const [students, setStudents] = useState(data);
    const [active, setActive] = useState(false);
    const [editStudentId, setEditStudentId] = useState(null);
    const [warning, setWarning] = useState ('');
    const [departmentFilter, setDepartmentFilter] = useState('none');
    const [addFormData, setAddFormData] = useState({
        firstName:'',
        lastName:'',
        dob:'',
        gender:'',
        department:'',
        joined:'',
        email:''
    });
    const [editFormData, setEditFormdata] = useState({
        id:'',
        firstName:'',
        lastName:'',
        dob:'',
        gender:'',
        department:'',
        joined:'',
        email:''
    })

    const handleEditFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};

        newFormData[fieldName] = fieldValue;

        setEditFormdata(newFormData);
    }

    const handleAddFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) =>{
        event.preventDefault();

 
         
            const newStudent = {
                id: addFormData.id,
                firstName: addFormData.firstName,
                lastName: addFormData.lastName,
                dob: addFormData.dob,
                gender: addFormData.gender,
                department: addFormData.department,
                joined: addFormData.joined,
                email: addFormData.email
            }
    
            const newStudents = [...students, newStudent];
    
            setStudents(newStudents);
        
       
    }

    const handleActive = () =>{
        setActive(!active);
    }

    const handleEditClick = (event, student) =>{
        event.preventDefault();

        setEditStudentId(student.id)

        const formValues = {
            id:student.id,
            firstName:student.firstName,
            lastName:student.lastName,
            dob:student.dob,
            gender:student.gender,
            department:student.department,
            joined:student.joined,
            email:student.email
        }

        setEditFormdata(formValues);

    }

    const handleEditFormSubmit = (event) =>{
        event.preventDefault();
        const editedStudent = {
            id: editStudentId,
            firstName: editFormData.firstName,
            lastName: editFormData.lastName,
            dob: editFormData.dob,
            gender: editFormData.gender,
            department: editFormData.department,
            joined:editFormData.joined,
            email: editFormData.email
        }

        const newStudents = [...students];

        const index = students.findIndex((student) => student.id===editStudentId)

        newStudents[index] = editedStudent;

        setStudents(newStudents);

        setEditStudentId(null);

    }

    const handleCancelClick = () =>{
        setEditStudentId(null);
    }


    const handleDeleteClick = (studentId) =>{
        const newStudents = students.filter((student) =>student.id !== studentId);

        setStudents(newStudents);
    }


  return (
    <div>
        <Navi/>
        
        <div className='container'>
       
       <div className='title-l mx-2'>
       All Students
       </div>

       {active? <>  <div className=' mx-2'>
           {warning}
           <form className='' onSubmit={handleAddFormSubmit}>
           <div className=''>
                     <input type='text' name='id' required='required' placeholder='Enter an id...' onChange={handleAddFormChange}/>  
               </div>
               <div className=''>
                     <input type='text' name='firstName' required='required' placeholder='Enter a firstname...' onChange={handleAddFormChange}/>  
               </div>
               <div>
                     <input type='text' name='lastName' required='required' placeholder='Enter a lastname...' onChange={handleAddFormChange}/>  
               </div>
               <div><label>Date of birth:</label>
               <input type="date" id="dob" name="dob"
                
                min={ValidMaxDate} max={ValidMinDate}  onChange={handleAddFormChange} required='required'/> 
               </div>
               <div>
                     <input type='text' name='gender' required='required' placeholder='Enter a gender...' onChange={handleAddFormChange}/>  
               </div>
               <div>
                     <input type='text' name='department' required='required' placeholder='Enter a department...' onChange={handleAddFormChange}/>  
               </div>
            <div><label>Joined date:</label>
               <input type="date" id="joined" name="joined"
                
                min="2005-01-01" max="2022-06-07"  onChange={handleAddFormChange} required='required'/> 
               </div>

               <div>
                     <input type='email' name='email' required='required' placeholder='Enter a email...' onChange={handleAddFormChange}/>  
               </div>
               <button className='btn'>Add student</button> <button className='btn' onClick={handleActive}>cancel</button>
           </form>
       </div></>: <></>}
     
       <div>
           <div className='student-btns'> <ul>
               <li onClick={handleActive}>
               Add
               </li>
            
               </ul></div>
               <div className='box'>
              Filter department:
                <select name='departments' onChange={(e) => setDepartmentFilter(e.target.value)}>
                    <option name='none'>none</option>
                    <option name='Technology'>
                        Technology
                    </option>
                    <option name='Biotech'>
                        Biotech
                    </option>
                </select>
              </div>
               <form onSubmit={handleEditFormSubmit}>
             
       <table >
           <thead>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Joined date</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        
            </thead>
             
            <tbody>
          
            
              {departmentFilter !== 'none' ? <>{
        
              
        students.filter((student) => student.department===departmentFilter).map((student)=> 
       <Fragment>
           
        {editStudentId === student.id ? (  <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>)
        :(<ReadOnlyRow student={student} handleEditClick={handleEditClick} 
        handleDeleteClick={handleDeleteClick}/>)}
               
       </Fragment>
       
   )
   } </>: <> {
        
              
        students.map((student)=> 
       <Fragment>
           
        {editStudentId === student.id ? (  <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>)
        :(<ReadOnlyRow student={student} handleEditClick={handleEditClick} 
        handleDeleteClick={handleDeleteClick}/>)}
               
       </Fragment>
       
   )
   } </>}
          </tbody>
            </table>
            </form>
       </div>
       </div>
       </div>
  )
}

export default Student