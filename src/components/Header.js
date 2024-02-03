import Logo from "./Logo";
import NavItems from "./NavItems";



const Header = () => {
    return (
        <div className="flex h-28 shadow-md justify-between">
                <Logo/>
                <NavItems/>
        </div>
    )
}


export default Header;