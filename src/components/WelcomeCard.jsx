import React from "react";
import CardBackground from "../assets/CardBackground-lg.png";
import Badge from "../assets/light.png";
import Card from "./Card";
import { CiCircleInfo } from "react-icons/ci";
import { RiEyeLine } from "react-icons/ri";

const WelcomeCard = () => {
  return (
    <div className="flex flex-wrap">
      <div
        className=" border border-[#CAEAE51A] w-[750px] h-[368px] rounded-2xl text-white px-8 pt-12 "
        style={{
          backgroundImage: `url(${CardBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex gap-2 mb-4">
          <img src={Badge} alt="badge" />
          <p>Master Guardian</p>
        </div>
        <p className="font-normal text-[21.9px]">Welcome to Hyperlend!</p>
        <h1 className="font-semibold text-[52.52px] mb-4">
          Hello Hyperlend.hl
        </h1>
        <div className="flex justify-between">
          <Card
            title="Currency"
            Icon={RiEyeLine}
            width="256px"
            height="129px"
            amount="$17,53,050"
            increase="$22,588 (+1.28%)"
          />
          <Card
            title="Total APY"
            Icon={CiCircleInfo}
            width="133px"
            height="129px"
            amount="18.7%"
            increase="1.3%"
          />
          <Card
            title="Total Points"
            Icon={CiCircleInfo}
            width="133px"
            height="129px"
            amount="421"
            increase="12 (3.89)%"
          />
          <Card
            title="Health Factor"
            Icon={CiCircleInfo}
            width="133px"
            height="129px"
            amount="18.7%"
            increase="1.3%"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
