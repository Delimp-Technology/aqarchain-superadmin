import React from 'react'
import {Redirect,Route} from 'react-router-dom'
const Protected=({component:Cmp}) => {
    return (
      <Route render={()=>localStorage.getItem('token')?<Cmp/>:<Redirect to='login'/>}/>
    )
}

export default Protected
 