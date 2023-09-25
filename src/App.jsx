import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import Dashboard from '../components/dashboard'
import Create from '../components/create'
import Edit from '../components/edit'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

function App() {

let [data,setData]=useState([
  {
    name:"Surya",
    username:"surya123",
    email:"surya@gmail.com",
    mobile:"1234567890",
    batch:"8011"
  },
  {
    name:"Vijay",
    username:"Vijay123",
    email:"vijay1809@gmail.com",
    mobile:"6789054321",
    batch:"8011"
  },
  {
    name:"Vishal",
    username:"vishal123",
    email:"vishal2001@gmail.com",
    mobile:"9876543210",
    batch:"8011"
  }
])

  return (
    <div id='wrapper'>
      <BrowserRouter>
        <Sidebar /> 
        <Routes>
            <Route path='/dashboard' element={<Dashboard data={data} setData={setData}/>}/>
            <Route path='/create' element={<Create data={data} setData={setData}/>}/>
            <Route path='/edit/:id' element={<Edit data={data} setData={setData} />}/>
            <Route path='*' element={<Navigate to={'/dashboard '}/>}/>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App

