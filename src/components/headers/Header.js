import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import FloatingOptions from './components/FloatingOptions'
import HomeLinks from './components/HomeLinks'

export default function Header({activeHeader}) {

  const userContext = useContext(UserContext)
  const { user } = userContext.data
  useEffect(() => {
    console.log("TODO: Setup header")
  }, [])

  return (
    <div className="header bg-white">
      <div className="header-links">
        <Link className={activeHeader === "Home" && 'active'} to="/">Home</Link>
      </div>
    </div>
  )
}
