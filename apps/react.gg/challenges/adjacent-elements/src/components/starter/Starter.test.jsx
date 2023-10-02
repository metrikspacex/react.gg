import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Starter from "./Starter";

describe("Adjacent Elements - Starter", () => {
  it("Should render successfully", () => {
    const { container } = render(<Starter />);
    expect(container).toBeTruthy();
  });

  it("Fix the error so the component renders correctly", () => {
    const { container } = render(<Starter />);
    expect(container.innerHTML).toEqual(
      "<header>Header</header><main>Main</main><aside>Aside</aside><footer>Footer</footer>"
    );
  });
});
