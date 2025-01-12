import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({Bookmarkicon}) {
  return (
    <div className='sidebarOptions'>
      {Bookmarkicon && <Bookmarkicon className='sidebarOptions__icon'/>}
    </div>
  )
}

export default SidebarOptions