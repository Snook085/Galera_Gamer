
import Cards from '../Cards';
import React, { useEffect, useState } from 'react';
import '../categoyCards/style.css'

const CardLancamentos = () => {
        const [lanca, setLanca] = useState([]);

        useEffect(() => {
          fetch('http://localhost:5000/api/lancamentos') // Assuma que seu servidor Node.js está rodando em http://localhost:5000
          .then(response => {
                console.log(response); // Adicione este console.log
                return response.json();
              })
            .then(data => setLanca(data))
            .catch(error => console.error('Error fetching lanca:', error));
        }, []);
    return(
        <>
            <div className="mainContent">
                {lanca.map((item,index) =>
                <Cards id={`/lancamentos/${item.id}`} key={index} title={item.title} img={item.image} description={item.tags}/>
                )}
            </div>        
        </>
    )
}

export default CardLancamentos;