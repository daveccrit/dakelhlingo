const http = require('http'); // http server core module
const express = require('express');
const port = 8080 || process.env.PORT;

// Set process name
const app = express();

app.engine('html', require('ejs').renderFile);

// Start Express https server on port
const webServer = http.createServer(app).listen(port);

app.set('view engine', 'html');
app.set('views', 'dist');

app.use('/', express.static('dist', { index: false }));

app.get('/*', (req, res) => {
  res.render('./index', { req, res });
});

webServer.listen(port, () => {
  console.log(`Listening on: https://localhost:${port}`);
});
