import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../components/headers/Header'
import MainContainer from '../../../components/layouts/MainContainer'
import Search from '../../../components/search/Search'

export default function Messages() {
  const [search, setSearch] = useState("")
  
  return (
    <MainContainer fluid>
      <Header title="MESSAGES"/>
      <Search onChange={setSearch} search={search}/>
      
      <table className='default-table'>
        <thead>
          <tr>
            <th>TO</th>
            <th>TITLE / MESSAGE</th>
            <th>DATE / TIME</th>
            <th></th>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <td>Saint James Academy, O...</td>
            <td><b>Announcement - </b>Lorem ipsum dolor sit amet, ...</td>
            <td>2/21/22 9:00 AM</td>
            <td><Link to="">View</Link></td>
          </tr>
          <tr>
            <td>Saint James Academy, O...</td>
            <td><b>Announcement - </b>Lorem ipsum dolor sit amet, ...</td>
            <td>2/21/22 9:00 AM</td>
            <td><Link to="">View</Link></td>
          </tr>
          <tr>
            <td>Saint James Academy, O...</td>
            <td><b>Announcement - </b>Lorem ipsum dolor sit amet, ...</td>
            <td>2/21/22 9:00 AM</td>
            <td><Link to="">View</Link></td>
          </tr>
          <tr>
            <td>Saint James Academy, O...</td>
            <td><b>Announcement - </b>Lorem ipsum dolor sit amet, ...</td>
            <td>2/21/22 9:00 AM</td>
            <td><Link to="">View</Link></td>
          </tr>
        </tbody>
      </table>

    </MainContainer>
  )
}
