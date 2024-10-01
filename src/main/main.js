// src/main/main.js
const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('src/renderer/index.html');
}

app.on('ready', createWindow);

// Seleção do arquivo JAR
ipcMain.handle('select-jar-file', async () => {
    const { filePaths } = await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{ name: 'JAR Files', extensions: ['jar'] }]
    });
    return filePaths[0];  // Retorna o caminho do arquivo selecionado
});

// Seleção da pasta CRX
ipcMain.handle('select-crx-folder', async () => {
    const { filePaths } = await dialog.showOpenDialog({
        properties: ['openDirectory']
    });
    return filePaths[0];  // Retorna o caminho da pasta selecionada
});
