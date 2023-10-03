import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Complete from "./Complete";

describe("Rendering Lists No Keys - Complete", () => {
  it("Should render successfully", () => {
    const { container } = render(<Complete />);
    expect(container).toBeTruthy();
  });

  it("Render an unordered list with all of the friends", () => {
    const { container } = render(<Complete />);
    const listElements = container.querySelectorAll("li");
    expect([...listElements].length).toBe(3);
  });

  it("Each list item should display the correct name", () => {
    const { container } = render(<Complete />);
    const listElements = container.querySelectorAll("li");
    const names = [...listElements].map((item) => item.textContent);
    expect([...names]).toStrictEqual(["Ben", "Lynn", "Alex"]);
  });

  it("Each list item should be given a unique key", () => {
    const keys = Complete().props?.children?.map((child) => child.key);
    const uniqueKeys = [...new Set(keys)].filter(Boolean);
    expect(uniqueKeys.length).toBe(3);
  });
});
