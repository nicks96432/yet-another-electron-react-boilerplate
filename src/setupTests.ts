import "@testing-library/jest-dom";

Object.defineProperty(window, "electron", {
    value: { ipc: { on: () => {}, testIpc: () => {} } }
});
