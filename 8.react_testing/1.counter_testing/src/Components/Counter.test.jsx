import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Counter from "./Counter";

describe("React-Counter-Assignment-Test Tests", () => {
  it("change counter increment", () => {
    render(<App>ADD</App>);

    let h1 = screen.getByTestId("counter");
    expect(h1).toHaveTextContent("0");

    let addNumber = screen.getByText("ADD");
    fireEvent.click(addNumber);
    expect(h1).toHaveTextContent(+5);
  });

  it("change counter decrement", () => {
    render(<App>REDUCE</App>);

    let h1 = screen.getByTestId("counter");
    expect(h1).toHaveTextContent("0");

    let reduceNumber = screen.getByText("REDUCE");
    fireEvent.click(reduceNumber);
    expect(h1).toHaveTextContent(-5);
  });

  it("call the given function for add btn", () => {
    const hb = jest.fn();

    render(<Counter onClickAdd={hb}></Counter>);

    const addbtn = screen.getByTestId("btn");
    fireEvent.click(addbtn);

    expect(hb).toBeCalled();
  });

  it("call the given function for reduce button", () => {
    const hb = jest.fn();

    render(<Counter onClickReduce={hb}></Counter>);

    const reducebtn = screen.getByTestId("btn");
    fireEvent.click(reducebtn);

    expect(hb).toBeCalled();
  });
});