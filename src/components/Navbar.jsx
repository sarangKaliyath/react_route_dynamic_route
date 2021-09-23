import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", title: "Home" },
  { to: "/products", title: "Products" },
];

export const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", border: "1px solid black"}}>
      {links.map(({ to, title }) => {
        return (
          <Link key={title} to={to}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};
