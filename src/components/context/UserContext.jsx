import React,{useState} from 'react'
export const UserDataContext =React.createContext(null)

function UserContext({children}) {
   const API_URL='https://6516653109e3260018c9b3ac.mockapi.io/users'
// let [data,setData]=useState([
//     {
//       name:"Surya",
//       username:"surya123",
//       email:"surya@gmail.com",
//       mobile:"1234567890",
//       batch:"8011"
//     },
//     {
//       name:"Vijay",
//       username:"Vijay123",
//       email:"vijay1809@gmail.com",
//       mobile:"6789054321",
//       batch:"8011"
//     },
//     {
//       name:"Vishal",
//       username:"vishal123",
//       email:"vishal2001@gmail.com",
//       mobile:"9876543210",
//       batch:"8011"
//     },
//     {
//         name:"Vishal",
//         username:"vishal123",
//         email:"vishal2001@gmail.com",
//         mobile:"9876543210",
//         batch:"8011"
//       }
//   ])
  return <UserDataContext.Provider value={{API_URL}} >
        {children}
    </UserDataContext.Provider>
  
}

export default UserContext
