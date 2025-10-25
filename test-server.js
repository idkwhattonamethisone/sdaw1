const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Test server is working!', timestamp: new Date().toISOString() });
});

app.get('/api/debug/test', (req, res) => {
    res.json({ message: 'Debug endpoint working!', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
    console.log(`🚀 Test server running on port ${port}`);
});
