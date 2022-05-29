import {
  capitalize,
  getUntilFirstDelimiter,
  isDomain,
  isURL,
} from './stringManipulation';

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

describe('isURL function', () => {
  test('empty', () => {
    expect(isURL('')).toBe(false);
  });

  test('raster/image.png', () => {
    expect(isURL('raster/image.png')).toBe(false);
  });

  test('raster/image with spaces.png', () => {
    expect(isURL('raster/image with spaces.png')).toBe(false);
  });

  test('www.google.com', () => {
    expect(isURL('www.google.com')).toBe(false);
  });

  test('http://google.com', () => {
    expect(isURL('http://google.com')).toBe(true);
  });

  test('https://google.com', () => {
    expect(isURL('https://google.com')).toBe(true);
  });

  test('https://google.com/', () => {
    expect(isURL('https://google.com/')).toBe(true);
  });
});

describe('isDomain function', () => {
  test('empty', () => {
    expect(isDomain('')).toBe(false);
  });

  test('raster/image.png', () => {
    expect(isDomain('raster/image.png')).toBe(false);
  });

  test('www.google.com', () => {
    expect(isDomain('www.google.com')).toBe(false);
  });

  test('https://google.com', () => {
    expect(isDomain('https://google.com')).toBe(false);
  });

  test('www.benasb.github.io', () => {
    expect(isDomain('www.benasb.github.io')).toBe(false);
  });

  test('http://benasb.github.io', () => {
    expect(isDomain('http://benasb.github.io')).toBe(true);
  });

  test('https://benasb.github.io', () => {
    expect(isDomain('https://benasb.github.io')).toBe(true);
  });

  test('https://benasb.github.io/some', () => {
    expect(isDomain('https://benasb.github.io/some')).toBe(true);
  });

  test('https://benasb.github.io/foo/bar.png', () => {
    expect(isDomain('https://benasb.github.io/foo/bar.png')).toBe(true);
  });
});
