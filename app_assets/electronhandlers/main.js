const electron = require('electron');
const path = require("path");
const BrowserWindow = electron.remote.BrowserWindow;


const addContainerButton = document.getElementById('add-a-container');

//console.dir(addContainerButton);

addContainerButton.addEventListener('click', function(event){

    const modalPath = path.join('file://', __dirname, 'modals/text-module/text-module.html')

    let win = new BrowserWindow({
        width: 300,
        height: 800,
        resizable: true,
        parent: "main.html",
        modal: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.on('close', function(){ win = null })
    win.loadURL(modalPath);
    win.show()
})