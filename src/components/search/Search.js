import React from 'react'

export default function Search({search = "", onChange = () => {}}) {
  return (
    <div className='search-container'>
      <div className='search-icon d-inline-block '>
        <i class="fas fa-search"></i>
      </div>
      <input placeholder='Search messages here' type="text" className='search-input' value={search} onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}
