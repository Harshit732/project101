import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Styles/navbar.css";
import Sidebar from "./Sidebar";
import Box from "./Box";

function Navbar() {
  const [open, setOpen] = useState(true);
  const [clicked, setClicked] = useState("hiddenslidemenu");
  const [hamburgermenu, setHamburgermenu] = useState("visible");
  const [crossbutton, setCrossbutton] = useState("hidden");

  const [activeBox, setActiveBox] = useState(null); // Holds the currently active box number

  function updateburger() {
    setOpen(!open);
    if (open) {
      setClicked("visibleslidemenu");
      setHamburgermenu("hidden");
      setCrossbutton("visible");
    } else {
      setClicked("hiddenslidemenu");
      setCrossbutton("hidden");
      setHamburgermenu("visible");
    }
  }

  function updateBox(boxNumber) {
    if (activeBox === boxNumber) {
      setActiveBox(null); // Close the box if it's already open
    } else {
      setActiveBox(boxNumber); 
      // Open the clicked box
    }
  }

  return (
    <>
      <div className="navbody w-full">
        <div className="w-full bg-orange-500 h-16">
          <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <span
              className={`backcolor ${hamburgermenu}`}
              onClick={updateburger}
            >
              <GiHamburgerMenu />
            </span>
            <span className={`backcolor ${crossbutton}`} onClick={updateburger}>
              <IoMdClose />
            </span>

            <span className="logo font-bold mx-9">LOGO</span>
            <span className="horizontalmenu w-full grow">
              <ul className="flex justify-end">
                <li className="hmbutton" onClick={() => updateBox(1)}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    Cusine
                  </a>
                </li>
                <li className="hmbutton" onClick={() => updateBox(2)}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li className="hmbutton" onClick={() => updateBox(3)}>
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>

        <div className={`z-40 absolute ${clicked}`}>
          <Sidebar />
        </div>

        <div className="absolute right-24 z-10">
          {/* Conditionally render only the active box */}
          {activeBox === 1 && <Box flag={true} boxno={1} />}
          {activeBox === 2 && <Box flag={true} boxno={2} />}
          {activeBox === 3 && <Box flag={true} boxno={3} />}
        </div>

        
      </div>
    </>
  );
}

export default Navbar;
