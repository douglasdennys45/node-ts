
module.exports = {
  collectCoverageFrom: [
    '<rootDir>/lib/**/*.ts',
    '!<rootDir>/lib/**/index.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/test/(.+)': '<rootDir>/test/$1',
    '@/(.+)': '<rootDir>/lib/$1'
  },
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
