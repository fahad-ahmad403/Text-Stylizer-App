import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCircleInfo,
  faHome,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ isOpen, setIsOpen }) {
    
  function currentYear() {
    return new Date().getFullYear();
  }

  return (
    <div
      className={`w-64 bg-backgroundColor text-textColor h-full z-20 fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center p-4 border-b border-textColor">
          <h3 className="font-semibold">Text Stylizer</h3>
          <button className="h-6 w-6 text-white cursor-pointer">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setIsOpen(false)}
              className="text-2xl text-textColor font-semibold absolute top-4 right-4"
            />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-start">
          <ul className="pt-10 pl-5 space-y-5">
            <li className="font-medium" >
              <Link onClick={() => setIsOpen(false)} to="/">
                <FontAwesomeIcon icon={faHome} className="pr-3" /> Home
              </Link>
            </li>
            <li className="font-medium" >
              <Link onClick={() => setIsOpen(false)} to="/about">
                <FontAwesomeIcon icon={faCircleInfo} className="pr-3" /> About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center p-4 border-t border-textColor">
          <p className="text-sm text-textColor">© {currentYear()} Text Stylizer</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
