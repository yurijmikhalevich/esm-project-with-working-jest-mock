import { jest } from '@jest/globals';

// import should start from the project root because of how we mocked `jestModule` in `jest.setup.js`
jest.mockModule('./module-a');

const { default: index } = await import('../index');

describe('index', () => {
  test('should be mocked', () => {
    const str = index.doThing();
    expect(str).toBe('I am a mock!');
  });
});
