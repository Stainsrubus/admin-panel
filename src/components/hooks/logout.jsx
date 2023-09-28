import React from 'react'
import { useNavigate } from 'react-router-dom'

function logout() {
    let navigate=useNavigate();
  return ()=> {
    navigate('/homepage')
  }
}

export default logout
