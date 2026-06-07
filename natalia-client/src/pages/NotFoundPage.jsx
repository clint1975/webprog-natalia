import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-lg rounded-[2rem] border border-slate-300 bg-white/95 p-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>

        <h2 className="mt-3 text-2xl font-semibold text-slate-700">
          Page Not Found
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          The page you are looking for may have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
