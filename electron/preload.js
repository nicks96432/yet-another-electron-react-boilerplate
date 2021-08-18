const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    ipc: {
        testIpc: () => ipcRenderer.send("test-channel", "test"),

        on: (channel, callback) => {
            ipcRenderer.on(channel, (_event, data) => callback(data));
        }
    }
});
