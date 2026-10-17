import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
} from "flowbite-react";
// import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar className="bg-color-primary" fluid rounded>
      <NavbarBrand to="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-raleway">
          Softland
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink to="#" active className="font-poppins">
          Home
        </NavbarLink>
        <NavbarLink to="#" className="font-poppins">About</NavbarLink>
        <NavbarLink to="#" className="font-poppins">Features</NavbarLink>
        <NavbarLink to="#" className="font-poppins">Pricing</NavbarLink>

        <div className="flex items-center justify-center">
          <Dropdown label="Dropdown" className="font-poppins" inline>
            <Dropdown.Item>Dropdown 1</Dropdown.Item>
            {/* <div className="flex items-center justify-center">
              <Dropdown label="Deep Dropdown" inline>
                <Dropdown.Item>Deep Dropdown 1</Dropdown.Item>
                <Dropdown.Item>Deep Dropdown 2</Dropdown.Item>
                <Dropdown.Item>Deep Dropdown 3</Dropdown.Item>
                <Dropdown.Item>Deep Dropdown 4</Dropdown.Item>
                <Dropdown.Item>Deep Dropdown 5</Dropdown.Item>
              </Dropdown>
            </div> */}
            <Dropdown.Item>Dropdown 2</Dropdown.Item>
            <Dropdown.Item>Dropdown 3</Dropdown.Item>
            <Dropdown.Item>Dropdown 4</Dropdown.Item>
          </Dropdown>
        </div>

        <NavbarLink to="#" className="font-poppins">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
