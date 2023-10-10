import { NavLink, Link } from "@remix-run/react";

export default function Nav() {
  return (
    <div>
      <nav className="container px-10 md:px-20 flex items-center justify-between py-2 text-white mx-auto">
        <h1 className="text-xl md:text-2xl font-bold">WonderLand</h1>
        <div className="flex justify-between gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
        </div>
        <Link to="/login" className="btn">
          Login
        </Link>
      </nav>
    </div>
  );
}
