import React from 'react'

const ReadOnlyRow = ({ student, handleEditClick, handleDeleteClick}) => {
  return (
    <tr key={student.id}>
    <td>{student.id}</td>
    <td>{student.firstName}</td>
    <td>{student.lastName}</td>
    <td>{student.dob}</td>
    <td>{student.gender}</td>
    <td>{student.department}</td>
    <td>{student.joined}</td>
    <td>{student.email}</td>
    <td><button type='button' onClick={(e) => handleEditClick(e, student)} className=''>Edit</button>
    <button style={{marginLeft:"1rem"}} type='button' onClick={()=> handleDeleteClick(student.id)}>Delete</button>
    </td>
</tr>
  )
}

export default ReadOnlyRow