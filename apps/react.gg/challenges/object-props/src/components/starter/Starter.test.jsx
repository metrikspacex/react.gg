import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Starter from "./Starter";

describe("Badge Variables - Starter", () => {
  it("Should render successfully", () => {
    const { container } = render(<Starter />);
    expect(container).toBeTruthy();
  });
});
