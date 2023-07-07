import { connectToDatabase } from "./connectToDatabase";
import {
  Box,
  Flex,
  Heading,
  Text,
  Checkbox,
  VStack,
  Button,
  Input
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
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const handleMoveToQuizCreator = (question) => {
    setSelectedQuestion(null);

    // Tạo một biến tạm để lưu trữ giá trị của editingQuestion
    let updatedEditingQuestion;

    // Tìm câu hỏi trong quizQuestions dựa trên questionID
    const existingQuestion = quizQuestions.find((q) => q.questionID === question.questionID);

    // Kiểm tra xem câu hỏi đã tồn tại trong quizQuestions hay chưa
    if (existingQuestion) {
      updatedEditingQuestion = existingQuestion;
    } else {
      // Cập nhật giá trị của editingQuestion thay vì sao chép từ question
      updatedEditingQuestion = {
        questionID: question.questionID,
        content: question.content,
        answer: question.answer.map((item) => ({
          title: item.title,
          content: item.content,
        })),
      };

      // Thêm câu hỏi vào quizQuestions
      setQuizQuestions((prevQuestions) => [...prevQuestions, updatedEditingQuestion]);
    }

    // Cập nhật giá trị của editingQuestion
    setEditingQuestion(updatedEditingQuestion);
  };

  const handleSaveEditQuestion = (question) => {
    // Cập nhật lại quizQuestions với giá trị đã chỉnh sửa
    setQuizQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.questionID === question.questionID ? editingQuestion : q))
    );
    setEditingQuestion(null);
  };

  const handleEditQuestion = (question) => {
    setEditingQuestion(question);
  };

  const handleRemoveFromQuiz = (question) => {
    setQuizQuestions((prevQuestions) =>
      prevQuestions.filter((q) => q.questionID !== question.questionID)
    );
  };

  // Sử dụng dữ liệu trong giao diện của bạn
  return (
    <Flex>
      <Box flex={1} p={4}>
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
                <Button onClick={() => handleMoveToQuizCreator(question)}>
                  Chuyển sang Quiz Creator
                </Button>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Box flex={1} p={4}>
        <Box borderWidth="1px" borderRadius="md" p={4} mb={4}>
          <Heading as="h1" mb={2}>
            <b>Quiz Creator</b>
          </Heading>
          {quizQuestions.map((question, index) => (
            <Box
              key={question.questionID}
              borderWidth="1px"
              borderRadius="md"
              p={4}
              mb={4}
            >
              {editingQuestion && editingQuestion.questionID === question.questionID ? (
                <Box>
                  <Input
                    value={editingQuestion?.content}
                    onChange={(e) =>
                      setEditingQuestion((prevQuestion) => ({
                        ...prevQuestion,
                        content: e.target.value,
                      }))
                    }
                  />
                  {question.answer &&
                    question.answer.map((item, index) => (
                      <Box key={index}>
                        <Text>{item.title}</Text>
                        <Input
  value={item.content}
  defaultValue={item.content}
  onChange={(e) => {
    // const updatedAnswer = question.answer.map((ans, idx) =>
    //   idx === index ? { ...ans, content: e.target.value } : ans
    // );
    // setEditingQuestion((prevQuestion) => ({
    //   ...prevQuestion,
    //   answer: updatedAnswer,
    // }));
    e.target.value
  }}
/>

                      </Box>
                    ))}
                  <Button onClick={() => handleSaveEditQuestion(question)}>
                    Lưu chỉnh sửa
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Text>{question.content}</Text>
                  {question.answer &&
                    question.answer.map((item, index) => (
                      <Box key={index}>
                        <Text>
                          {item.title}. {item.content}
                        </Text>
                      </Box>
                    ))}
                  <Button onClick={() => handleEditQuestion(question)}>Chỉnh sửa</Button>
                </Box>
              )}
              <Button onClick={() => handleRemoveFromQuiz(question)}>
                Xóa khỏi Quiz
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  );
}
