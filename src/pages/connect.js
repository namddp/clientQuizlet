import { connectToDatabase } from "./connectToDatabase";
import QuizCreator from "./test";
import {
  Box,
  Flex,
  Heading,
  Text,
  Checkbox,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export async function getServerSideProps() {
  try {
    const client = await connectToDatabase();
    const collection = client.db("Exam-System").collection("questions");

    // Lấy toàn bộ dữ liệu
    const questions = await collection.find({}).toArray();

    // Nhóm câu hỏi theo chủ đề
    const groupedQuestions = {};
    questions.forEach((question) => {
      if (groupedQuestions[question.subject]) {
        groupedQuestions[question.subject].push(question);
      } else {
        groupedQuestions[question.subject] = [question];
      }
    });

    return {
      props: {
        groupedQuestions: JSON.parse(JSON.stringify(groupedQuestions)),
      },
    };
  } catch (error) {
    console.error("Error retrieving questions:", error);
    return {
      props: {
        groupedQuestions: {},
      },
    };
  }
}

export default function MyPage({ groupedQuestions }) {
  const handleMoveToQuizCreator = (question) => {
    // Thực hiện logic chuyển câu hỏi sang component QuizCreator
    console.log("Chuyển câu hỏi:", question);
  };
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Sử dụng dữ liệu trong giao diện của bạn
  return (
    <Flex>
      <Box flex={1} p={4}>
        {/* Hiển thị các card câu hỏi theo chủ đề */}
        {Object.entries(groupedQuestions).map(([subject, questions], subjectIndex) => (
          <Box key={subject} borderWidth="1px" borderRadius="md" p={4} mb={4}>
            <Heading as="h1" mb={2}>
              <b>{subject}</b>
            </Heading>
            {questions.map((question, index) => (
              <Box
                key={question.questionID}
                borderWidth="1px"
                borderRadius="md"
                p={4}
                mb={4}
              >
                <Text>{question.content}</Text>
                {question.answer && question.answer.length > 0 && (
                  <Box mt={4}>
                    <VStack align="start" spacing={2}>
                      {question.answer.map((item, index) => (
                        <Box key={index} borderWidth="1px" borderRadius="md" p={2}>
                          <Checkbox>
                            {item.title}. {item.content}
                          </Checkbox>
                        </Box>
                      ))}
                    </VStack>
                  </Box>
                )}
                <Button
                  mt={4}
                  colorScheme="blue"
                  onClick={() => handleMoveToQuizCreator(question)}
                >
                  Chuyển sang Quiz Creator
                </Button>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Box flex={1} p={4}>
        {/* Đoạn mã tạo câu hỏi từ QuizCreator */}
        <QuizCreator />
      </Box>
    </Flex>
  );
}
