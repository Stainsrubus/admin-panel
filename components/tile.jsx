import React from 'react'

function tile({color,symbol,title,value,isProgress=false}) {
  return <>
  {
    isProgress ?
    <>
        {/* <!-- Earnings (Monthly) Card Example --> */}
 <div className="col-xl-3 col-md-6 mb-4">
     <div className={`card border-left-${color} shadow h-100 py-2`}>
         <div className="card-body">
             <div className="row no-gutters align-items-center">
                 <div className="col mr-2">
                     <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}
                     </div>
                     <div className="row no-gutters align-items-center">
                         <div className="col-auto">
                             <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">`${value}`%</div>
                         </div>
                         <div className="col">
                             <div className="progress progress-sm mr-2">
                                 <div className={`progress-bar bg-${color}`} role="progressbar"
                                     style={{width:`${value}%`,
                                      ariaValuenow:`${value}`,
                                       ariaValuemin:"0",
                                     ariaValuemax:"100"
                                     }}></div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="col-auto">
                     <i className={`fas ${symbol} fa-2x text-gray-300`}></i>
                 </div>
             </div>
         </div>
     </div>
 </div>
    </>
    :
    <>
 {/* <!-- Earnings (Monthly) Card Example --> */}
 <div className="col-xl-3 col-md-6 mb-4">
     <div className={`card border-left-${color} shadow h-100 py-2`}>
         <div className="card-body">
             <div className="row no-gutters align-items-center">
                 <div className="col mr-2">
                     <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
                     <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                 </div>
                 <div className="col-auto">
                     <i className={`fas ${symbol} fa-2x text-gray-300`}></i>
                 </div>
             </div>
         </div>
     </div>
 </div>
    </>
  }
  </>
}

export default tile

