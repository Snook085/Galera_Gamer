import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/cabecalho';
import logo from '../../../public/snook.png'
import "../PainelAdmin/style.css"
const PainelAdm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newsItem = {
      title,
      image,
      description,
      tags,
    };

    console.log(newsItem)

    try {
      const response = await fetch('http://localhost:5000/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsItem),
      });

      if (!response.ok) {
        throw new Error('Failed to add news');
      }

      console.log('News added successfully');
      // Redirecionar para a página inicial ou para a lista de notícias após a submissão
      navigate('/');
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  return (
    <>
    <Cabecalho/>
    <div className='containerForm'>
      
      <div className='container'>
        <div><img src={logo} alt="imagem painel adm"  className='imgSnook'/>
      </div>
        <form onSubmit={handleSubmit} className='formContainer'>
      <label>Titulo</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Endereço da imagem</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

      <label>Descrição</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label>Tags</label>
      <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />

      <button type="submit">Publicar</button>
    </form>
      </div>
      
    </div>
    
    </>
    
  );
};

export default PainelAdm;