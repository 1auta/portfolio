import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ButtonLight } from "../button/Button";

export function Header() {
  return (
    <header className="p-4 bg-slate-500 text-white">
      <div>
        <div className="flex justify-around max-w-full">
          <h1 className="text-2xl">1auta</h1>
          <nav className="flex gap-10 text-lg">
            <NavLink
              className="py-1 px-4 rounded-lg"
              activeClassName="active"
              exact
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className="py-1 px-4 rounded-lg"
              activeClassName="active"
              to={"/AboutMe"}
            >
              About me
            </NavLink>
            <NavLink
              className="py-1 px-4 rounded-lg"
              activeClassName="active"
              to={"/Contacts"}
            >
              Contacts
            </NavLink>
            <NavLink
              className="py-1 px-4 rounded-lg"
              activeClassName="active"
              to={"/Other"}
            >
              Other
            </NavLink>
          </nav>
          <ButtonLight />
        </div>
      </div>
    </header>
  );
}
