import React, { useState } from 'react';
import '../PainelAdmin/style.css'; // Importe o CSS conforme necessário
import logo from '../../../public/snook.png'
import Cabecalho from '../../components/Cabecalho/cabecalho';
import Footer from '../../components/footer';

const PainelAdmin = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [category, setCategory] = useState('news'); // Estado para selecionar a categoria
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, image, description, tags, category }),
            });

            if (response.ok) {
                setSuccessMessage('Notícia/Lançamento adicionado com sucesso!');
                setTitle('');
                setImage('');
                setDescription('');
                setTags('');
                setCategory('news'); // Reset the category to default
            } else {
                const data = await response.json();
                setErrorMessage(data.error || 'Erro ao adicionar notícia/lançamento.');
            }
        } catch (error) {
            setErrorMessage('Erro ao conectar com o servidor.');
        }
    };

    return (
      <>
      <Cabecalho/>
        <div className="containerForm">
            <h2>Painel Administrativo</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form  className="formContainer" onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Endereço da Imagem:</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>Tags:</label>
                    <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
                </div>
                <div>
                    <label>Categoria:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="news">Notícias</option>
                        <option value="lancamentos">Lançamentos</option>
                    </select>
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default PainelAdmin;
