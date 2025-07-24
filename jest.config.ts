import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  preset: 'jest-preset-angular',
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "src/**/*.ts",

  ],
  moduleFileExtensions: [
    "js",
    "ts"

  ],
  setupFilesAfterEnv: [ '<rootDir>/setup-jest.ts' ],

  moduleNameMapper: {
    "@core/(.*)": "<rootDir>/src/app/core/$1",
    "@features/(.*)": "<rootDir>/src/app/features/$1",

  },

  testEnvironment: "jsdom",
  verbose: true,

};

export default config;
