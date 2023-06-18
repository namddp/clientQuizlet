import React, { useState } from "react";
import { Button, Box, CloseIcon } from "@chakra-ui/react";
import Authenall from "@/components/UserAuthen/authenall";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
const FullScreenComponent = ({ onClose }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
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
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        style={{ width: "100%", height: "100%" }}
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
      </motion.div>
    </Box>
  );
};
export default FullScreenComponent;
