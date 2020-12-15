module.exports = {
    verbose: true,
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage/',
    collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.{ts,tsx}'],
    preset: 'ts-jest',
    testEnvironment: 'node'
};
