var klass = require('./klass');
var url = require('url');
var qs = require('querystring');

console.log(qs.escape('徐海涛'));
console.log(qs.unescape('%E5%BE%90%E6%B5%B7%E6%B6%9B'));

console.log(url.parse('http://www.infoq.com:8090/cn/articles/node-js-and-io-js?xht=haha#fff'));
klass.add('徐清秀',['徐海涛','张蕾']);