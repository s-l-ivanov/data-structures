/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
