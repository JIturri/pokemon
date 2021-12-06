import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Title } from "./title";

test("Renders title with text", () => {
  render(<Title />);

  screen.getByText("My Pokédex");
  //expect(component.container).toHaveTextContent("My Pokédex");
});

test("Renders title with img tag, src attribute and alt text.", () => {
  render(<Title />);

  //component.getByRole("img");
  //expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src");
  expect(screen.getByAltText("pokeball")).toBeInTheDocument();
});

test("Renders title with styles", () => {
  render(<Title />);

  const divComponent = document.querySelector("div").innerHTML;

  console.log(divComponent);

  expect(divComponent).toContain("page__title");
});
