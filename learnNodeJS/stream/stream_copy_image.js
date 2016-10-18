var fs = require('fs');
var source = fs.readFileSync('./img/超人.jpg');

fs.writeFileSync('./img/stream_copy_超人.jpg',source);