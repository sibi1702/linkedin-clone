import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
function Header() {
  return (
    <div className="header">

          <div className="header__left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" 
            alt="" />

            <div className="header__search">
                <SearchIcon className="header__searchIcon"/>
                <input type="text" placeholder="Search" className="header__searchInput"/>
            </div>
          </div>

          <div className="header__right">
            <HeaderOption Icon={HomeIcon} title={"Home"} />
            <HeaderOption Icon={PeopleIcon} title={"My Network"}/>
            <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
            <HeaderOption Icon={InsertCommentIcon} title={"Messaging"}/>
            <HeaderOption Icon={NotificationsActiveIcon} title={"Notification"} />
            <HeaderOption avatar="https://media.licdn.com/dms/image/v2/D5635AQEEdP67XKcRog/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1711984167041?e=1737050400&v=beta&t=9EhH4t6o4_1cNUVqrdRc_XkyNRDcut85K5YT31CaxK4" title={"Me"}/>
          </div>

    </div>
  );
}

export default Header
