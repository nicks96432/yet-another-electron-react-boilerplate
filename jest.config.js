module.exports = {
    moduleNameMapper: {
        "\\.(c|le|s[ac])ss$": "identity-obj-proxy",
        "\\.(jpe?g|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/scripts/mock-asset"
    },
    preset: "ts-jest",
    setupFilesAfterEnv: ["./src/setupTests.ts"],
    testEnvironment: "jsdom",
    verbose: true
};
