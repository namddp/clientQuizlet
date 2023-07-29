import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Radio,
  RadioGroup,
  VStack,
  Button,
  Container,
  Checkbox,
} from "@chakra-ui/react";
import { decode } from "base-64"; // Import the base64 library

const ReviewPage = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const router = useRouter();
  const encodedCreatedData = router.query?.createdData ?? null;
  const encodedEditedData = router.query?.editedData ?? null;

  // Handle the case where encodedCreatedData and encodedEditedData are undefined or null
  if (!encodedCreatedData || !encodedEditedData) {
    return <div>Loading or Error message...</div>;
  }

  // Decode the encoded data to get the createdQuestionsData
  const decodedCreatedData = decode(encodedCreatedData);
  const parsedCreatedQuestionsData = JSON.parse(decodedCreatedData);

  // Combine the parsedCreatedQuestions and parsedCreatedQuestionsData to get all questions
  const allQuestions = [
    ...parsedCreatedQuestions,
    ...(parsedCreatedQuestionsData || []),
  ];

  // Initialize selected questions state

  // Function to handle adding or removing questions from the selectedQuestions state
  const handleSelectQuestion = (questionID) => {
    setSelectedQuestions((prevSelectedQuestions) => {
      if (prevSelectedQuestions.includes(questionID)) {
        // Question is already selected, remove it from the selectedQuestions state
        return prevSelectedQuestions.filter((id) => id !== questionID);
      } else {
        // Question is not selected, add it to the selectedQuestions state
        return [...prevSelectedQuestions, questionID];
      }
    });
  };

  // ... (rest of the code remains unchanged)

  return (
    <Container maxW="lg" mt={4}>
      <Text fontWeight="bold" fontSize="xl" mb={4}>
        Review Questions
      </Text>
      {allQuestions.map((question, index) => (
        <Box key={index} borderWidth="1px" borderRadius="md" p={4} my={4}>
          <Text fontWeight="bold" mb={2}>
            {question.content}
          </Text>
          <RadioGroup value={selectedQuestions.includes(question.questionID) ? "selected" : "unselected"} onChange={(e) => handleSelectQuestion(question.questionID)}>
            <VStack align="start" spacing={2}>
              {question.answers.map((answer, answerIndex) => (
                <Radio key={answerIndex} value="selected" isDisabled={true}>
                  {answer.title}. {answer.content}
                </Radio>
              ))}
            </VStack>
          </RadioGroup>
        </Box>
      ))}
      <Button colorScheme="blue" mt={4} onClick={handleSubmitAnswers}>
        Submit Answers
      </Button>
    </Container>
  );
};

export default ReviewPage;
