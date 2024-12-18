import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react";

function DropDownMenu() {
  return (
    <div className="fixed top-4 right-4">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex justify-center w-full rounded-full border-2 border-orange-400 shadow-sm px-4 py-2 bg-transparent text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-orange-500"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </MenuButton>
        </div>
        <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            <MenuItem as={Fragment}>
              <a
                href="/"
                className="hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              >
                Home
              </a>
            </MenuItem>
            <MenuItem as={Fragment}>
              <a
                href="/about"
                className="hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              >
                About
              </a>
            </MenuItem>
            <MenuItem as={Fragment}>
              <a
                href="/cafeMenu"
                className="hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              >
                Cafe Menu
              </a>
            </MenuItem>
            <MenuItem as={Fragment}>
              <a
                href="/courseMenu"
                className="hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              >
                Course menu
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default DropDownMenu;
