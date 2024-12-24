import "./App.css";
import Sidebar from "./components/Sidebar";
import { FaChevronDown } from "react-icons/fa";
import WelcomeCard from "./components/WelcomeCard";
import Card from "./components/Card";
import { CiCircleInfo } from "react-icons/ci";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-[#071311] min-h-screen p-6">
        <div className="flex justify-between">
          <h1 className="text-white text-3xl font-bold">Dashboard</h1>
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-white text-base">0x843...z4u</h2>
            <FaChevronDown color="white" />
          </div>
        </div>
        <div className="flex justify-between">
          <WelcomeCard />
          <div className="flex flex-col w-[355px] h-[368px] rounded-2xl border border-[#CAEAE51A] text-white">
            <div className="flex justify-between">
              <h1 className="font-light text-xs italic text-[#E1E1E1]">
                Your Position
              </h1>
              <div className="flex gap-2 justify-center items-center">
                <h1 className="">Daily Earnings</h1>
                <LuCircleArrowOutUpRight />
              </div>
            </div>
            <Card
              title="Total Deposited"
              Icon={CiCircleInfo}
              width="305px"
              height="129px"
              amount="$17,53,050"
              increase="$33,132 (+1.89%)"
            />
            <Card
              title="Total Deposited"
              Icon={CiCircleInfo}
              width="256px"
              height="129px"
              amount="$17,53,050"
              increase="$33,132 (+1.89%)"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
