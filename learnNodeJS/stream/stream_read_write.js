var fs = require('fs');

var readStream = fs.createReadStream('./file/1.ppt');
var writeStream = fs.createWriteStream('./file/copy_1.ppt');

readStream.on('data',function (trunk) {
   if (writeStream.write(trunk) === false){
       console.log('数据还在内存');
       readStream.pause();
   }
}).on('end',function () {
    console.log('数据读取完成，关闭写入流');
    writeStream.end();
}).on('close',function () {
    console.log('data close');
}).on('error',function () {
    console.log('data error');
});



writeStream.on('drain',function () {
    console.log('数据已写入');

    readStream.resume();
});