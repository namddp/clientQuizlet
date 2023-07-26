import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Input } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CreateClass() {
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
    <div>
      <div className="mt-[72px] flex justify-center items-center">
        <Image
          src="https://assets.quizlet.com/a/j/dist/app/i/library/classes_empty.582d04f35b49dcb.svg"
          alt="pic"
          width={400}
          height={400}
        />
      </div>
      <div className=" text-center px-[400px]">
        <h1 className="font-bold text-[23px]">
          Bạn chưa tạo hoặc tham gia lớp học nào
        </h1>
        <h1>
          Tạo một lớp học để giúp bạn sắp xếp học phần của mình và chia sẻ chúng
          với học sinh
        </h1>
      </div>
      <div className="flex justify-center items-center mt-[20px]">
        <Button colorScheme="blue" bgColor="#4255ff" onClick={handleOpen}>
          Tạo lớp học
        </Button>
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
                    <h1 className="font-bold text-[30px]">Tọa lớp mới</h1>
                  </div>
                  <div className="mt-[20px]">
                    <Input
                      placeholder="Nhập tên lớp"
                      bgColor="#0a092d"
                      _placeholder={{ opacity: 1, color: "white" }}
                      value={folderTitle}
                      onChange={(e) => setFolderTitle(e.target.value)}
                    />
                  </div>
                  <div className="mt-[20px] mb-[64px]">
                    <Input
                      bgColor="#0a092d"
                      placeholder="Nhập mô tả (tuỳ chọn)"
                      _placeholder={{ opacity: 1, color: "white" }}
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
                      Tạo lớp mới
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
