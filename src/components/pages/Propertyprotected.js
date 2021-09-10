import React,{useState,useEffect} from 'react'
import {Redirect,Route} from 'react-router-dom'
var p=0;
var u =0;
var a =0
var d= 0
const PropertyProtected=({component:Cmp}) => {
    const [propertyCount,setPropertyCount]=useState(Boolean)
    const [userCount,setUserCount]=useState(Boolean)
    const [agentCount,setAgentCount]=useState(Boolean)
    const [superAdminCount,setSuperAdminCount]=useState(Boolean)
    

    const get= async ()=>{
        var data=[]
        var p=0;
        var u =0;
        var a =0
        var d= 0
        data = JSON.parse(localStorage.getItem('datas'))
 
        console.log(data.length,JSON.parse(localStorage.getItem('datas')))
        for(var i=0;i<data.length;i++){
            console.log(data[i])
            if(data[i]=='propertyManager'){
                setPropertyCount(true)
                p=1

            }
            if(data[i]=='userManager'){
                setUserCount(true)
                u=1
                console.log('us',data[i])

            }
            if(data[i]=='agentManager'){
                a=1
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
       
      <Route render={()=>superAdminCount==false?<Cmp/>:<Redirect to='login'/>}/>
    )
}

export default PropertyProtected