import React, { useContext, useEffect } from 'react'
import { Route } from 'react-router'
import { UserContext } from '../../context/UserContext'

export default function PrivateRoute(props) {

  const userContext = useContext(UserContext)
  const {user} = userContext.data
  useEffect(() => {
    // if(user == null){
    //   window.location.href = '/login?message=Please login to continue'
    // }
  }, [user])

  return <Route {...props} /> // todo remove this line if api is ready
  if(user != null) return (
    <Route {...props}/>
  )
  return <div/>
}
