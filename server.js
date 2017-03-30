var http = require('http'),
    app = require('./server/config/express'),
    db = require('./server/config/database')('localhost/focus');

const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
