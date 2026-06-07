import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 px-4 py-10 text-slate-900">
      <main className="w-full max-w-md">
        <Outlet />
      </main>
    </section>
  );
};

export default AuthLayout;
