import { FaBars } from "react-icons/fa";
import './../Cabecalho/cabecalho.css'
import { useState } from "react";
import Sidebar from "../Sidebar";
import logo from "../../../public/logo3.png"
import { Link } from "react-router-dom";
const Cabecalho = () => {
  const [openSideBar,setOpenSideBar] = useState(false)

  const showSideBar = () => setOpenSideBar(!openSideBar)
    return (
      <div className="Container-cabecalho">
        <div className="menu">
          <FaBars className="svg" onClick={showSideBar}/>
        {openSideBar && <Sidebar active={setOpenSideBar}/>}
        </div>
      
        <div>
          <Link className="item-header" to={'/quemsomos'}>Quem somos</Link>
        </div>
      </div>
    );
  };
  
  export default Cabecalho;