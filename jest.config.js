module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    "^.+\\.(js|jsx|tsx|ts)$": "<rootDir>/node_modules/babel-jest"
  }
};