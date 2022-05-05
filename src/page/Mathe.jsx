import React from 'react'
import { Link, useNavigate} from 'react-router-dom';


function Mathe() {
  return (
    <div>
<div className='container'>
    <h2>Students of Mathe</h2>
    <ul>
        <li>
            Student 1
        </li>
        <li>
            Student 2
        </li>
        <li>
            Student 3
        </li>

        <li>
            Student 4
        </li>
    </ul>
    <Link className="btn" to='/staff'>GO BACK TO COURSES</Link>
</div>

    </div>
  )
}

export default Mathe