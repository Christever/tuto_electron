const { app, BrowserWindow } = require('electron');
const isDevelopment = process.env.NODE_ENV === 'development';

function createWindow() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
  });
  window.webContents.on('did-finish-load', () => {
    window.show();
    window.focus();
  });
  if (isDevelopment) {
    console.log('dev');
    window.loadURL('http://localhost:40992');
  } else {
    console.log('prod');
    window.loadFile('app/dist/index.html');
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform === 'darwin') {
    app.quit();
  }
});
