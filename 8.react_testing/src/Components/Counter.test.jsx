import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Counter from "./Counter";

describe("Conter Tests", () => {
  it("should chenge counter increment", () => {
    render(<App>ADD</App>);

    let h1 = screen.getByTestId("counter");
    expect(h1).toHaveTextContent("0");

    let buttonAdd = screen.getByText("ADD");
    fireEvent.click(buttonAdd);
    expect(h1).toHaveTextContent(+5);
  });

  it("should chenge counter decrement", () => {
    render(<App>REDUCE</App>);

    let h1 = screen.getByTestId("counter");
    expect(h1).toHaveTextContent("0");

    let buttonreduce = screen.getByText("REDUCE");
    fireEvent.click(buttonreduce);
    expect(h1).toHaveTextContent(-5);
  });

  it("sould call the given function for add btn", () => {
    const mockfn = jest.fn();

    render(<Counter onClickAdd={mockfn}></Counter>);

    const addbtn = screen.getByTestId("btn");
    fireEvent.click(addbtn);

    expect(mockfn).toBeCalled();
  });

  it("sould call the given function for reduce btn", () => {
    const mockfn = jest.fn();

    render(<Counter onClickReduce={mockfn}></Counter>);

    const reducebtn = screen.getByTestId("btn");
    fireEvent.click(reducebtn);

    expect(mockfn).toBeCalled();
  });
});