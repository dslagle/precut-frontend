const electron = require("electron");
const app = electron.app;

const Window = electron.BrowserWindow;

let main;

app.on("ready", (e) => {
    main = new Window({
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