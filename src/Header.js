import React from 'react'
import "./Header.css"
import { Avatar } from "@material-ui/core"; 
import  AccessTimeIcon  from "@material-ui/icons/AccessTime"; 
import  SearchIcon  from "@material-ui/icons/Search"; 
import  HelpOutlineIcon  from "@material-ui/icons/HelpOutline"; 
import { useStateValue } from "./StateProvider"


function Header() {
    const [{ user }] = useStateValue();


    return (
        <div className="header">
           <div className="header__left">
               {/* Avatar for logged in user*/}
               <Avatar 
                    className="header__avatar"
                    // if user is logged in with credentials avatar inherits credentials
                    alt={user?.displayName}
                    src={user?.photoURL}
                    />
               {/* TimeIcon */}
               <AccessTimeIcon />
           </div>
           <div className="header__search">
               {/* SearchIcon */}
               <SearchIcon />
               {/* input */}
               <input placeholder="Search here" />
           </div>
           <div className="header__right">
               {/* help icon */}
               <HelpOutlineIcon />
           </div>
        </div>
    )
}

export default Header;
