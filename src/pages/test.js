import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const QuizCreator = () => {
  const [questions, setQuestions] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
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
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(questionIndex, 1);
      return updatedQuestions;
    });
  };

  const handleDeleteOption = (questionIndex, optionIndex) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      const question = JSON.parse(
        JSON.stringify(updatedQuestions[questionIndex])
      );
      question.options.splice(optionIndex, 1);
      updatedQuestions[questionIndex] = question;
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
    const hasMissingAnswer = questions.some(question => question.selectedOption === null);
    if (hasMissingAnswer) {
      setIsAlertOpen(true);
    } else {
      console.log(questions);
    }
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <Box p={4}>
      <h2 className="text-2xl font-bold mb-4">Quiz Creator</h2>

      {questions.map((question, questionIndex) => (
        <Box key={questionIndex} mb={4}>
          <h3 className="text-lg font-bold">Question {questionIndex + 1}</h3>
          <Button
            py={1}
            px={2}
            bg="red.500"
            color="white"
            rounded="md"
            onClick={() => handleDeleteQuestion(questionIndex)}
          >
            Delete
          </Button>
          <FormControl mt={2}>
            <FormLabel>Question:</FormLabel>
            <Input
              border="1px"
              borderColor="gray.300"
              rounded="md"
              px={2}
              py={1}
              mt={1}
              type="text"
              name="question"
              value={question.question}
              onChange={(event) => handleQuestionChange(event, questionIndex)}
            />
          </FormControl>
          <br />
          {question.options.map((option, optionIndex) => (
            <Box key={optionIndex} display="flex" alignItems="center" mt={2}>
              <FormControl mr={2}>
                <FormLabel>
                  Option {String.fromCharCode(65 + optionIndex)}:
                </FormLabel>
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
                py={1}
                px={2}
                bg="red.500"
                color="white"
                rounded="md"
                onClick={() => handleDeleteOption(questionIndex, optionIndex)}
              >
                Delete
              </Button>
              <FormControl ml={2}>
                <FormLabel>Correct Option:</FormLabel>
                <RadioGroup
                  value={question.selectedOption}
                  onChange={() =>
                    handleCorrectOptionChange(questionIndex, optionIndex)
                  }
                >
                  <Stack direction="row">
                    <Radio value={optionIndex} />
                  </Stack>
                </RadioGroup>
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
            Add Option
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
        Add
      </Button>

      {questions.length > 0 && (
        <Button
          py={2}
          px={4}
          bg="blue.500"
          color="white"
          rounded="md"
          mt={4}
          onClick={handleFinishQuiz}
        >
          Finish
        </Button>
      )}
       <Alert status="error" mt={4} borderRadius="md" display={isAlertOpen ? 'block' : 'none'}>
        <AlertIcon />
        <AlertTitle>Vui lòng chọn đáp án đúng cho mỗi câu hỏi!</AlertTitle>
        <Button
          ml="auto"
          variant="outline"
          size="sm"
          onClick={handleCloseAlert}
        >
          Đóng
        </Button>
      </Alert>
    </Box>
  );
};

export default QuizCreator;
