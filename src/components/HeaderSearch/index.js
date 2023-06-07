import { Image, Input, Menu, MenuList } from "@chakra-ui/react";
import classNames from "classnames";
import { useState } from "react";
import styles from "./HeaderSearch.module.css";

export default function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/2">
          <Input placeholder="A" onFocus={() => setIsOpen(true)} />
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
      </div>
    </>
  );
}
