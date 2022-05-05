import React from 'react'
import "./Button.css"
import {useNavigate} from 'react-router-dom';

function Button(props) {

    const navigate = useNavigate();

    const NavigateTo  = (e) =>{
        const link = props.link;
            navigate(link)
    }
    
  return (
    <div className='button' onClick={(e) => NavigateTo(e)}>
        {props.name}
        </div>
  )
}

export default Button