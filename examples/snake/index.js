const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('..', 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server listening on port 3000'));