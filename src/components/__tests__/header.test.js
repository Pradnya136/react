import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";


test("testing header component in dom",()=>{
    render(<Provider store={appStore}>
                <BrowserRouter>
                   <Header/>
                </BrowserRouter>
          </Provider>)

    const Btn = screen.getByText("Login")
    expect(Btn).toBeInTheDocument()
})
it("should check for button inside header component",()=>{
    render(<Provider store={appStore}>
            <BrowserRouter>
             <Header/>
            </BrowserRouter>
         </Provider>)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();
})
it("should check if button fire clicks or not in header component",()=>{
    render(<Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
          </Provider>)

const loginbtn = screen.getByRole("button",{name:"Login"})
fireEvent.click(loginbtn) //now here btn would change from login to logout
const logoutbtn = screen.getByRole("button",{name:"Logout"})

expect(logoutbtn).toBeInTheDocument()
})