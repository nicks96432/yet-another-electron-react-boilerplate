declare interface Window {
    electron: {
        ipc: {
            testIpc: () => void;
            on: (channel: string, callback: Function) => void;
        };
    };
}
