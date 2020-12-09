const { ipcRenderer } = require('electron');
const { BrowserWindow } = require('electron').remote;

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("node-version").innerHTML = process.versions.node;
    document.getElementById('send').addEventListener('click', () => {
      ipcRenderer.send('message', 'hello from render.js');
      //使用remote模块实现进程间通讯
      let win = new BrowserWindow({
        width: 300,
        height: 300,
        //从v9版本以后，render不允许直接使用remote，需要在main主进程中将enableRemoteModule设置为true
      });
      win.loadURL('https://baidu.com');
    });

    ipcRenderer.on("reply", (event, arg) => {
      document.getElementById("message").innerHTML = arg;
    });
})