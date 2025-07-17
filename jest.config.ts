import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  preset: 'jest-preset-angular',
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "!src/**/*.ts",
    "src/app/app.ts"

  ],
  moduleFileExtensions: [
    "ts"

  ],
  setupFilesAfterEnv: [ '<rootDir>/setup-jest.ts' ],

  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/app/components/$1",

  },

  testEnvironment: "jsdom",
  verbose: true,

};

export default config;
