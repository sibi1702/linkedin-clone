import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import { Avatar } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://media.licdn.com/dms/image/v2/D4D16AQGPxNApazh4PQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1724347273014?e=1741824000&v=beta&t=zfGGH8HLs0LTjNCbvJ3DyH3WJByE6mNcHmcAymwEnCc" alt="" />
            <Avatar className="sidebar__avatar"/>
            <h2>Sibi Chandra Sekar</h2>
            <h4>sibisekar0307@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Profile viewers</p>
                <p className="sidebar__statNumber">28</p>
            </div>
            <div className="sidebar__stat">
                <p>Post impressions</p>
                <p className="sidebar__statNumber">28</p>
            </div>
        </div>

        <div className="sidebar__feature">
            <div className="sidebar__features">
                <SidebarOptions Bookmarkicon={BrandingWatermarkIcon} />
                <p className='sidebar__content'>Premium features</p>
            </div>
            <div className="sidebar__features">
                <SidebarOptions Bookmarkicon={BookmarkIcon} />
                <p className='sidebar__content'>Saved items</p>
            </div>
        </div>

        <div className="sidebar__middle">
            <p>My pages</p>
        </div>

        <div className="sidebar__bottom">
            <p>Recents</p>
        </div>
    </div>
  );
}

export default Sidebar
