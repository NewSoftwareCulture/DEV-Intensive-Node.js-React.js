import express from 'express';

import canonize from './canonize';

const app = express();
app.get('/canonize', (req, res) => {
    const url = req.query.url;
    const username = canonize(url).toLowerCase();
    res.json({
        url,
        username,
    });
});

const pokeUrl = 'https://pokeapi.co/api/v2/';
app.get('/poke', (req, res) => {
    res.json({
    });
});

app.get('/8080', function(req, res) {
    res.send('Bye world');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});