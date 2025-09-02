/** @type {import("jest").Config} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    }
};