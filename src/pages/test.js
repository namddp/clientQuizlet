import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Input,
  Checkbox,
  FormControl,
  FormLabel,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
} from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
const QuizCreator = () => {

  const [questions, setQuestions] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [fontStyle, setFontStyle] = useState("normal");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAnswerComplete, setIsAnswerComplete] = useState(false); // Thêm biến trạng thái
  const [deleteQuestionIndex, setDeleteQuestionIndex] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleQuestionChange = (event, questionIndex) => {
    const { name, value } = event.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        [name]: value,
      };
      return updatedQuestions;
    });
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        options: updatedQuestions[questionIndex].options.map((option, idx) => {
          if (idx === optionIndex) {
            return value;
          }
          return option;
        }),
      };
      return updatedQuestions;
    });
    setIsAnswerComplete(checkAnswerComplete());
  };

  const checkAnswerComplete = () => {
    const hasIncompleteAnswer = questions.some((question) => {
      return question.options.some((option) => option.trim() === "");
    });
    return !hasIncompleteAnswer;
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        question: "",
        options: ["", "", "", ""],
        selectedOption: null,
      },
    ]);
  };

  const handleDeleteQuestion = (questionIndex) => {
    setDeleteQuestionIndex(questionIndex);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(deleteQuestionIndex, 1);
      return updatedQuestions;
    });
    setIsDeleteDialogOpen(false);
  };
  const handleCancelDelete = () => {
    setIsDeleteDialogOpen(false);
  };
  const handleDeleteOption = (questionIndex, optionIndex) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      const question = JSON.parse(
        JSON.stringify(updatedQuestions[questionIndex])
      );

      // Check if the question will have at least one option after deletion
      if (question.options.length > 1) {
        question.options.splice(optionIndex, 1);
        updatedQuestions[questionIndex] = question;
      }

      return updatedQuestions;
    });
  };

  const handleAddOption = useCallback((questionIndex) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      const question = { ...updatedQuestions[questionIndex] };
      question.options = [...question.options, ""];
      updatedQuestions[questionIndex] = question;
      return updatedQuestions;
    });
  }, []);

  const handleCorrectOptionChange = (questionIndex, optionIndex) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        selectedOption: optionIndex,
      };
      return updatedQuestions;
    });
  };

  const handleFinishQuiz = () => {
    const hasMissingAnswer = questions.some((question) => {
      return (
        question.selectedOption === null ||
        question.selectedOption >= question.options.length
      );
    });

    if (hasMissingAnswer) {
      setIsAlertOpen(true);
    } else {
      // Chuyển hướng đến trang xem lại
      router.push({
        pathname: "/review",
        query: { questions: JSON.stringify(questions) },
      });
    }
  };
  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };
  const toggleFontStyle = (style) => {
    if (fontStyle === style) {
      setFontStyle("normal");
    } else {
      setFontStyle(style);
    }
  };
  const router = useRouter();

  return (
    <Box p={4} ml={4}>
      <h2 className="text-2xl font-bold mb-4">Quiz Creator</h2>
      {questions.map((question, questionIndex) => (
        <Box key={questionIndex} mb={4}>
          <div className="text-lg font-bold">
            Câu Hỏi {questionIndex + 1}
            <Button
              bg="red.500"
              color="white"
              rounded="md"
              onClick={() => handleDeleteQuestion(questionIndex)}
              ml={3}
              mb={1}
            >
              Xóa Câu Hỏi
            </Button>
          </div>
          <FormControl mt={2}>
            <FormLabel>Tiêu đề :</FormLabel>
            <Input
              // ...
              onFocus={() => {
                setIsFocused(true);
                setShowDropdown(true);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setIsFocused(false);
                  setShowDropdown(false);
                }, 100);
              }}
              onChange={(event) => handleQuestionChange(event, questionIndex)}
              onMouseUp={() => {
                const text = window.getSelection().toString();
                setSelectedText(text);
              }}
              style={{
                fontWeight: selectedText ? (fontStyle === "bold" ? "bold" : "normal") : "normal",
                fontStyle: selectedText ? (fontStyle === "italic" ? "italic" : "normal") : "normal",
              }}
            />
            {selectedText && isFocused && (
              <Box
                position="absolute"
                top="-10px"
                left="10%"
                transform="translateX(-50%)"
                bg="white"
                boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                borderRadius="md"
                px={2}
              >
                <Button
                  onClick={() => toggleFontStyle("bold")}
                  variant={fontStyle === "bold" ? "solid" : "outline"}
                  fontWeight="bold"
                  mr={1}
                  size={"sm"}
                >
                  B
                </Button>
                <Button
                  onClick={() => toggleFontStyle("italic")}
                  variant={fontStyle === "italic" ? "solid" : "outline"}
                  fontStyle="italic"
                  size={"sm"}
                >
                  I
                </Button>
              </Box>
            )}
          </FormControl>
          <br />
          {question.options.map((option, optionIndex) => (
            <Box key={optionIndex} display="flex" alignItems="center" mt={2}>
              <FormControl mr={2}>
                <FormLabel>{String.fromCharCode(65 + optionIndex)}</FormLabel>
                <Input
                  border="1px"
                  borderColor="gray.300"
                  rounded="md"
                  px={2}
                  py={1}
                  type="text"
                  value={option}
                  onChange={(event) =>
                    handleOptionChange(event, questionIndex, optionIndex)
                  }
                />
              </FormControl>
              <Button
                // py={1}
                // px={2}
                mt={"8"}
                // bg="red.500"
                // color="white"
                rounded="md"
                onClick={() => handleDeleteOption(questionIndex, optionIndex)}
                isDisabled={question.options.length === 1}
              >
                <BsTrash size={"lg"} />
              </Button>

              <FormControl ml={2} mt={4}>
                <FormLabel>Đáp Án Đúng</FormLabel>
                <Checkbox
                  isChecked={question.selectedOption === optionIndex}
                  onChange={() =>
                    handleCorrectOptionChange(questionIndex, optionIndex)
                  }
                  size="lg"
                  colorScheme="green"
                ></Checkbox>
              </FormControl>
            </Box>
          ))}
          <Button
            py={1}
            px={2}
            bg="green.500"
            color="white"
            rounded="md"
            mt={2}
            onClick={() => handleAddOption(questionIndex)}
          >
            Thêm Đáp Án
          </Button>
        </Box>
      ))}

      <Button
        py={2}
        px={4}
        bg="green.500"
        color="white"
        rounded="md"
        mt={4}
        onClick={handleAddQuestion}
      >
        Thêm Câu Hỏi
      </Button>

      {questions.length > 0 && (
        <Button
          py={2}
          px={4}
          bg="blue.500"
          color="white"
          rounded="md"
          mt={4}
          ml={4}
          onClick={handleFinishQuiz}
        >
          Hoàn Thành
        </Button>
      )}
      <AlertDialog isOpen={isAlertOpen} onClose={handleCloseAlert} isCentered>
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
      </AlertDialog>
      <AlertDialog
        isOpen={isDeleteDialogOpen}
        leastDestructiveRef={null}
        onClose={handleCancelDelete}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Xác nhận xóa câu hỏi
            </AlertDialogHeader>
            <AlertDialogBody>
              Bạn có chắc chắn muốn xóa câu hỏi này?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="red" onClick={handleConfirmDelete} ml={3}>
                Xóa
              </Button>
              <Button onClick={handleCancelDelete}>Hủy</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default QuizCreator;
