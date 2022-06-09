import React from 'react'
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

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
   <tr>
       <td>
        {editFormData.id}
       </td>
       <td>
           <input type='text' required='required' placeholder='Enter a firstname...'
           name='firstName' onChange={handleEditFormChange} 
           value={editFormData.firstName}/>
       </td>
       <td>
           <input type='text' required='required' placeholder='Enter a lastname...'
           name='lastName'onChange={handleEditFormChange}value={editFormData.lastName}/>
       </td>
       <td>
       
               <input type="date" id="dob" name="dob"
                
                min={ValidMaxDate} max={ValidMinDate}  onChange={handleEditFormChange} required='required' value={editFormData.dob}/> 
               

      
       </td>
       <td>
           <input type='text' required='required' placeholder='Enter a gender...'
           name='gender'onChange={handleEditFormChange}value={editFormData.gender}/>
       </td>
       <td>
           <input type='text' required='required' placeholder='Enter a department...'
           name='department'onChange={handleEditFormChange}value={editFormData.department}/>
       </td>
        <td>
      
               <input type="date" id="joined" name="joined"
                
                min="2005-01-01" max="2022-06-07"  onChange={handleEditFormChange} required='required' value={editFormData.joined}/> 
              
        </td>
       <td>
           <input type='email' required='required' placeholder='Enter an email...'
           name='email'onChange={handleEditFormChange}value={editFormData.email}/>
       </td>
       <td><button type='submit'>save</button> <button type='button' onClick={handleCancelClick}>cancel</button></td>
   </tr>
  )
}

export default EditableRow