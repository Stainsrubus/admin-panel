import React ,{useContext}from 'react'
import Tile from './tile'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from './context/UserContext';
import { DashboardDataContext } from './context/DashboardContext';
import Logout from './hooks/logout';

function dashboard() {
let {dashboardData}=useContext(DashboardDataContext);
let {data,setData}=useContext(UserDataContext);
const navigate = useNavigate();





let handleDelete= (index) =>{
    let newArray=[...data]//deepcopy
    newArray.splice(index,1)
    setData(newArray)
}
let logout=Logout();
  return <>
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <button className='d-noneee d-sm-inline-block btn btn-sm btn-primary' onClick={logout}>Logout</button>
    </div>
 {/* <!-- Content Row --> */}
 <div className="row">
    {
        dashboardData.map((e,i)=>{
            return <Tile color={e.color}
                         symbol={e.symbol}
                         title={e.title}
                         value={e.value}
                         isProgress={e.isProgress}
                         key={i} 
                         />
        })
    }
 </div>
        <div className='row'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>UserName</td>
                        <td>Email</td>
                        <td>Mobile</td>
                        <td>Batch</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e,i)=>{
                                  return  <tr>
                                        <td>{i+1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.username}</td>
                                        <td>{e.email}</td>
                                        <td>{e.mobile}</td>
                                        <td>{e.batch}</td>
                                       <td>
                                        <Button variant='primary' onClick={()=>{
                                            navigate(`/edit/${i}`)
                                        }}>Edit</Button>
                                        &nbsp;
                                        &nbsp;
                                        <Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
                                       </td>
                                    </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    </div>
    </>
}

export default dashboard
