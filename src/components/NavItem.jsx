import React from "react";

const NavItem = (props) => {
  return (
    <div
      className={`flex items-center gap-4 p-4 text-white hover:bg-gray-700 ${
        props.isOpen ? "justify-start" : "justify-center"
      }`}
    >
      <props.Icon className="w-6 h-6" />

      {props.isOpen && <span className="text-lg">{props.label}</span>}
    </div>
  );
};

export default NavItem;
