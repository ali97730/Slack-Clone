import React from 'react'
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from '../StateProvider';



const Header = ()=> {
    const [{user},dispatch] = useStateValue()
    return (
        <div className="header">
            <div className="header__Left">
                <Avatar className="header__avatar"
                alt={user?.displayName}
                src={user?.photoURL}
                />  
                <AccessTimeIcon/>
                
            </div> 
            <div className="header__search">
                <SearchIcon/>   
                <input className="search__input"/>   
            </div>
            <div className="headerRight">
                    <HelpOutlineIcon/>
            </div>  
        </div>
    )
}
export default Header;
