import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { getIsLactoseTolerant } from "../../utilities/getIsLactoseTolerant";
import Complete from "./Complete";

describe("Ternary Rendering - Complete", () => {
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

  it("Use a ternary operator", () => {
    // Maybe to loose of a constrain
    expect(Complete.toString(), "Should use ternary operator").contains(
      "return __vite_ssr_import_2__.getIsLactoseTolerant() ? /* @__PURE__ */"
    );
  });
});
