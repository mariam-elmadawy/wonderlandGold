import { NavLink, Link } from "@remix-run/react";
export default function Footer() {
  return (
    <div className="container mx-auto flex justify-between items-center gap-4 py-8 px-20">
      <h1 className="max-w-lg text-gray-600">
        © 2023 Mariam F.Elma'dawy, Inc. All rights reserved.
      </h1>
      <ul className="flex gap-3 flex-col ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
      </ul>
      <ul className="flex gap-3 flex-col ">
        <Link to="">Offers</Link>
        <Link to="">Sponsers</Link>
        <Link to="">Support</Link>
      </ul>
    </div>
  );
}
