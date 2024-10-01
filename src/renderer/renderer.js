// src/renderer/renderer.js
const { ipcRenderer } = require('electron');

// Seleção do arquivo JAR
document.getElementById('selectJarBtn').addEventListener('click', async () => {
    const jarPath = await ipcRenderer.invoke('select-jar-file');
    document.getElementById('jarPath').innerText = `Caminho do arquivo JAR: ${jarPath || 'Nenhum arquivo selecionado'}`;
});

// Seleção da pasta CRX
document.getElementById('selectCrxBtn').addEventListener('click', async () => {
    const crxPath = await ipcRenderer.invoke('select-crx-folder');
    document.getElementById('crxPath').innerText = `Caminho da pasta CRX: ${crxPath || 'Nenhuma pasta selecionada'}`;
});
