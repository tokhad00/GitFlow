const f = require('../src/getPriceInWords.js');

test('Check different numbers', () => {
    expect(f.getPriceInWords(15)).toBe('пятнадцать рублей');
    expect(f.getPriceInWords(27)).toBe('двадцать семь рублей');
    expect(f.getPriceInWords(96)).toBe('девяносто шесть рублей');
    expect(f.getPriceInWords(184)).toBe('сто восемьдесят четыре рубля');
    expect(f.getPriceInWords(317)).toBe('триста семнадцать рублей');
    expect(f.getPriceInWords(939)).toBe('девятьсот тридцать девять рублей');
    expect(f.getPriceInWords(1468)).toBe('одна тысяча четыреста шестьдесят восемь рублей');
    expect(f.getPriceInWords(2510)).toBe('две тысячи пятьсот десять рублей');
    expect(f.getPriceInWords(8386)).toBe('восемь тысяч триста восемьдесят шесть рублей');
});