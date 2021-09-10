import React,{useState,useEffect} from 'react'
import {Redirect,Route} from 'react-router-dom'

const UserProtected=({component:Cmp}) => {
    const [propertyCount,setPropertyCount]=useState(false)
    const [userCount,setUserCount]=useState(false)
    const [agentCount,setAgentCount]=useState(false)
    const [superAdminCount,setSuperAdminCount]=useState(false)
    

    const get= async ()=>{
        var data=[]
     
        data = JSON.parse(localStorage.getItem('datas'))
 
        console.log(data.length,JSON.parse(localStorage.getItem('datas')))
        for(var i=0;i<data.length;i++){
        
            if(data[i]=='propertyManager'){
                setPropertyCount(true)
            }
            if(data[i]=='userManager'){
                setUserCount(true)
            }
            if(data[i]=='agentManager'){
                setAgentCount(true)
            }
            if(data[i]=='dev'){
                setSuperAdminCount(true)
            }

        }

    }
    useEffect(()=>{
        get()
    },[])
    
    
    return (
       
      <Route render={()=>userCount?<Cmp/>:<Redirect to='login'/>}/>
    )
}

export default UserProtected