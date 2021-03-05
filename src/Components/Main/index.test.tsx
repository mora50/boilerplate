import Main from ".";
import { screen, render } from "@testing-library/react";

describe("main", () => {
  it("render without bug", () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole("heading", { name: /react avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
