import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { getIsLactoseTolerant } from "../../utilities/getIsLactoseTolerant";
import Complete from "./Complete";

describe("Conditional Rendering - Complete", () => {
  it("Should render successfully", () => {
    const { container } = render(<Complete />);
    expect(container).toBeTruthy();
  });

  it("If the user is lactose intolerant, render the LactoseIntolerant component", () => {
    const { container } = render(<Complete />);
    const message = container.querySelector("span");
    if (getIsLactoseTolerant()) {
      expect(message.textContent, "Milk and Cheese should be render").toBe(
        "🥛🧀"
      );
    } else {
      expect(
        message.textContent,
        "Broccoli and Strawberry should be render"
      ).toBe("🥦🍓");
    }
  });
});
