import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const router = useRouter();

  const handleCreateQuestion = () => {
    if (selectedTitle === "" || selectedSubject === "" || question === "") {
      setShowAlert(true);
    } else {
      const questionData = {
        title: selectedTitle,
        subject: selectedSubject,
        question: question,
      };
      localStorage.setItem("questionData", JSON.stringify(questionData));
      router.push("/connect");
    }
  };
  const handleResetQuestion = () => {
    setSelectedTitle("");
    setSelectedSubject("");
    setQuestion("");
  };
  return (
    <div>
      <Button colorScheme="blue" onClick={handleOpenModal}>
        Tạo học phần
      </Button>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thông tin câu hỏi</ModalHeader>
          <ModalBody>
            {showAlert && (
              <Alert status="warning" mb={4}>
                <AlertIcon />
                <AlertTitle>Vui lòng nhập đầy đủ thông tin câu hỏi.</AlertTitle>
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => setShowAlert(false)}
                />
              </Alert>
            )}

            <FormControl>
              <FormLabel>Tiêu đề</FormLabel>
              <Input
                placeholder="Nhập tiêu đề"
                value={selectedTitle}
                onChange={(e) => setSelectedTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Môn học</FormLabel>
              <Input
                placeholder="Nhập môn học"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Câu hỏi</FormLabel>
              <Textarea
                placeholder="Nhập câu hỏi của bạn"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreateQuestion}>
              Tạo câu hỏi
            </Button>

            <Button variant="ghost" onClick={handleResetQuestion}>
              Xóa
            </Button>

            <Button variant="ghost" onClick={handleCloseModal}>
              Hủy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HomePage;
