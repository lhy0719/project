var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

// life.setMaxListeners(3);

life.on('求安慰',function (who) {
    console.log('给' + who + '端茶');
});
life.on('求安慰',function (who) {
    console.log('给' + who + '倒水');
});
life.on('求安慰',function (who) {
    console.log('给' + who + '捏肩');
});
life.on('求安慰',function (who) {
    console.log('给' + who + '捶背');
});
// life.removeAllListeners();
try {
    life.emit('求安慰', '徐海涛');
    console.log(life.listenerCount('求安慰'));
}catch (e){
    console.log(e);
}