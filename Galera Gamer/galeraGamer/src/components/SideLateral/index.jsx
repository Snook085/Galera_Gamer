import SideCard from "../SideCard";
import "../SideLateral/style.css"
import imgControle from '../../../public/manutenção.jpeg'


const SideLateral = () => {
    return(
        <>
            
            <div className="sideBarContent">
                <p className="titleSideLatera">Destaques</p>
                <SideCard img={imgControle} title={"Em manutenção"}/>
                <SideCard img={imgControle} title={"Em manutenção"}/>
                <SideCard img={imgControle} title={"Em manutenção"}/>
                <SideCard img={imgControle} title={"Em manutenção"}/>
                <SideCard img={imgControle} title={"Em manutenção"}/>
            </div>
        </>
    )
}

export default SideLateral;