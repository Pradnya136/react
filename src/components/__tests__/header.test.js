import { render,screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
test("testing header component in dom",()=>{
    render(<Header/>)

    const Cart = screen.getByText("Cart")
    expect(Cart).ToBeInTheDocument()
})