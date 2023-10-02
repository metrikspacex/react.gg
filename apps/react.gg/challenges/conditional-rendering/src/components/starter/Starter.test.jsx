import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Starter from "./Starter";

describe("Conditional Rendering - Starter", () => {
  it("Should render successfully", () => {
    const { container } = render(<Starter />);
    expect(container).toBeTruthy();
  });
});
