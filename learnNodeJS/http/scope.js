var globalVariable = '这是一个全局变量';

function globalFunction() {
    var localVariable = '这是一个局部变量';

    console.log('=====开始访问变量======');
    console.log(globalVariable);
    console.log(localVariable);

    function localFunction() {
        var innerLocalVariable = '这是一个内部函数的局部变量';

        console.log(innerLocalVariable);
    }

    localFunction();
}

globalFunction();