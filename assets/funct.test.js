const rege = require("./funct");
test("Returns test", () => {
    expect(rege('"test"')).toBe('test"');
});