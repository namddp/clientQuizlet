import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Img } from "@chakra-ui/react";
import RegistrationPage from "./RegistrationPage";
import Image from "next/image";
const login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-1/2 h-full relative">
        <Image
          fill
          src="https://quizlet.com/_next/static/media/QZ_Auth_Light.18d3856e.png"
          alt="banner"
        />
      </div>
      <div className="flex-1 h-full m-8 text-align-left">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Đăng Nhập</Tab>
            <Tab>Đăng Kí</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <RegistrationPage />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default login;
