import React from "react";
import { faStar, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LearningItem = ({ test }) => {
  const [isClicklight, setClicklight] = React.useState(false);
  const handlelight = () => {
    setClicklight(!isClicklight);
  };

  return (
    <div className="flex justify-center items-center p-[16px] text-[20px] font-semibold bg-[#2e3856] text-[#f6f7fb] rounded-[10px] mb-[10px]">
      <div className="w-5/6">
        <h1>{test}</h1>
      </div>
      <div className="w-1/6 flex justify-end items-center">
        {!isClicklight && (
          <FontAwesomeIcon
            icon={faStar}
            className=" mr-[15px] hover:cursor-pointer"
            onClick={handlelight}
          />
        )}
        {isClicklight && (
          <FontAwesomeIcon
            icon={faStar}
            className=" mr-[15px] text-[#ffdc62] hover:cursor-pointer"
            onClick={handlelight}
          />
        )}

        <FontAwesomeIcon icon={faVolumeHigh} className="text-[#586380] " />
      </div>
    </div>
  );
};

export default function FormLearning() {
  const Learning = [
    { test: "káhdkjhskjd" },
    { test: "káhdkjhskjd" },
    { test: "káhdkjhskjd" },
    { test: "káhdkjhskjd" },
    { test: "káhdkjhskjd" },
  ];

  return (
    <div>
      {Learning.map((item, index) => (
        <LearningItem key={index} test={item.test} />
      ))}
    </div>
  );
}
