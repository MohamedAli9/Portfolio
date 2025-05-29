import { Sun, Moon, Menu, X } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex justify-center py-6 shadow-md">
      <div className="w-full max-w-6xl flex justify-between p-6">
        <button className="font-bubblegum text-3xl text-amber-900/60 text-4xl">
          Mohamed Ali
        </button>
        <button className="px-3 py-0 rounded-full hover:bg-amber-100 mx-6">
          <Sun className="w-8 h-8 text-amber-900/60" />
        </button>

        <div className="flex text-xl text-amber-900/60 items-center pt-3">
          <button className="mx-4 hover:text-amber-600 font-bold relative pb-2 after:block after:h-0.5 after:w-full after:bg-amber-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:mt-2">
            About
          </button>

          <button className="mx-4 hover:text-amber-600 font-bold relative pb-2 after:block after:h-0.5 after:w-full after:bg-amber-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:mt-2">
            Projects
          </button>
          <button className="mx-4 hover:text-amber-600 font-bold relative pb-2 after:block after:h-0.5 after:w-full after:bg-amber-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:mt-2">
            Skills
          </button>
          <button className="mx-4 hover:text-amber-600 font-bold relative pb-2 after:block after:h-0.5 after:w-full after:bg-amber-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:mt-2">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
