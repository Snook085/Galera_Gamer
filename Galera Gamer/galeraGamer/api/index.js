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

// Endpoint para obter todas as notícias
app.get('/api/news', async (req, res) => {
  try {
    const data = await fs.readFile(newsFilePath, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'Error reading news data' });
  }
});

// Endpoint para adicionar uma nova notícia
app.post('/api/news', async (req, res) => {
  const { title, image, description } = req.body;
  const newNews = { title, image, description, timestamp: new Date() };

  try {
    const data = await fs.readFile(newsFilePath, 'utf8');
    const news = JSON.parse(data);
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