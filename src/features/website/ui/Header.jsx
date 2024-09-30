// UIs
import Logo from "../../../ui/Logo";
import Nav from "./Nav";

const Header = ({ relativeStyles }) => {
  return (
    <header
      className={`${relativeStyles} sticky left-0 top-0 z-50 bg-pry-500 px-5 py-6 lg:px-10`}
    >
      <div className="inner flex items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
