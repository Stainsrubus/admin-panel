import React from 'react'
import { Link } from 'react-router-dom'

function sidebar() {
  return <>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3"> <sup>Admin panel</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <div className="nav-link" >
                    <Link to='/dashboard'>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span style={{color:"white"}}>Dashboard</span>
                    </Link>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>
            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <div className="nav-link">
                    <Link to='/create'>
                        <i className="fas fa-fw fa-cog"></i>
                            <span style={{color:"white"}}>Create User</span>
                    </Link>
                </div>
            </li>


            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <div className="nav-link">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>View User</span>
                </div>
            </li>

        </ul>
  
  </>}

export default sidebar
