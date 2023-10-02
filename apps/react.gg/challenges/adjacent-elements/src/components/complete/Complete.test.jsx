import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Complete from "./Complete";

describe("Adjacent Elements - Complete", () => {
  it("Should render successfully", () => {
    const { container } = render(<Complete />);
    expect(container).toBeTruthy();
  });

  it("Fix the error so the component renders correctly", () => {
    const { container } = render(<Complete />);
    expect(container.innerHTML).toEqual(
      "<header>Header</header><main>Main</main><aside>Aside</aside><footer>Footer</footer>"
    );
  });
});
