import React from "react";
import { useRouter } from "next/router";
import { Box, Text, Checkbox, Stack, Image, Heading } from "@chakra-ui/react";

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
      <Heading>Review Questions</Heading>
      {parsedQuestions.map((question, questionIndex) => (
        <Box key={questionIndex} mt={4}>
          <Heading as="h1" size="sm">
            Câu Hỏi {questionIndex + 1}
          </Heading>
          <Text>{question.question}</Text>
          {question.imageDataURL && (
            <Box marginTop={4}>
              <Image
                src={question.imageDataURL}
                alt="Hình ảnh câu hỏi"
                width={"50%"}
                height={"50%"}
                objectFit="contain"
              />
            </Box>
          )}
          <Stack spacing={2} marginTop={4}>
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
