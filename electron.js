const electron = require('electron');

const app = electron.app;
let main;

const tasks = require('./angular/task/tasks');

app.on("ready", (e) => {
    main = new electron.BrowserWindow({
        width: 2000,
        height: 1500
    });

    main.loadURL(`file://${__dirname}/main.html`);
    //main.setFullScreen(true);
    main.webContents.openDevTools();

    main.on("close", (e) => {
        console.log("closed");
        main = null;
    });
});