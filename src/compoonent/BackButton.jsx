import React from 'react'
import Button from './Button';

import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate=useNavigate()
    const handleClick = (e) => {
        e.preventDefault();
        navigate(-1);
    };
  return (
    <Button type="back" 
    onClick={handleClick}>
Back
    </Button>
  )
}

export default BackButton