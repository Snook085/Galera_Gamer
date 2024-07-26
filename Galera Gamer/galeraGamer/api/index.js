import express from 'express';
import cors from 'cors';
import fs from 'fs/promises'; // Usando fs.promises para promisify fs
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// Use import.meta.url para obter o diretório atual
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const newsFilePath = path.join(__dirname, 'news.json');
const lancaFilePath = path.join(__dirname, 'lancamentos.json')


const getFilePath = (category) => {
  return category === 'news' ? newsFilePath : lancaFilePath;
};

const sortByTimestampDesc = (a, b) => new Date(b.timestamp) - new Date(a.timestamp);

// Endpoint para obter todas as notícias
app.get('/api/news', async (req, res) => {
  try {
    const data = await fs.readFile(newsFilePath, 'utf8');
    const news = JSON.parse(data);
    news.sort(sortByTimestampDesc);
    res.json(news);
    } catch (error) {
    res.json(JSON.parse(data));
  } 
});

// Endpoint para obter todas os lancamentos
app.get('/api/lancamentos', async (req, res) => {
  try {
    const data = await fs.readFile(lancaFilePath, 'utf8');
    const lancamentos = JSON.parse(data);
    lancamentos.sort(sortByTimestampDesc);
    res.json(lancamentos);
    } catch (error) {
    res.json(JSON.parse(data));
  } 
});

// Endpoint para obter uma notícia específica por ID
app.get('/api/news/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fs.readFile(newsFilePath, 'utf8');
    const news = JSON.parse(data);
    const newsItem = news.find(n => n.id === parseInt(id, 10));
    if (newsItem) {
      res.json(newsItem);
    } else {
      res.status(404).json({ error: 'News not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error reading news data' });
  }
});

// Endpoint para obter um lançamento específica por ID
app.get('/api/lancamentos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fs.readFile(lancaFilePath, 'utf8');
    const lanca = JSON.parse(data);
    const lancaitem = lanca.find(n => n.id === parseInt(id, 10));
    if (lancaitem) {
      res.json(lancaitem);
    } else {
      res.status(404).json({ error: 'News not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error reading news data' });
  }
});


// Endpoint para adicionar uma nova notícia ou lançamento
app.post('/api/posts', async (req, res) => {
  const { title, image, description, tags, category } = req.body;
  const filePath = getFilePath(category);
  
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const items = JSON.parse(data);
    const newId = items.length ? Math.max(...items.map(n => n.id)) + 1 : 1;
    const newItem = { id: newId, title, image, description, tags, timestamp: new Date() };
    items.push(newItem);
    await fs.writeFile(filePath, JSON.stringify(items, null, 2));
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Error writing news data' });
  }
});

// Endpoint para adicionar uma nova notícia
app.post('/api/news', async (req, res) => {
  const { title, image, description, tags } = req.body;
  try {
    const data = await fs.readFile(newsFilePath, 'utf8');
    const news = JSON.parse(data);
    const newId = news.length ? Math.max(...news.map(n => n.id)) + 1 : 1;
    const newNews = { id: newId, title, image, description, tags, timestamp: new Date() };
    news.push(newNews);
    await fs.writeFile(newsFilePath, JSON.stringify(news, null, 2));
    res.status(201).json(newNews);
  } catch (err) {
    res.status(500).json({ error: 'Error writing news data' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;