import React, { useRef, useEffect } from 'react';
import { FaHome, FaTimes, FaFire } from "react-icons/fa";
import './../Sidebar/styles.css';
import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }) => {
    const sidebarRef = useRef(null);

    const closeSideBar = () => {
        active(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeSideBar();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [active]);

    return (
        <div className="container-sideBar" ref={sidebarRef}>
            <FaTimes className="svg-side" onClick={closeSideBar} />
            <div className="itens-sidebar">
                <SidebarItem Icon={FaHome} texte={"inicio"} to={'/'} />
                <SidebarItem Icon={FaFire} texte={"Notícias"} to={'/noticias'} />
            </div>
        </div>
    );
};

export default Sidebar;