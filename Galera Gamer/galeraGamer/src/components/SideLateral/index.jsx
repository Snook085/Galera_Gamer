import SideCard from "../SideCard";
import "../SideLateral/style.css"
import imgControle from '../../../public/manutenção.jpeg'
import React, { useEffect, useState } from 'react';


const SideLateral = () => {
    const [recentNews, setRecentNews] = useState([]);

    useEffect(() => {
        const fetchRecentNews = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/news');
                if (response.ok) {
                    const news = await response.json();
                    // Ordena as notícias por data (assumindo que você tem um campo `timestamp`)
                    news.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                    // Pega apenas as 5 mais recentes
                    setRecentNews(news.slice(0, 5));
                } else {
                    console.error('Failed to fetch news');
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchRecentNews();
    }, []);
    return(
        <>
            
            <div className="sideBarContent">
                <p className="titleSideLatera">Destaques</p>
                {recentNews.map((news, index) => (
                <SideCard
                    key={index}
                    img={news.image || imgControle} // Usa a imagem da notícia ou uma imagem padrão
                    title={news.title || "Sem título"}
                />
            ))}
            </div>
        </>
    )
}

export default SideLateral;