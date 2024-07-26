import Cabecalho from "../../components/Cabecalho/cabecalho";
import Footer from "../../components/footer";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../LancaDetails/style.css"

const LancaDetails = () => {
    const { id } = useParams();
  const [lancaItem, setLancaItem] = useState(null);

  useEffect(() => {
    const fetchLanca = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/lancamentos/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch lanca');
        }
        const data = await response.json();
        setLancaItem(data);
      } catch (error) {
        console.error('Error fetching lanca:', error);
      }
    };

    fetchLanca();
  }, [id]);

  if (!lancaItem) {
    return <div className="carregando"><h1 className="txt-carregando">Loading...</h1></div>;
  }
    return(
        <>
        <Cabecalho/>
        <div className="containerNews">
            <div className="CardNews">
                <h1 className="Titulo-News">{lancaItem.title}</h1>
                <img src={lancaItem.image} alt="imagem noticia"  className="imgNews"/>
                
                <p className="descricao-News">{lancaItem.description}</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default LancaDetails;