const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    fs.readFile('./index.html', 'utf8', (err, html) => {
        if (err) {
            return res.status(404).send("ERROR")
        }
        res.send(html)
    })
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
