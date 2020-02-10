const remote      = require('electron').remote


let a = document.getElementById('closer');
a.addEventListener('click', function(){
    let b = remote.getCurrentWindow();
    b.close();
})