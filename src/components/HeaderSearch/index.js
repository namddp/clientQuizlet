import { Image, Input, Menu, MenuList } from "@chakra-ui/react";
import classNames from "classnames";
import { useState } from "react";
import styles from "./HeaderSearch.module.scss";
import { SearchIcon } from "@chakra-ui/icons";

export default function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);

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
              <div className="grid grid-cols-2 gap-4 p-3">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-full py-3 px-4 rounded-lg flex items-center bg-red-400"
                  >
                    <Image
                      boxSize="2rem"
                      borderRadius="full"
                      src="https://placekitten.com/100/100"
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <span>Fluffybuns the Destroyer</span>
                  </div>
                ))}
              </div>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
}
