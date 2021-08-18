import path from "path";
import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow;

const isDevelopment = process.env.NODE_ENV === "development";

const createWindow = () => {
    const assetPath = app.isPackaged
        ? path.join(process.resourcesPath, "assets")
        : path.join(__dirname, "../assets");

    mainWindow = new BrowserWindow({
        icon: path.join(assetPath, "icon.png"),
        width: 1100,
        height: 700
    });

    let htmlPath: string;
    if (isDevelopment) htmlPath = "http://localhost:3000";
    else htmlPath = `file://${path.join(__dirname, "../build/app/index.html")}`;

    mainWindow.loadURL(htmlPath);
};

app.whenReady().then(createWindow).catch(console.error);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (!BrowserWindow.getAllWindows().length) createWindow();
});
