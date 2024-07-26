
import Cabecalho from '../../components/Cabecalho/cabecalho'
import CardLancamentos from '../../components/CardLancamentos'
import Footer from '../../components/footer'
import "../lancamentos/style.css"


const Lancamentos = () => {
    return(
        <>
        <Cabecalho/>
        <h1 className='title-principal'>Lancamentos</h1>
            <section className='gridContainer'>
                <CardLancamentos/>
            </section>
        <Footer/>
        </>
    )
}

export default Lancamentos