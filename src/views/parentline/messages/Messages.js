import React from 'react'
import { useState } from 'react'
import Header from '../../../components/headers/Header'
import MainContainer from '../../../components/layouts/MainContainer'
import Search from '../../../components/search/Search'

export default function Messages() {
  const [search, setSearch] = useState("")
  
  return (
    <MainContainer fluid>
      <Header title="MESSAGES"/>
      <Search onChange={setSearch} search={search}/>
      
      {/* <table>
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
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </table> */}

    </MainContainer>
  )
}
