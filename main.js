const { app, BrowserWindow, ipcMain} = require('electron');

app.on('ready', () => {

    // require("devtron").install();
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // 是否集成 Nodejs,把之前预加载的js去了，发现也可以运行
        }
    });
    mainWindow.loadFile('index.html');
    ipcMain.on('message', (event,arg) => {
        console.log(arg);
        event.reply('reply', 'hello from main.js');
    })
})