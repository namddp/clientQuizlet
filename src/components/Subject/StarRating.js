import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@chakra-ui/react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [focusedStar, setFocusedStar] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [inputComplain, setInputComplain] = useState(false);
  const [likedFeatures, setLikedFeatures] = useState([]);
  const [showDiv, setShowDiv] = useState(false);

  const handleClickInputComplain = () => {
    setInputComplain(true);
  };

  const handleDisable = () => {
    setDisabled(false);
  };

  const handleHover = (index) => {
    if (!showDiv) {
      setRating(index);
    }
  };

  const handleFocus = (index) => {
    setFocusedStar(index);
    setShowDiv(true);
    handleDisable();
  };

  const handleLeave = () => {
    setRating(focusedStar);
  };

  const handleFeatureClick = (item) => {
    if (likedFeatures.includes(item)) {
      setLikedFeatures(likedFeatures.filter((feature) => feature !== item));
    } else {
      setLikedFeatures([...likedFeatures, item]);
    }
  };

  return (
    <div className="text-[#f6f7fb]">
      <h1 className="text-3xl font-bold mb-4">
        Bạn đánh giá học phần này thế nào?
      </h1>
      <div className="mb-[16px]">
        {[1, 2, 3, 4, 5].map((index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1 }}
            style={{
              display: "inline-block",
              marginRight: "20px",
              color: index <= rating ? "#FFD700" : "#ccc",
              cursor: "pointer",
              fontSize: "25px",
              focus: focusedStar === index,
            }}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
            onFocus={() => handleFocus(index)}
            tabIndex={0}
          >
            ★
          </motion.div>
        ))}
      </div>

      {showDiv && (
        <div>
          <h1 className="text-[20px] border-t border-black h-[50px] flex items-end mb-[24px]">
            {rating <= 3
              ? "Điều gì cần được cải thiện"
              : "Bạn thích điều gì ở nó"}
          </h1>
          <div className="flex justify-start items-center mr-[16px]">
            {rating <= 3 ? (
              [
                "Không đủ chi tiết",
                "Trình bày tệ",
                "Chưa hoàn thiện hoặc không liên quan",
              ].map((item, index) => (
                <h5
                  key={index}
                  className="flex justify-center items-center p-[6px] rounded-[5px] bg-[#586380] text-[15px] h-[35px] mr-[16px] hover:cursor-pointer hover:bg-[#939bb4] focus:bg-[#939bb4] focus:outline-none"
                  tabIndex={0}
                >
                  {item}
                </h5>
              ))
            ) : (
              <div className="flex justify-start items-center mr-[16px]">
                {[
                  "Nội dung bao quát",
                  "Trình bày hấp dẫn",
                  "Công cụ ôn bài tốt",
                  "Giúp tôi thi tốt",
                ].map((item, index) => (
                  <h5
                    key={index}
                    className="flex justify-center items-center p-[6px] rounded-[5px] bg-[#586380] text-[15px] h-[35px] mr-[16px] hover:cursor-pointer hover:bg-[#939bb4] focus:bg-[#939bb4] focus:outline-none"
                    tabIndex={0}
                    onClick={() => handleFeatureClick(item)}
                  >
                    {item}
                  </h5>
                ))}
              </div>
            )}
            {rating <= 3 && (
              <h5
                className="bg-[#586380] text-[15px] p-[6px] rounded-[5px] h-[35px] hover:cursor-pointer hover:bg-[#939bb4] focus:bg-[#939bb4] focus:outline-none"
                onClick={handleClickInputComplain}
              >
                Khác
              </h5>
            )}
          </div>
          {inputComplain && rating <= 3 && (
            <div className="mt-[15px]">
              <Input
                variant="outline"
                bgColor="#1a1d28"
                placeholder="Vui lòng nêu lý do"
              />
            </div>
          )}
        </div>
      )}

      <div className="flex justify-end items-center border-t border-black mt-8 h-20">
        <button
          className={`bg-[#4254fe] text-white px-4 py-2 rounded-md ${
            disabled ? "opacity-50 cursor-not-allowed bg-gray-400" : ""
          }`}
          disabled={disabled}
        >
          Gửi
        </button>
      </div>
    </div>
  );
};

export default StarRating;
