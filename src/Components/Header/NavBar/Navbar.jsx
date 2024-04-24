import logo from "../../../assets/logo.png";
import Categories from "./Categories";
import Date from "./Date";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="border-b border-black py-6 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <Date />

        <a href="/">
          <img
            className="max-w-[100px] md:max-w-[165px]"
            src={logo}
            alt="Lws"
          />
        </a>

        {/* <!--search --> */}
        <Search />
      </div>

      {/* <!-- categories --> */}
      <Categories />
    </nav>
  );
};

export default Navbar;
