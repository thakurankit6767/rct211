import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Slider from "./Slider";

describe("Test Slider", () => {
  it(" change page by one", () => {
    render(<App>Next</App>);

    let h3 = screen.getByTestId("page");
    expect(h3).toHaveTextContent(0);
  });

  it(" Next button ", () => {
    render(<App>Next</App>);
    let btn = screen.getByText("Next");
    expect(btn).toBeInTheDocument();
  });

  it(" Previous btn ", () => {
    render(<App>Prev</App>);
    let btn = screen.getByText("Prev");
  });

  it("empty button", () => {
    render(<Slider></Slider>);
    let btn = screen.getByTestId("btn");
    expect(btn).toBeEmptyDOMElement();
  });

  it(" Next function", () => {
    const funct = jest.fn();

    render(<Slider handleOnClickInc={funct}></Slider>);

    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);

    expect(funct).toBeCalled();
  });

  it("Prev function", () => {
    const funct = jest.fn();

    render(<Slider handleOnClickDecr={funct}></Slider>);

    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);

    expect(funct).toBeCalled();
  });
});
