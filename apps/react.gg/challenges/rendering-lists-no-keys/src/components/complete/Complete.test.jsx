import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Complete from "./Complete";

describe("Rendering Lists No Key - Complete", () => {
  it("Should render successfully", () => {
    const { container } = render(<Complete />);
    expect(container).toBeTruthy();
  });
});
