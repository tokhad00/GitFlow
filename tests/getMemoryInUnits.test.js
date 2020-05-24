const f = require('../src/getMemoryInUnits.js');

test('getMemoryInUnits', () => {
    expect(() => f.getMemoryInUnits(10 ** 10 + 1)).toThrow();
});
test('getMemoryInUnits', () => {
    expect(() => f.getMemoryInUnits(-1)).toThrow();
});
test('getMemoryInUnits', () =>  {
    expect(() => f.getMemoryInUnits(0)).toThrow();
});
test('getMemoryInUnits', () => {
    expect(() => f.getMemoryInUnits('a')).toThrow();
});
test('getMemoryInUnits', () => {
    expect(f.getMemoryInUnits(65000000)).toBe('61МБ');
    expect(f.getMemoryInUnits(35453)).toBe('34кБ');
    expect(f.getMemoryInUnits(35453000)).toBe('33МБ');
    expect(f.getMemoryInUnits(3545300000)).toBe('3ГБ');
});