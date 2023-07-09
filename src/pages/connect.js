import { connectToDatabase } from "./connectToDatabase";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 65c7cc88b64ce158f1636e9dda54997998095f1f
import {
  Box,
  Flex,
  Heading,
  Text,
  Checkbox,
  VStack,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
<<<<<<< HEAD
>>>>>>> 2405bec (update ngan hang cau hoi)

export async function getServerSideProps() {
  const client = await connectToDatabase();
  const collection = client.db("Exam-System").collection("questions");

  // Lấy toàn bộ dữ liệu
  const questions = await collection.find({}).toArray();

  return {
    props: {
      questions: JSON.parse(JSON.stringify(questions)),
    },
  };
}

<<<<<<< HEAD
export default function MyPage({ questions }) {
  // Sử dụng dữ liệu trong giao diện của bạn
  return (
    <div>
      {questions.map((question) => (
        <div key={question.questionID}>
          <h1><b>{question.subject}</b></h1>
          <p>{question.content}</p>
          {question.answer && question.answer.length > 0 && (
            <div>
              <ul>
                {question.answer.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
=======
=======

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

>>>>>>> 65c7cc88b64ce158f1636e9dda54997998095f1f
export default function MyPage({ groupedQuestions }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const handleMoveToQuizCreator = (question) => {
    setSelectedQuestion(null);
<<<<<<< HEAD

    // Tạo một biến tạm để lưu trữ giá trị của editingQuestion
    let updatedEditingQuestion;

    // Tìm câu hỏi trong quizQuestions dựa trên questionID
    const existingQuestion = quizQuestions.find(
      (q) => q.questionID === question.questionID
    );

    // Kiểm tra xem câu hỏi đã tồn tại trong quizQuestions hay chưa
    if (existingQuestion) {
      updatedEditingQuestion = existingQuestion;
    } else {
      // Cập nhật giá trị của editingQuestion thay vì sao chép từ question
=======
    let updatedEditingQuestion;
    const existingQuestion = quizQuestions.find(
      (q) => q.questionID === question.questionID
    );
    if (existingQuestion) {
      updatedEditingQuestion = existingQuestion;
    } else {
>>>>>>> 65c7cc88b64ce158f1636e9dda54997998095f1f
      updatedEditingQuestion = {
        questionID: question.questionID,
        content: question.content,
        answer: question.answer.map((item) => ({
          title: item.title,
          content: item.content,
        })),
<<<<<<< HEAD
      };

      // Thêm câu hỏi vào quizQuestions
=======
        correctAnswer: question.answer.find((item) => item.iscorrect),
        explanation: question.explanation,
      };

>>>>>>> 65c7cc88b64ce158f1636e9dda54997998095f1f
      setQuizQuestions((prevQuestions) => [
        ...prevQuestions,
        updatedEditingQuestion,
      ]);
    }
<<<<<<< HEAD

    // Cập nhật giá trị của editingQuestion
=======
>>>>>>> 65c7cc88b64ce158f1636e9dda54997998095f1f
    setEditingQuestion(updatedEditingQuestion);
  };

  const handleSaveEditQuestion = (question) => {
    // Cập nhật lại quizQuestions với giá trị đã chỉnh sửa
    setQuizQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.questionID === question.questionID ? editingQuestion : q
      )
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
        {Object.entries(groupedQuestions).map(
          ([subject, questions], subjectIndex) => (
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
                          <Box
                            key={index}
                            borderWidth="1px"
                            borderRadius="md"
                            p={2}
                          >
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
          )
        )}
      </Box>
      <Box flex={1} p={4}>
        <Box borderWidth="1px" borderRadius="md" p={4} mb={4}>
          <Heading as="h1" mb={2}>
            <b>Quiz Creator</b>
          </Heading>
<<<<<<< HEAD
          {quizQuestions.map((question, index) => (
=======
          {/* {quizQuestions.map((question, index) => (
>>>>>>> 65c7cc88b64ce158f1636e9dda54997998095f1f
            <Box
              key={question.questionID}
              borderWidth="1px"
              borderRadius="md"
              p={4}
              mb={4}
            >
              {editingQuestion &&
              editingQuestion.questionID === question.questionID ? (
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
<<<<<<< HEAD
  value={editingQuestion.answer[index].content}
  onChange={(e) => {
    const updatedAnswer = [...editingQuestion.answer];
    updatedAnswer[index].content = e.target.value;
    setEditingQuestion((prevQuestion) => ({
      ...prevQuestion,
      answer: updatedAnswer,
    }));
  }}
/>

                      </Box>
                    ))}
=======
                          value={editingQuestion.answer[index].content}
                          onChange={(e) => {
                            const updatedAnswer = [...editingQuestion.answer];
                            updatedAnswer[index].content = e.target.value;
                            setEditingQuestion((prevQuestion) => ({
                              ...prevQuestion,
                              answer: updatedAnswer,
                            }));
                          }}
                        />
                      </Box>
                    ))}
                  <Text>
                    Đáp án đúng: {editingQuestion?.correctAnswer?.title}
                  </Text>
>>>>>>> 65c7cc88b64ce158f1636e9dda54997998095f1f
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
<<<<<<< HEAD
=======
                  <Text>Đáp án đúng: {question?.correctAnswer?.title}</Text>
>>>>>>> 65c7cc88b64ce158f1636e9dda54997998095f1f
                  <Button onClick={() => handleEditQuestion(question)}>
                    Chỉnh sửa
                  </Button>
                </Box>
              )}
              <Button onClick={() => handleRemoveFromQuiz(question)}>
                Xóa khỏi Quiz
              </Button>
            </Box>
<<<<<<< HEAD
          ))}
        </Box>
      </Box>
    </Flex>
>>>>>>> 2405bec (update ngan hang cau hoi)
=======
          ))} */}
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
  value={editingQuestion.answer[index].content}
  onChange={(e) => {
    const updatedAnswer = [...editingQuestion.answer];
    updatedAnswer[index].content = e.target.value;
    setEditingQuestion((prevQuestion) => ({
      ...prevQuestion,
      answer: updatedAnswer,
    }));
  }}
/>
  
            </Box>
          ))}
        <Text>Đáp án đúng: {editingQuestion?.correctAnswer?.title}</Text>
        {editingQuestion?.explanation && (
          <Text>Giải thích: {editingQuestion.explanation.text}</Text>
        )}
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
        <Text>Đáp án đúng: {question?.correctAnswer?.title}</Text>
        {question?.explanation && (
          <Text>Giải thích: {question.explanation.text}</Text>
        )}
        <Button onClick={() => handleEditQuestion(question)}>
          Chỉnh sửa
        </Button>
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
>>>>>>> 65c7cc88b64ce158f1636e9dda54997998095f1f
  );
}
