import React from 'react'

export default function SideNavigationAvatar({avatar, onClick}) {
  // const image_url = ""
  const image_url = "https://fakeface.rest/face/view"
  const name = "John Doe"
  const position = "TFI Admin"
  return (
    <div className='side-navigation-avatar'> 
      {image_url ? <img src={image_url}  alt={name}/> : (
        <div className='side-navigation-avatar-initials'>
          {name.split(" ").map(word => word[0]).join("")}
        </div>
      )}
      <p className='text-center m-0 mt-1 name'>{name}</p>
      <p className='text-center m-0 position'>{position}</p>
    </div>
  )
}
