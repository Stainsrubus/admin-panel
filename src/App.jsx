import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import Dashboard from './components/dashboard'
import Create from './components/create'
import Edit from './components/edit'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import UserContext from './components/context/UserContext'
import DashboardContext from './components/context/DashboardContext'
import Homepage from './components/homepage'
import NestedExample from './components/NestedExamples'
import Receipts from "./components/NestedExamples/Reciepts"
import Products from "./components/NestedExamples/Products"
import Staff from './components/NestedExamples/staff'
import Accounts from './components/NestedExamples/accounts'

function App() {


  return (
    <div id='wrapper'>
      <BrowserRouter>
        
        <Routes>
            <Route path='dashboard' element={
              <UserContext>
                <DashboardContext>
               <> <Sidebar />  <Dashboard /></>
                </DashboardContext>
              </UserContext>
            }/>
            <Route path='create' element={
              <UserContext>
               <> <Sidebar /><Create/></> 
              </UserContext>
            }/>
            <Route path='edit/:id' element={
            <UserContext>
             <> <Sidebar /><Edit/></> 
            </UserContext>}/>

            <Route path='homepage' element={<Homepage />}/>
            <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
            <Route path='nested-example' element={<NestedExample/>}>
                <Route path='accounts' element={<Accounts/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='receipts' element={<Receipts/>}/>
                <Route path='staffs' element={<Staff/>}/>
            </Route>
        
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App

