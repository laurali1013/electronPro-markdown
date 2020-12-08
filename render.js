const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("node-version").innerHTML = process.versions.node;
    document.getElementById('send').addEventListener('click', () => {
        ipcRenderer.send('message', 'hello from render.js');
    });

    ipcRenderer.on("reply", (event, arg) => {
      document.getElementById("message").innerHTML = arg;
    });
})