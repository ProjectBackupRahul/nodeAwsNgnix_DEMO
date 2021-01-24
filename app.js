const express = require('express');

const app = express();
const PORT = process.env.PORT || 8089

app.get('/', async(req, res) =>{
     res.send('<h1> My Node App </h1>')
})

app.listen(PORT, () =>{
       console.log(`The App URL http://localhost:${PORT}`)
})