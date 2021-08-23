import slugifier from './slugifier';

test('empty', () => {
  expect(slugifier('')).toBe('');
});

test('"hello world"', () => {
  expect(slugifier('hello world')).toBe('hello-world');
});

test('"Hello world"', () => {
  expect(slugifier('Hello world')).toBe('hello-world');
});

test('"_ello world"', () => {
  expect(slugifier('_ello world')).toBe('_ello-world');
});

test('"*+~,.()\'"!:@"', () => {
  expect(slugifier('*+~,.()\'"!:@')).toBe('');
});

test('Mixed array', () => {
  expect(slugifier(['Hello world', { random: 5 }, undefined, ' hey ho'])).toBe(
    'hello-world-hey-ho'
  );
});
