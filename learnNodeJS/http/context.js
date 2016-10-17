//自身对象调用
// var pet = {
//     word: '...',
//     speak: function () {
//         console.log(this.word);
//         console.log(this===pet);
//     }
// };
// pet.speak();

//全局对象调用
// function pet(words) {
//     this.words = words;
//     console.log(this.words);
//     console.log(this === global);
// }
//
// pet('...');

//对象实例调用
// function Pet(words) {
//     this.words = words;
//     this.speak = function () {
//         console.log(this.words);
//         console.log(this);
//     }
// }
//
// var cat = new Pet('妹妹');
// cat.speak();


/*
* 在javascript中this通常指向当前函数的拥有者，这个拥有者通常被叫做执行上下文
* this是javascript语言的一个关键字，代表函数运行时生成的一个内部对象，只能在函数内部使用
* 在全局运行的上下文中this指向全局对象window/global
* 通过call或apply可以改变上下文执行对象
*/

//通过call方法改变上下文执行对象
// var pet = {
//     words: '...',
//     speak: function (say) {
//         console.log(say + ' ' + this.words);
//     }
// };
//
// var dog = {
//   words: '汪汪汪！'
// };

//pet.speak.call(dog,'Speak');


//通过apply方法实现继承

function Pet(words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words);
        console.log(this);
    }
}

function Dog(words) {
    // Pet.call(this,words);
    Pet.apply(this,arguments);
}

var dog =new Dog('汪汪汪！！！');
dog.speak();