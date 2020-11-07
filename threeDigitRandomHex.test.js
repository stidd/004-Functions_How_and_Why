const threeDigitRandomHex = require("./threeDigitRandomHex");

test('test1', () => {
    const l = threeDigitRandomHex().length;
    expect(l).toBe(3);
    expect(threeDigitRandomHex()).not.toBe(threeDigitRandomHex());
});