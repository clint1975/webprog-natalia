import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaNewspaper } from "react-icons/fa";

const links = [
  { label: <FaHome />, to: "/" },
  { label: <FaUser />, to: "/about" },
  { label: <FaNewspaper />, to: "/articles" },
  { label: "Access", to: "/auth/signin" },
  { label: "Join", to: "/auth/signup" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md",
    "transition-all duration-100 transform",
    isActive
      ? "text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(59,130,246,0.18)] scale-105"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:shadow-[0_0_10px_rgba(15,23,42,0.08)] hover:scale-105",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="space-y-0.5">
            <img
              src="src/assets/img/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
        </NavLink>

        <nav className="hidden items-center md:flex">
          {links.map((link, index) => (
            <div key={link.to} className="flex items-center">
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>

              {index < links.length - 1 && (
                <span className="mx-6 h-5 w-[1.5px] bg-slate-200"></span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
