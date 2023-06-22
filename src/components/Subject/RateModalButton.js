import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import StarRating from "./StarRating";

const RateModalButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-wrapper") {
      handleClose();
    }
  };

  return (
    <div>
      <Button
        colorScheme="teal"
        variant="ghost"
        color="#f6f7fb"
        size="md"
        _hover={{ bg: "#2e3856" }}
        onClick={handleOpen}
      >
        <h1 className="pr-2 text-xs text-[#586380]">
          <FontAwesomeIcon icon={faStar} />
        </h1>
        Cho điểm đánh giá đầu tiên
      </Button>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-75"
            style={{
              backdropFilter: "blur(1px)",
            }}
            initial={{ opacity: 0, translateY: "-100%" }}
            animate={{ opacity: 1, translateY: "0%" }}
            exit={{ opacity: 0, translateY: "-100%" }}
            onClick={handleOutsideClick}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              id="modal-wrapper"
            >
              <motion.div className="bg-[#2e3856] rounded-[15px] px-6 pt-6">
                <div className="flex justify-end">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="hover:cursor-pointer text-3xl"
                    onClick={handleClose}
                  />
                </div>
                <h1 className="text-[#f6f7fb] text-3xl font-bold mb-4">
                  Bạn đánh giá học phần này thế nào?
                </h1>
                <StarRating />
                <div className="flex justify-end items-center border-t border-black mt-8 h-20">
                  <div className="bg-[#586380] text-white px-4 py-2 rounded-md">
                    Gửi
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default RateModalButton;
