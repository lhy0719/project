var http = require('http');
var Promise = require('Promise');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

// http.get(url,function (res) {
//    var html = '';
//
//     res.on('data',function (data) {
//         html += data;
//     });
//
//     res.on('end',function () {
//         var parseData = filterChapter(html);
//
//         printCourse(parseData);
//     });
// }).on('error',function () {
//     console.log('获取数据错误！')
// });

var filterChapter = function (data) {
    var $ = cheerio.load(data);
    var chapters = $('.chapter');
    var courseData = [];

    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            video: []
        };

        videos.each(function (item) {
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1];

            chapterData.video.push({
                title:videoTitle,
                id: id
            })
        });

        courseData.push(chapterData);
    });
    return courseData;
};

var printCourse = function (data) {
    data.forEach(function (item) {
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');

        item.video.forEach(function (video) {
            console.log('   【' + video.id + '】' + video.title + '\n');
        })
    })
};

var getPageAsync = function(url){
    return new Promise(function (resolve,reject) {
        console.log('正在爬取 ' +url);

        http.get(url,function (res) {
            var html = '';

            res.on('data',function (data) {
                html += data;
            });

            res.on('end',function () {
                // var parseData = filterChapter(html);
                //
                // printCourse(parseData);

                resolve(html);
            });
        }).on('error',function (e) {
            console.log('获取数据错误！');
            reject(e);
        });
    })
};

