// import React from "react";
// import Brand from "../assets/Vector (1).png";
// import Loader from "../assets/loader.png";

// const Sidebar = () => {
//   return (
//     <aside className="absolute top-0 left-0 w-64 md:w-72 lg:w-80 min-h-screen bg-[#050F0D]">
//       <div className="h-full flex flex-col justify-between p-4">
//         {/* Sidebar Content */}
//         <div>
//           <div className="flex gap-[18px] ">
//             <img src={Brand} alt="logo" />
//             <h1 className="text-white text-2xl font-bold">Hyperlend</h1>
//           </div>
//           <div className="flex">
//             <img src={Loader} alt="loader" />
//             <div>
//               <h3 className="text-white">Global Elite</h3>
//               <span className="text-white">Rank: 12,988</span>
//             </div>
//           </div>
//           <ul className="mt-6 space-y-4">
//             <li className="text-gray-400 hover:text-white">Dashboard</li>
//             <li className="text-gray-400 hover:text-white">Analytics</li>
//             <li className="text-gray-400 hover:text-white">Settings</li>
//             <li className="text-gray-400 hover:text-white">Help</li>
//           </ul>
//         </div>

//         {/* Footer Content */}
//         <div className="text-gray-600 text-sm">
//           <p>© 2024 Your Company</p>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { FaChartBar, FaUserPlus } from "react-icons/fa";
import { RiLogoutCircleRLine, RiLoopLeftLine } from "react-icons/ri";
import { MdOutlineLock } from "react-icons/md";
import { PiBank, PiVaultBold } from "react-icons/pi";
import NavItem from "./NavItem";
import Brand from "../assets/Vector (1).png";
import Loader from "../assets/loader.png";
// import Badge from "../assets/light.png";

const Sidebar = () => {
  // eslint-disable-next-line
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        isOpen ? "w-[260px]" : "w-16"
      } bg-[#050F0D] min-h-screen transition-all duration-300 hidden md:block`}
    >
      <div className="flex flex-col items-center py-4">
        {/* <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "←" : "☰"}
        </button> */}
        {isOpen ? (
          <div className="flex gap-[18px]">
            <img src={Brand} alt="logo" />
            <h1 className="text-white text-2xl font-bold">Hyperlend</h1>
          </div>
        ) : (
          <div className="w-8 h-8 bg-gray-600 text-white"></div>
        )}
      </div>

      <nav className="mt-5">
        <div className="flex gap-[10px]">
          <img src={Loader} alt="loader" />
          <div className="gap-1">
            <h3 className="text-white text-base font-normal">Global Elite</h3>
            <span className="text-white">Rank: 12,988</span>
          </div>
        </div>
        <div className="gap-3 mb-5">
          <NavItem label="Markets" isOpen={isOpen} Icon={PiBank} />
          <NavItem label="Hypervaults" isOpen={isOpen} Icon={PiVaultBold} />
          <NavItem label="Hyperloop" isOpen={isOpen} Icon={RiLoopLeftLine} />
          <NavItem label="Analytics" isOpen={isOpen} Icon={FaChartBar} />
          <NavItem label="Referrals" isOpen={isOpen} Icon={FaUserPlus} />
          <NavItem label="Points" isOpen={isOpen} Icon={FaUserPlus} />
          <NavItem label="Staking" isOpen={isOpen} Icon={MdOutlineLock} />
        </div>

        <div className="flex">
          <NavItem label="Logout" isOpen={isOpen} Icon={RiLogoutCircleRLine} />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
