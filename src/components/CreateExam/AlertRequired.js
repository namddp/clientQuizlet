import React, { useState, useCallback } from "react";

import {
  Button,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@chakra-ui/react";
const AlertRequired = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };
  return (
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg">
          Vui lòng chọn đáp án đúng cho mỗi câu hỏi!
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button colorScheme="blue" onClick={handleCloseAlert}>
            Đóng
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  );
};

export default AlertRequired;
