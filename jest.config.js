module.exports = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'jsdom',
    // setupFilesAfterEnv: ["<rootDir>/src/setup.ts"],
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    moduleNameMapper: {
      '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/identity-obj-proxy',
      '^@src/(.*)$': '<rootDir>/src/$1',
      '^@assets/(.*)$': '<rootDir>/src/assets/$1'
    }
  };