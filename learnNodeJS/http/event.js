function clickIt(e) {
    window.alert('button is click')
}

var button = document.getElementById('#button');

button.addEventListener('click',clickIt);