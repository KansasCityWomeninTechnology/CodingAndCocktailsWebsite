var express = require('express');
var app = express();

export default {
   start: (dir) => {
      app.use('/assets', express.static('./public/assets'));

      var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
      });

      app.get('*', function(req, res) {
        res.sendFile(dir + '/public/index.html');
      });

   }
}
