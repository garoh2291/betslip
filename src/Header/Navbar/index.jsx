import React from "react";
import { NAVBAR_PAGES } from "../../data";
import { NavItem } from "../NavItem";
import "./styles.css";

const { builder, statistic } = NAVBAR_PAGES;

export const Navbar = () => {
  return (
    <nav className="navigation_bar_layout">
      <ul className="navigation_list">
        <NavItem label={builder.label} link={builder.link} />
        <NavItem label={statistic.label} link={statistic.link} />
      </ul>
    </nav>
  );
};
