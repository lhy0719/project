var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '哈哈哈哈哈哈哈哈哈哈！！',
    'cid': 348
});

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/document',
    method: 'post',
    hesders: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
        'Cache-Control':'no-cache',
        'Connection':'keep-alive',
        'Content-Length':'61',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=873c717c-77ed-4e04-a80f-c3ff228c2dfe;' +
        ' imooc_isnew_ct=1476258453; loginstate=1;' +
        ' apsid=MxYzcxNDY0NjlmMjBkNjM4OTkxZDZlMjNhZDBjZDYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjI2ODEwOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyMzk4MjQ0OEBxcS5jb20AAAAAAAAAAAAAAAAAAAAAADM0ZWZmYzdiOGJkNTI4YzAwZTU5ZTQxMTU1ZGIwOTM3vOr9V7zq%2FVc%3DN2;' +
        ' last_login_username=23982448%40qq.com;' +
        ' PHPSESSID=oj7469kdmv2810387j9v8tkgj2;' +
        ' jwplayer.playAuto=true;' +
        ' jwplayer.qualityLabel=é«æ¸;' +
        ' jwplayer.volume=57; imooc_isnew=2; cvde=58030ccd955fc-165;' +
        ' Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1476258455,1476444904,1476594896;' +
        ' Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1476700095; IMCDNS=0',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Pragma':'no-cache',
        'Referer':'http://www.imooc.com/comment/348',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
};

var req = http.request(options,function (res) {
    console.log('Stutus:' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.headers));

    res.on('data',function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });

    res.on('end',function () {
        console.log('评论完毕！');
    });

});

req.on('error',function (e) {
    console.log('Error:' + e.message);
});
req.write(postData);

req.end();