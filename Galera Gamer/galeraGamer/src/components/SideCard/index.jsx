import "../../components/SideCard/style.css"

const SideCard = ({img,title}) => {
    return(
        <>
        <div className="sideCard">
            <img src={img} alt="Cardimg" className="sideImgCard" />
            <p className="sideTitleCard">{title}</p>
        </div>
        </>
    )
}

export default SideCard;