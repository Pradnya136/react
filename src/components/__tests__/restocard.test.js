import { render,screen } from "@testing-library/react";
import RestoCard from "../RestoCard";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/UserContext";
import { Provider } from "react-redux";

    test("should check if RestoCard us component loads in Dom",()=>{
        render(<Provider store={appStore}>
                <UserContext.Provider>
                <RestoCard/>
                </UserContext.Provider>
              </Provider>);
    
        const img = screen.getByRole("image")
        expect(img).toBeInTheDocument() //asseration
    });