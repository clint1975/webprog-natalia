import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t border-slate-200 bg-slate-100 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-bold text-slate-900">
            Clinton Clarke Natalia
          </p>

          <p className="mt-0.5 text-xs text-slate-500">
            Virtual Assistant and Aspiring IT Graduate
          </p>

          <p className="text-xs text-slate-500">
            © 2026{" "}
            <span className="font-semibold text-slate-900">
              Natalia Creative Lab
            </span>
          </p>
        </div>

        <p className="flex gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
          <Link
            to="/"
            className="transition text-slate-600 hover:text-indigo-600 hover:underline"
          >
            Home
          </Link>

          <span>|</span>

          <Link
            to="/cart"
            className="transition hover:text-white hover:underline"
          >
            Email
          </Link>

          <span>|</span>

          <Link
            to="/pickup"
            className="transition hover:text-white hover:underline"
          >
            Github
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
