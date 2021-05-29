import { capitalize, getUntilFirstDelimiter } from './stringManipulation';

describe('capitalize function', () => {
  test('empty', () => {
    expect(capitalize('')).toBe('');
  });

  test('"hello world"', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('"Hello world"', () => {
    expect(capitalize('Hello world')).toBe('Hello world');
  });

  test('"_ello world"', () => {
    expect(capitalize('_ello world')).toBe('_ello world');
  });
});

describe('getUntilFirstDelimiter function', () => {
  test('space', () => {
    expect(getUntilFirstDelimiter('hello world', ' ')).toBe('hello');
  });

  test('slash', () => {
    expect(getUntilFirstDelimiter('hello/world', '/')).toBe('hello');
  });

  test('missing delimiter from string', () => {
    expect(getUntilFirstDelimiter('hello world', '/')).toBe('');
  });

  test('missing delimiter from string with fallback', () => {
    expect(getUntilFirstDelimiter('hello world', '/', 'foo')).toBe('foo');
  });

  test('empty delimiter', () => {
    expect(getUntilFirstDelimiter('hello world', '')).toBe('hello world');
  });
});
