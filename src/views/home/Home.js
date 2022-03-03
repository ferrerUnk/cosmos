import React from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../../components/headers/Header'
import MainContainer from '../../components/layouts/MainContainer'

export default function Home() {
  return <Redirect to="/parentline"/>
}
