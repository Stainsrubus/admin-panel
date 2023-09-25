import React from 'react'
import Tile from '../components/tile'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function dashboard({data,setData}) {

const navigate = useNavigate();

let Dashboarddata=[{
  
    color:"primary",
    title:"EARNINGS (MONTHLY)",
    value:"40,000",
    symbol:"fa-calendar "
    
},
{
    color:"success",
    title:"EARNINGS (ANNUAL)",
    value:"215,000",
    symbol:"fa-dollar-sign "
},
{   
    isProgress:true,
    color:"info",
    title:"TASKS",
    value:"80",
    symbol:"fa-clipboard-list"
},
{
    color:"warning",
    title:"Pending Request",
    value:"18",
    symbol:"fa-clipboard-list"
},
{
    color:"danger",
    title:"Mail Request",
    value:"33",
    symbol:"fa-clipboard-list"
}

]
let handleDelete= (index) =>{
    let newArray=[...data]//deepcopy
    newArray.splice(index,1)
    setData(newArray)
}

  return <>
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
 {/* <!-- Content Row --> */}
 <div className="row">
    {
        Dashboarddata.map((e,i)=>{
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
