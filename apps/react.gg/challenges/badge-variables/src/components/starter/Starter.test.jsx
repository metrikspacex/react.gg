import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Starter from "./Starter";

describe("Badge Variables - Starter", () => {
  it("Should render successfully", () => {
    const { container } = render(<Starter />);
    expect(container).toBeTruthy();
  });

  it("Give the image a proper alt tag using the author's name", () => {
    const { container } = render(<Starter />);
    const img = container.querySelector("img");
    expect(img, "Expected: Tyler McGinnis").toHaveAttribute(
      "alt",
      "Tyler McGinnis"
    );
  });

  it("Make sure the badge displays the profile image correctly", () => {
    const { container } = render(<Starter />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute(
      "src",
      "https://avatars0.githubusercontent.com/u/2933430"
    );
  });

  it("Display the author's name in the badge's heading", () => {
    const { container } = render(<Starter />);
    const header = container.querySelector("h4");
    expect(header).toHaveTextContent("Tyler McGinnis");
  });

  it("Display the author's handle below the heading", () => {
    const { container } = render(<Starter />);
    const paragraph = container.querySelector("p");
    expect(paragraph).toHaveTextContent("@tylermcginnis");
  });
});
