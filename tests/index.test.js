const index = require('../index');

jest.mock('../module-a');

describe('index', () => {
  test('should be mocked', () => {
    const str = index.doThing();
    expect(str).toBe('I am a mock!');
  });
});
