import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases",()=>{
    test("should check if contact us component loads in Dom",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument() //asseration
    });
    it("should have button inside contact component",()=>{
        render(<Contact/>)
    
        const button = screen.getByText("submit")
        expect(button).toBeInTheDocument()
    });
    it("should show all inputs from contact component",()=>{
        render(<Contact/>)
    
        const inputItems = screen.getByPlaceholderText("name")
        expect(inputItems).toBeInTheDocument()
    });
    it("should check length of input box in contact us component",()=>{
        render(<Contact/>)

        const Inputs = screen.getAllByRole("textbox")

        expect(Inputs.length).toBe(2)
    })
}
    
)
