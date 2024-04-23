// @vitest-environment jsdom

import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";



describe("renders App component", () => {
    test("renders correct", () =>{
        render(<App />);

        const titleEvaluation =  screen.getByRole('heading', {name: /react evaluation/i}) 
        expect(titleEvaluation).toHaveTextContent("React Evaluation")
});

    test("changes page color game", async () => {
        const user = userEvent.setup();
        render(<App />)

        const changePage = screen.getAllByRole('button', { name: /color game/i })
        expect(changePage[0]).toBeInTheDocument()
        expect(changePage[1]).toBeInTheDocument()

        await user.click(changePage[0])
        const click = screen.getByRole('heading', {name: /Color Game/i}) 
        expect(click).toBeInTheDocument()
          
     })

     test("changes page doable", async () => {
        const user = userEvent.setup();
        render(<App />)

        const changePage = screen.getAllByRole('button', { name: /doable/i })
        expect(changePage[0]).toBeInTheDocument()
        expect(changePage[1]).toBeInTheDocument()

        await user.click(changePage[0])
        const click = screen.getByRole('heading', {name: /doable/i}) 
        expect(click).toBeInTheDocument()
          
     })
   
  
})
  
  