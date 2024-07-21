import Cabecalho from "../../components/Cabecalho/cabecalho";
import '../quemSomos/style.css'

const QuemSomos = () => {
    return(
        <>
        <Cabecalho/>
        <div className="Container">
            <div className="cardInformativo">
                <h1 className="titulo">Quem Somos</h1>
                <p className="descricao">Bem-vindo ao <strong className="destaque">Galera Gamer</strong> , o ponto de encontro dos apaixonados por games!
                    Sou um gamer dedicado que decidiu transformar a paixão pelos jogos em um projeto para compartilhar
                  experiências e descobertas com o mundo.</p>
                <h2 className="titulo"> Minha Historia</h2>
                <p className="descricao">Tudo começou em <strong className="destaque">2024</strong> , 
                    quando percebi que minhas longas sessões de jogatina e meus debates acalorados 
                    sobre jogos poderiam ser interessantes e úteis para outros gamers.
                     Foi assim que surgiu a ideia de criar o <strong className="destaque">Galera Gamer.</strong> </p>
                     <h2 className="titulo"> Minha Missão</h2>
                <p className="descricao">Meu objetivo é proporcionar conteúdo de qualidade para a comunidade gamer. 
                    Quero ser uma fonte confiável de notícias, análises, tutoriais e curiosidades sobre o universo dos jogos. 
                    Acredito que os games são mais do que entretenimento; são uma forma de arte, uma paixão e um meio de conexão entre pessoas.</p>
            </div>
        </div>
        </>
    )
}

export default QuemSomos;