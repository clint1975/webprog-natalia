import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { loginUser } from "../../services/UserService";

const inputClasses =
  "mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:shadow-sm";
const actionBtnCls = "w-full rounded-2xl py-3 text-[11px] tracking-[0.2em]";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await loginUser({ email: email.trim(), password });
      if (data.type === "viewer") {
        setError(
          "Viewer accounts may not sign in here. Please use an administrator or editor account.",
        );
        return;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("firstName", data.firstName);
      localStorage.setItem("type", data.type);
      localStorage.setItem("userId", data.userId);
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-slate-300 bg-slate-50 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10">
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-xl text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-100"
          title="Back to Home"
        >
          ←
        </Link>
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Welcome Back
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Sign in to access your Blue Harbor workspace and continue where you
          left off.
        </p>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        {error && (
          <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="signin-email"
            className="text-sm font-medium text-slate-700"
          >
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="name@domain.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label
            htmlFor="signin-password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Secure access code"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClasses}
            required
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className={actionBtnCls}
          disabled={loading}
        >
          {loading ? "Opening…" : "Enter"}
        </Button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-50 px-3 text-xs uppercase tracking-[0.2em] text-slate-500">
              demo credentials
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-700 space-y-1">
          <p>
            <span className="text-slate-900 font-semibold">Admin:</span>{" "}
            admin@natalia.dev / AdminNatalia123!
          </p>
          <p>
            <span className="text-slate-900 font-semibold">Editor:</span>{" "}
            calli.natalia@natalia.dev / Calli123!{" "}
            <span className="text-slate-500">(inactive)</span>
          </p>
          <p>
            <span className="text-slate-900 font-semibold">Viewer:</span>{" "}
            luger.natalia@natalia.dev / Luger123!
          </p>
        </div>
      </form>

      <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-600">
        New here?{" "}
        <Link
          to="/auth/signup"
          className="font-semibold text-sky-700 transition hover:text-sky-900"
        >
          Join the crew
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
