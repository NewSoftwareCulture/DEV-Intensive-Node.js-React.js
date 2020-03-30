import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) =>{
    return res.json({
        name: 'Hello JS',
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!\nhttp://localhost:3000/');
});