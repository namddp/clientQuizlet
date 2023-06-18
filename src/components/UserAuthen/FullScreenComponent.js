import React, { useState } from "react";
import { Button, Box, CloseIcon } from "@chakra-ui/react";
import Authenall from "@/components/UserAuthen/authenall";
import { GrClose } from "react-icons/Gr";
const FullScreenComponent = ({ onClose }) => (
  <Box
    position="fixed"
    top="0"
    left="0"
    right="0"
    bottom="0"
    display="flex"
    justifyContent="center"
    alignItems="center"
    zIndex="9999"
  >
    <Box display="flex">
      <Authenall />
      <Button
        onClick={onClose}
        position="absolute"
        right="4%"
        backgroundColor="white"
      >
        <GrClose />
      </Button>
    </Box>
  </Box>
);
export default FullScreenComponent;
