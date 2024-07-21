import CategoryCard from '../categoyCards';
import Footer from '../footer';
import '../Inicio/style.css'
import SideLateral from '../SideLateral';

const Inicio = () => {
    return(
        <>
            <p className="Section-title">Bem vindo a Galera Gamer</p>
            <p className="section-description">Aqui é aonde você se atualiza no mundo dos gamers</p>
            <section className="gridContainer">
                <CategoryCard/>
                <SideLateral/>
            </section>
            <Footer/>
        </>
    )
}

export default Inicio;