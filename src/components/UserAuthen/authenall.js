import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RegistrationPage from "@/components/UserAuthen/Register/RegistrationPage";
import Image from "next/image";
import Login from "@/components/UserAuthen/Login/Login";

const authenall = () => {
  return (
    <div className="bg-[#ffffff]">
      <div className="flex justify-center items-center h-screen w-screen">
        <div className=" w-1/2 h-full relative">
          <Image
            className="object-cover"
            fill
            src="/images/auth_banner.webp"
            alt="banner"
          />
        </div>
        <div className="form-container flex-1 h-full m-8 text-align-left fontVollkorn ">
          <Tabs margin={"30px 0px"} padding={"0px 32px"} variant="unstyled">
            <TabList className="fontVollkorn" mb="1em">
              <Tab
                color={"#939bb4"}
                fontSize={"24"}
                fontWeight={"700"}
                _selected={{ color: " #2e3856" }}
              >
                Đăng Nhập
              </Tab>
              <Tab
                color={"#939bb4"}
                fontSize={"24"}
                fontWeight={"700"}
                _selected={{ color: "#2e3856" }}
              >
                Đăng Ký
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <RegistrationPage />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default authenall;