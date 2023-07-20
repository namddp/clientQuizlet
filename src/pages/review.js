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
} from "@chakra-ui/react";

const ReviewPage = () => {
  const router = useRouter();
  const createdQuestions = router.query?.createdQuestions ?? null;
  const parsedCreatedQuestions = JSON.parse(createdQuestions);

  // Handle the case where createdQuestions is undefined or null
  if (!parsedCreatedQuestions) {
    return <div>Loading or Error message...</div>;
  }

  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Initialize answers state with an empty object
    const initialAnswers = {};
    parsedCreatedQuestions.forEach((question) => {
      initialAnswers[question.questionID] = ""; // Initialize each question with an empty string
    });
    setAnswers(initialAnswers);
  }, []);

  const handleAnswerChange = (questionID, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionID]: selectedAnswer,
    }));
  };

  const handleSubmitAnswers = () => {
    // Handle submitting the answers, e.g., send them to a server for evaluation
    console.log(answers);
  };

  return (
    <Container maxW="lg" mt={4}>
      <Text fontWeight="bold" fontSize="xl" mb={4}>
        Review Questions
      </Text>
      {parsedCreatedQuestions.map((question, index) => (
        <Box key={index} borderWidth="1px" borderRadius="md" p={4} my={4}>
          <Text fontWeight="bold" mb={2}>
            {question.content}
          </Text>
          <RadioGroup isDisabled>
            <VStack align="start" spacing={2}>
              {question.answers.map((answer, answerIndex) => (
                <Radio key={answerIndex} value={answer.title}>
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
