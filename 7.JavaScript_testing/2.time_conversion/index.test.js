const TimeConvertToString = require("./TimeToString");

describe("TestCases for converting Time to String", () => {
  test("Only seconds as a results", () => {
    expect(TimeConvertToString(5200)).toBe("5 seconds");
  });

  test("Singular minutes as result", () => {
    expect(TimeConvertToString(60000)).toBe("1 minute");
  });

  test("minutes as result", () => {
    expect(TimeConvertToString(180000)).toBe("3 minutes");
  });

  test("minutes and Seconds as result", () => {
    expect(TimeConvertToString(200000)).toBe("3 minutes 20 seconds");
  });
});