var stu = require('./student');
var tea = require('./teacher');



function add(teaName,stus) {
    tea.add(teaName);

    stus.forEach(function (item,index) {
        stu.add(item);
    });
}


exports.add = add;
// module.exports = add;