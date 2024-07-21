import { FaHome, FaTimes ,FaFire} from "react-icons/fa";
import './../Sidebar/styles.css'
import SidebarItem from "../SidebarItem";



const Sidebar = ({active}) => {

    const closeSideBar = () => {
        active(false)
    }
    return(
        <>
        <div className="container-sideBar" sideBar = {active}>
            <FaTimes className="svg-side" onClick={closeSideBar}/>
            <div className="itens-sidebar">
                <SidebarItem Icon={FaHome} texte={"inicio"} to={'/'}/>
                <SidebarItem Icon={FaFire} texte={"Noticias"} to={'/noticias'}/>
            </div>
        </div>
        </>
    )

}

export default Sidebar;