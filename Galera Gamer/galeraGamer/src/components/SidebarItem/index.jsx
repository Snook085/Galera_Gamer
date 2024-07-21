import React from "react";
import '../SidebarItem/styles.css'
import { Link } from "react-router-dom";
const SidebarItem = ({Icon, texte, to}) => {
    return(
        <Link className="container-Sideitem" to={to} >
            <Icon className='svg-icon'></Icon>
            <p className="texto-icon">{texte}</p>
        </Link>
    )
}

export default SidebarItem;