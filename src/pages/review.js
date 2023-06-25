import React from "react";
import { useRouter } from "next/router";
import { Box, Text, Checkbox, Stack } from "@chakra-ui/react";

const Review = () => {
  const router = useRouter();
  const { questions } = router.query;

  // Kiểm tra xem có dữ liệu câu hỏi và câu trả lời không
  if (!questions) {
    return <div>Loading...</div>;
  }

  const parsedQuestions = JSON.parse(questions);

  return (
    <Box p={4}>
      <h2>Review Questions</h2>
      {parsedQuestions.map((question, questionIndex) => (
        <Box key={questionIndex} mt={4}>
          <h3>Câu Hỏi {questionIndex + 1}</h3>
          <Text>{question.question}</Text>
          <Stack spacing={2} mt={2}>
            {question.options.map((option, optionIndex) => (
              <Checkbox
                key={optionIndex}
                isChecked={question.selectedOption === optionIndex}
                isReadOnly
              >
                {option}
              </Checkbox>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default Review;
