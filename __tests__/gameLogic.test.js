const { getOutcome } = require('../gameLogic');

describe('getOutcome', () => {
  test('returns PERFECT! for green zone', () => {
    expect(getOutcome(145)).toBe('PERFECT!');
  });

  test('returns Good! for yellow zones', () => {
    expect(getOutcome(120)).toBe('Good!');
    expect(getOutcome(170)).toBe('Good!');
  });

  test('returns Miss! outside zones', () => {
    expect(getOutcome(95)).toBe('Miss!');
    expect(getOutcome(200)).toBe('Miss!');
  });
});
