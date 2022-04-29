
module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/infrastructure/server/api/adapters/*.ts',
    '!<rootDir>/src/infrastructure/server/api/config/env.ts',
    '!<rootDir>/src/infrastructure/server/api/config/module-alias.ts'
    // '!<rootDir>/src/infrastructure/server/api/factories/infrastructure/database/mongodb/mongo-connection.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/test/(.+)': '<rootDir>/test/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  preset: '@shelf/jest-mongodb',
  testMatch: ['**/*.test.ts'],
  roots: [
    '<rootDir>/src',
    '<rootDir>/test'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true
}
