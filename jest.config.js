
module.exports = {
  collectCoverageFrom: [
    '<rootDir>/lib/**/*.ts',
    '!<rootDir>/lib/**/index.ts',
    '!<rootDir>/lib/infrastructure/server/api/adapters/*.ts',
    '!<rootDir>/lib/infrastructure/server/api/config/env.ts',
    '!<rootDir>/lib/infrastructure/server/api/config/module-alias.ts',
    '!<rootDir>/lib/infrastructure/server/api/factories/infrastructure/database/mongodb/mongo-connection.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/test/(.+)': '<rootDir>/test/$1',
    '@/(.+)': '<rootDir>/lib/$1'
  },
  preset: '@shelf/jest-mongodb',
  testMatch: ['**/*.test.ts'],
  roots: [
    '<rootDir>/lib',
    '<rootDir>/test'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true
}
