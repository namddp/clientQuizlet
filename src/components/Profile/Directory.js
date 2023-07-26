import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  Box,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Button,
  Input,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Directory() {
  const [folderTitle, setFolderTitle] = useState("");
  const [folderDescription, setFolderDescription] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    setIsButtonDisabled(!(folderTitle && folderDescription));
  }, [folderTitle, folderDescription]);
  return (
    <div className="mt-[40px]  ">
      <div className="flex justify-start">
        <Popover>
          <PopoverTrigger>
            <Box>
              <div>
                <button className="flex justify-center items-center rounded-[6px] border hover:cursor-pointer font-bold hover:bg-[#2e3856] h-[40px] w-[100px]">
                  <h1 className="ml-[2px]">Đã tạo</h1>
                  <ChevronDownIcon />
                </button>
              </div>
            </Box>
          </PopoverTrigger>
          <PopoverContent
            bg="#0a092d"
            color="#f6f7fb"
            borderColor="#282e3e"
            width="250px"
            borderRadius="15px"
          >
            <PopoverArrow />
            <PopoverBody fontSize="md">
              <div className="flex flex-col ">
                <div className="flex justify-start items-center w-full h-[40px] pl-[5px] hover:cursor-pointer hover:bg-[#2e3856]">
                  <p> Thứ tự gốc</p>
                </div>
                <div className="flex justify-start items-center w-full h-[40px] pl-[5px] hover:cursor-pointer hover:bg-[#2e3856]">
                  <p> Bảng chữ cái</p>
                </div>
                <div className="flex justify-start items-center w-full h-[40px] pl-[5px] hover:cursor-pointer hover:bg-[#2e3856]">
                  <p> Thông số của bạn</p>
                </div>
              </div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mt-[64px] flex justify-center items-center">
        <Image
          src="https://assets.quizlet.com/a/j/dist/app/i/library/folders_empty.e8ccd3450b94159.svg"
          alt="pic"
          width={400}
          height={400}
        />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-[23px]">Bạn chưa tạo thư mục nào</h1>
        <h1 className="font-semibold text-[17px]">
          Tạo một thư mục để sắp xếp các học phần
        </h1>
      </div>
      <div className="flex justify-center mt-[20px]">
        <Button colorScheme="blue" bgColor="#4255ff" onClick={handleOpen}>
          Tạo thư mục
        </Button>
      </div>
      <div>
        
      </div>
      <div>
        {isOpen && (
          <AnimatePresence>
            <motion.div
              className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-75 "
              style={{
                backdropFilter: "blur(1px)",
              }}
              initial={{ opacity: 0, translateY: "-100%" }}
              animate={{ opacity: 1, translateY: "0%" }}
              exit={{ opacity: 0, translateY: "-100%" }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center  "
                id="modal-wrapper"
              >
                <motion.div className="bg-[#2e3856] rounded-[15px] px-6 pt-6 w-[700px]">
                  <div className="flex justify-end">
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="hover:cursor-pointer text-3xl"
                      onClick={handleClose}
                    />
                  </div>
                  <div className="flex justify-start">
                    <h1 className="font-bold text-[30px]">Tọa thư mục mới</h1>
                  </div>
                  <div className="mt-[20px]">
                    <Input
                      placeholder="Nhập tiêu đề"
                      bgColor="#0a092d"
                      _placeholder={{ opacity: 1, color: "white" }}
                      value={folderTitle}
                      onChange={(e) => setFolderTitle(e.target.value)}
                    />
                  </div>
                  <div className="mt-[20px] mb-[64px]">
                    <Input
                      bgColor="#282e3e"
                      placeholder="Nhập mô tả (tuỳ chọn)"
                      _placeholder={{ opacity: 1, color: "white" }}
                      height="60px"
                      value={folderDescription}
                      onChange={(e) => setFolderDescription(e.target.value)}
                    />
                  </div>
                  <div className="border-b-[1px] border-[#939bb4]"></div>
                  <div className="flex justify-end items-center mt-[15px] mb-[20px]">
                    <button
                      className={`bg-[#4254fe] text-white px-4 py-2 rounded-md ${
                        isButtonDisabled
                          ? "opacity-50 cursor-not-allowed bg-gray-400"
                          : ""
                      }`}
                      onClick={() => {
                        // Thực hiện các hành động khi nhấp vào nút "Tạo thư mục"
                        console.log("Tiêu đề thư mục:", folderTitle);
                        console.log("Mô tả thư mục:", folderDescription);
                      }}
                      disabled={isButtonDisabled}
                    >
                      Tạo thư mục
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
