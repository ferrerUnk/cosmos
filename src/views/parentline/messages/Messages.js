import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MainContainer from '../../../components/layouts/MainContainer'
import Search from '../../../components/search/Search'

export default function Messages() {
  const [search, setSearch] = useState("")
  
  return (
    <MainContainer fluid headerTitle='MESSAGES'>
      <Search onChange={setSearch} search={search}/>
      <div className="default-table-container">
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
      </div>

    </MainContainer>
  )
}
