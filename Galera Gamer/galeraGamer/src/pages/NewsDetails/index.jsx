import Cabecalho from "../../components/Cabecalho/cabecalho";
import Footer from "../../components/footer";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../NewsDetails/style.css'

const NewsDetails = () => {
    const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/news/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsItem(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [id]);

  if (!newsItem) {
    return <div className="carregando"><h1 className="txt-carregando">Loading...</h1></div>;
  }
    return(
        <>
        <Cabecalho/>
        <div className="containerNews">
            <div className="CardNews">
                <h1 className="Titulo-News">{newsItem.title}</h1>
                <img src={newsItem.image} alt="imagem noticia"  className="imgNews"/>
                
                <p className="descricao-News">{newsItem.description}</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default NewsDetails;