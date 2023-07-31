const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('public/images'));
app.use(express.static('public/css'));


app.get('/', (req, res) =>{
  const data = ['download.jpg', 'bird.jpg', 'calgary.jpg', 'mountains.jpg'];
  res.render('index', {images: data} );
});

app.get('/api', (req, res) =>{
    const data = ['download.jpg', 'bird.jpg', 'calgary.jpg', 'mountains.jpg'];
    res.json(data);
});


app.listen(3000, () => {
console.log('Server started on port 3000');
});