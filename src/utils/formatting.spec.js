import { spaceThousands } from './formatting';

test('spaceThousands', () => {
  expect(spaceThousands(0)).toBe('0');
  expect(spaceThousands('0')).toBe('0');
  expect(spaceThousands('193')).toBe('193');
  expect(spaceThousands('1000')).toBe('1 000');
  expect(spaceThousands('1000929')).toBe('1 000 929');
});
