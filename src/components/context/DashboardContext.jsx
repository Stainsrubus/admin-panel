import React from 'react'
export const DashboardDataContext =React.createContext(null)

function DashboardContext({children}) {
   
    let dashboardData=[{
  
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
  return <DashboardDataContext.Provider value={{dashboardData}}>
    {children}
  </DashboardDataContext.Provider>
  
}

export default DashboardContext
