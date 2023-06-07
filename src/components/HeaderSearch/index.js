import { Image, Input, Menu, MenuList, Text } from "@chakra-ui/react";
import classNames from "classnames";
import { useMemo, useState } from "react";
import styles from "./HeaderSearch.module.scss";
import { SearchIcon } from "@chakra-ui/icons";

export default function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const catalogys = useMemo(
    () => [
      {
        color: "#fff6ef",
        icon: "/svg/learn.svg",
        title: "Nghệ thuật nhân văn",
      },
      {
        color: "#fff9e3",
        icon: "/svg/SmartGrading.svg",
        title: "Toán",
      },
      {
        color: "#e6fcf4",
        icon: "/svg/Solutions.svg",
        title: "Vật lý",
      },
      {
        color: "#edefff",
        icon: "/svg/StepbyStep.svg",
        title: "Hóa học",
      },
      {
        color: "#edefff",
        icon: "/svg/Test.svg",
        title: "Ngữ văn",
      },
      {
        color: "#fcf0ff",
        icon: "/svg/TextbookSolutions.svg",
        title: "Sinh học",
      },
      {
        color: "#e6fcf4",
        icon: "/svg/Solutions.svg",
        title: "Lịch sử",
      },
      {
        color: "#edefff",
        icon: "/svg/StepbyStep.svg",
        title: "Địa lý",
      },
      {
        color: "#fff9e3",
        icon: "/svg/SmartGrading.svg",
        title: "Tiếng Anh",
      },
    ],
    []
  );

  return (
    <>
      <div className="w-full">
        <div className="flex gap-2 rounded-full bg-gray-200 py-2 px-3 items-center">
          <SearchIcon />
          <Input
            variant="unstyled"
            placeholder="Học phần, sách giáo khoa, câu hỏi..."
            onFocus={() => setIsOpen(true)}
          />
        </div>
        <div className="w-full relative">
          <Menu isOpen={isOpen}>
            <MenuList
              className={classNames(
                "w-full absolute rounded-2xl overflow-hidden",
                styles.dropdownWrapper
              )}
            >
              <div className="px-3 py-2">
                <Text className="mb-4 text-[#282e3e] font-bold text-md">
                  Duyệt theo chủ đề
                </Text>
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div
                      key={index}
                      className={classNames(
                        `w-full py-3 px-4 rounded-lg flex items-center`
                      )}
                      style={{
                        backgroundColor: catalogys[index]?.color,
                      }}
                    >
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src={catalogys[index]?.icon}
                        alt="Fluffybuns the destroyer"
                        mr="12px"
                      />
                      <span className="text-md text-[#282e3e] font-bold">
                        {catalogys[index]?.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
}
