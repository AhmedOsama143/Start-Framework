import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar position-fixed top-0 start-0 w-100 d-flex justify-content-between p-3  ">
      <Link to="/" className="text-decoration-none">
        <h1 className="my-0 ms-5 fw-bold text-white fs-3">Start Framework</h1>
      </Link>
      <ul className="d-flex list-unstyled m-0 me-5">
        <li className="mx-3">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none active "
                : "text-decoration-none text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none active"
                : "text-decoration-none text-white"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-decoration-none active"
                : "text-decoration-none text-white"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
