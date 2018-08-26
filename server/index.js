const path = require('path');
const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/../app/public'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../app/index.html'));
});

app.listen(3000, () => {
    console.log('Sample SPA is running on port 3000!');
});