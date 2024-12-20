import Link from "next/link";
import SearchBar from "./searchBar";

const NavBar = () => {
  return (
    <div className="relative bg-neutral-900 w-full">
      <div className="flex flex-row">
        <Link href="/" className="p-4">
          HOME
        </Link>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2">
        <SearchBar />
      </div>
    </div>
  );
};
export default NavBar;
