import { classNames } from "./index";

describe("classNames", () => {
  test("with first param", () => {
    expect(classNames("some")).toBe("some");
  });

  test("with additional classes", () => {
    const expected = "some first second";

    expect(classNames("some", {}, ["first", "second"])).toBe(expected);
  });

  test("with additional classes and mods", () => {
    const expected = "some first second hovered outline";
    const mods = { hovered: true, outline: true };

    expect(classNames("some", mods, ["first", "second"])).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "some hovered";
    const mods = { hovered: true, outline: false };

    expect(classNames("some", mods)).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "some hovered";
    const mods: any = { hovered: true, outline: undefined };

    expect(classNames("some", mods)).toBe(expected);
  });
});
