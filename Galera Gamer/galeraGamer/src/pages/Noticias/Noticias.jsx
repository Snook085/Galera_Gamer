import Cabecalho from '../../components/Cabecalho/cabecalho';
import CategoryCard from '../../components/categoyCards'
import Footer from '../../components/footer';
import '../Noticias/style.css'

const Noticias = () => {
    return(
        <>  
            <Cabecalho/>
            <h1 className='title-principal'>Noticias</h1>
            <section className='gridContainer'>
                <CategoryCard/>
            </section>
            <Footer/>
        </>
    )
}

export default Noticias;