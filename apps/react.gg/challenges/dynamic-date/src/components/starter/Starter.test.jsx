import { render } from "@testing-library/react";

import { getTodaysDate } from "../../utilities/getTodaysDate";
import Starter from "./Starter";

describe("Dynamic Date - Starter", () => {
  it("Should render successfully", () => {
    const { container } = render(<Starter />);
    expect(container).toBeTruthy();
  });

  it("Use the getToday's date function to render today's date", () => {
    const { container } = render(<Starter />);
    const paragraph = container.querySelector("p");
    expect(paragraph).toHaveTextContent(`Today is ${getTodaysDate()}`);
  });
});
