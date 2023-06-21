import React, { useState } from "react";
import { Button, Box, CloseIcon } from "@chakra-ui/react";
import Authenall from "@/components/UserAuthen/authenall";
import { GrClose } from "react-icons/Gr";
import { motion } from "framer-motion";
const FullScreenComponent = ({ onClose }) => {
    const variants = {
      initial: {
        opacity: 0,
        y: -100,
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
      zIndex="50"
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
              top ="4%"
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
