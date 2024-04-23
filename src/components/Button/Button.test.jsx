// @vitest-environment jsdom

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

// inicio con "describe" para crear varios testing, como parametros el nombre del grupo de test y la funcion que contiene a los test
describe("for button components", () => {
  // genero un test y como parametro paso el nombre del test y la funcion a ejecutar
  test("renders Button component with default props", () => {
    render(<Button>test</Button>); // se renderiza el button en el dom virtual
    const elementTest = screen.getByRole("button", { name: /test/i });
    expect(elementTest).toBeInTheDocument(); // metodo para buscar el button en el dom
    expect(elementTest).toHaveClass(/button/i);
    expect(elementTest).toHaveClass(/primary/i);
    expect(elementTest).toHaveClass(/md/i);
  });

  test("renders Button component with default props", () => {
    render(
      <Button variant="secondary" size="sm">
        test
      </Button>
    ); // se renderiza el button en el dom virtual
    const elementTest = screen.getByRole("button", { name: /test/i });
    expect(elementTest).toBeInTheDocument(); // metodo para buscar el button en el dom
    expect(elementTest).toHaveClass(/button/i);
    expect(elementTest).toHaveClass(/secondary/i);
    expect(elementTest).toHaveClass(/sm/i);
  });

  test("renders Button component with default props", () => {
    render(
      <Button variant="outline" size="lg">
        test
      </Button>
    ); // se renderiza el button en el dom virtual
    const elementTest = screen.getByRole("button", { name: /test/i });
    expect(elementTest).toBeInTheDocument(); // metodo para buscar el button en el dom
    expect(elementTest).toHaveClass(/button/i);
    expect(elementTest).toHaveClass(/outline/i);
    expect(elementTest).toHaveClass(/lg/i);
  });
});

// test('renders Button component with default props', async () => {
//   render(<Button>);
//     const user = userEvent.setup();

// 