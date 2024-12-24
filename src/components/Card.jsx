import React from "react";
import { RiEyeLine } from "react-icons/ri";

const Card = (props) => {
  return (
    <div
      className={`flex flex-col gap-1 w-[${props.width}] h-[${props.height}] px-6 py-2 bg-[#071311] border border-[#CAEAE51A] text-white rounded-2xl`}
    >
      <div className="flex gap-2">
        <h2 className="text-xs font-light italic text-[#E1E1E1] ">
          {props.title}
        </h2>
        <props.Icon />
      </div>
      <div className="text-[28px] font-medium">{props.amount}</div>
      <span className="text-sm font-normal text-[#2DC24E]">
        +{props.increase}
      </span>
    </div>
  );
};

export default Card;
