import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import Dashboard from './components/dashboard'
import Create from './components/create'
import Edit from './components/edit'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import UserContext from './components/context/UserContext'
import DashboardContext from './components/context/DashboardContext'
import Homepage from './components/homepage'

function App() {


  return (
    <div id='wrapper'>
      <BrowserRouter>
        
        <Routes>
            <Route path='/dashboard' element={
              <UserContext>
                <DashboardContext>
               <> <Sidebar />  <Dashboard /></>
                </DashboardContext>
              </UserContext>
            }/>
            <Route path='/create' element={
              <UserContext>
               <> <Sidebar /><Create/></> 
              </UserContext>
            }/>
            <Route path='/edit/:id' element={
            <UserContext>
             <> <Sidebar /><Edit/></> 
            </UserContext>}/>

            <Route path='/homepage' element={<Homepage />}/>
            <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App

