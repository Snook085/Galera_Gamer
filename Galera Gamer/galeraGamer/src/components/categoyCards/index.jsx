
import Cards from '../Cards';
import React, { useEffect, useState } from 'react';
import '../categoyCards/style.css'

const CategoryCard = () => {
        const [news, setNews] = useState([]);

        useEffect(() => {
          fetch('http://localhost:5000/api/news') // Assuma que seu servidor Node.js está rodando em http://localhost:5000
          .then(response => {
                console.log(response); // Adicione este console.log
                return response.json();
              })
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));
        }, []);
    return(
        <>
            <div className="mainContent">
                {news.map((item,index) =>
                <Cards id={`/noticias/${item.id}`} key={index} title={item.title} img={item.image} description={item.tags}/>
                )}
            </div>        
        </>
    )
}

export default CategoryCard;