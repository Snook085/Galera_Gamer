import { Link } from "react-router-dom";
import "../../components/SideCard/style.css"

const SideCard = ({img,title,id}) => {
    return(
        <>
        <div  className="sideCard">
            <img src={img} alt="Cardimg" className="sideImgCard" />
            <p className="sideTitleCard">{title}</p>
        </div>
        </>
    )
}

export default SideCard;