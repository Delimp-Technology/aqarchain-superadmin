import React,{useState,useEffect} from 'react'
import {Redirect,Route} from 'react-router-dom'
const AgentProtected=({component:Cmp}) => {
    const [propertyCount,setPropertyCount]=useState()
    const [userCount,setUserCount]=useState()
    const [agentCount,setAgentCount]=useState()
    const [superAdminCount,setSuperAdminCount]=useState()
    const get= async ()=>{
        for(var i=0;i<3;i++){
            
            if(localStorage.getItem('datas')[i]=='propertyManager'){
                setPropertyCount(1)

            }
            if(localStorage.getItem('datas')[i]=='userManager'){
                setUserCount(1)
                console.log('us')

            }
            if(localStorage.getItem('datas')[i]=='agentManager'){
                setAgentCount(1)

            }
            if(localStorage.getItem('datas')[i]=='dev'){
                setSuperAdminCount(1)

            }

        }

    }
    useEffect(()=>{
        get()
        console.log(localStorage.getItem('datas').length)

    },[])

    console.log(localStorage.getItem('datas'),'sanchit')
    return (
      <Route render={()=>agentCount==1?<Cmp/>:<Redirect to='login'/>}/>
    )
}

export default AgentProtected