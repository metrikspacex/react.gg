import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { getTodaysDate } from "../../utilities/getTodaysDate.js";
import Complete from "./Complete";

describe("Dynamic Date - Complete", () => {
  it("Should render successfully", () => {
    const { container } = render(<Complete />);
    expect(container).toBeTruthy();
  });

  it("Use the getToday's date function to render today's date", () => {
    const { container } = render(<Complete />);
    const paragraph = container.querySelector("p");
    expect(paragraph).toHaveTextContent(`Today is ${getTodaysDate()}`);
  });
});
