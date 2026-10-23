
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello, GitHub Actions!');
});

app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});

export default app;
