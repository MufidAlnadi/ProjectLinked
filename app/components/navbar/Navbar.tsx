
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";



const Navbar = () => {

  return (
    <header className="sticky top-0 bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center justify-between">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
