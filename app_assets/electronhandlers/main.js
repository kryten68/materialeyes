const electron = require('electron');
const path = require("path");
const BrowserWindow = electron.remote.BrowserWindow;


const addContainerButton = document.getElementById('add-a-container');

//console.dir(addContainerButton);

addContainerButton.addEventListener('click', function(event){

    const modalPath = path.join('file://', __dirname, 'modals/text-module/text-module.html')

    let win = new BrowserWindow({
        width: 400,
        height: 200,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.on('close', function(){ win = null })
    win.loadURL(modalPath);
    win.show()
})