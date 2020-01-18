
const express = require('express');
const app = express();
var path = require('path');
app.use('/static', express.static('public'))
app.use(express.static(__dirname));

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'./store.html'));
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});