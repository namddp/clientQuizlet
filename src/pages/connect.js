// import { connectToDatabase } from "./connectToDatabase";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Input,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ReviewPage from "./review";
import { useRouter } from "next/router";
import { encode } from "base-64"; // Import the base64 library

export async function getServerSideProps() {
  try {
    const questions = (await import("@/mocks/Exam-System.questions.json"))
      .default;

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
  const [selectedSubjects, setSelectedSubjects] = useState({});
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedQuestionToDelete, setSelectedQuestionToDelete] =
    useState(null);
  const [isCreatingQuestion, setIsCreatingQuestion] = useState(false);
  const [questionContent, setQuestionContent] = useState("");
  const [answerContentA, setAnswerContentA] = useState("");
  const [answerContentB, setAnswerContentB] = useState("");
  const [answerContentC, setAnswerContentC] = useState("");
  const [answerContentD, setAnswerContentD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [createdQuestions, setCreatedQuestions] = useState([]);
  const [explanation, setExplanation] = useState("");
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);

  const handleCreateQuestion = () => {
    const question = {
      content: questionContent,
      answers: [
        { title: "A", content: answerContentA },
        { title: "B", content: answerContentB },
        { title: "C", content: answerContentC },
        { title: "D", content: answerContentD },
      ],
      correctAnswer: correctAnswer,
      explanation,
    };

    setCreatedQuestions((prevQuestions) => [...prevQuestions, question]);

    // Save the updated createdQuestions to localStorage
    localStorage.setItem(
      "createdQuestions",
      JSON.stringify([...createdQuestions, question])
    );

    setIsCreatingQuestion(false);
    setQuestionContent("");
    setAnswerContentA("");
    setAnswerContentB("");
    setAnswerContentC("");
    setAnswerContentD("");
    setCorrectAnswer("");
  };

  useEffect(() => {
    // Retrieve createdQuestions from localStorage and initialize state
    const storedQuestions = localStorage.getItem("createdQuestions");
    if (storedQuestions) {
      setCreatedQuestions(JSON.parse(storedQuestions));
    }
  }, []);

  const handleEditQuestion = (questionIndex) => {
    const question = createdQuestions[questionIndex];
    setQuestionContent(question.content);
    setAnswerContentA(question.answers[0].content);
    setAnswerContentB(question.answers[1].content);
    setAnswerContentC(question.answers[2].content);
    setAnswerContentD(question.answers[3].content);
    setCorrectAnswer(question.correctAnswer);

    // Xóa câu hỏi đã chỉnh sửa khỏi danh sách
    setCreatedQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(questionIndex, 1);
      return updatedQuestions;
    });

    setIsCreatingQuestion(true);
  };

  const handleCancelCreation = () => {
    setIsCreatingQuestion(false);
    setQuestionContent("");
    setAnswerContentA("");
    setAnswerContentB("");
    setAnswerContentC("");
    setAnswerContentD("");
    setCorrectAnswer("");
  };

  const handleMoveToQuizCreator = (question) => {
    setSelectedQuestion(null);
    let updatedEditingQuestion;
    const existingQuestion = quizQuestions.find(
      (q) => q.questionID === question.questionID
    );
    if (existingQuestion) {
      updatedEditingQuestion = existingQuestion;
    } else {
      updatedEditingQuestion = {
        questionID: question.questionID,
        content: question.content,
        answer: question.answer
          ? question.answer.map((item) => ({
              title: item.title,
              content: item.content,
            }))
          : [],
        correctAnswer: question.answer
          ? question.answer.find((item) => item.iscorrect)
          : null,
        explanation: question.explanation,
      };

      setQuizQuestions((prevQuestions) => [
        ...prevQuestions,
        updatedEditingQuestion,
      ]);

      // Save the updated quizQuestions to localStorage
      localStorage.setItem(
        "quizQuestions",
        JSON.stringify([...quizQuestions, updatedEditingQuestion])
      );
    }
    setEditingQuestion(updatedEditingQuestion);
  };

  useEffect(() => {
    // Retrieve quizQuestions from localStorage and initialize state
    const storedQuizQuestions = localStorage.getItem("quizQuestions");
    if (storedQuizQuestions) {
      setQuizQuestions(JSON.parse(storedQuizQuestions));
    }
  }, []);

  const handleConfirmationDelete = () => {
    // Remove the question from quizQuestions state
    setQuizQuestions((prevQuestions) =>
      prevQuestions.filter(
        (q) => q.questionID !== selectedQuestionToDelete.questionID
      )
    );

    // Remove the question from currentQuizQuestions state
    setCurrentQuizQuestions((prevQuestions) =>
      prevQuestions.filter(
        (q) => q.questionID !== selectedQuestionToDelete.questionID
      )
    );

    // Remove the question from createdQuestions state if it was moved to the quiz section
    setCreatedQuestions((prevQuestions) =>
      prevQuestions.filter(
        (q) => q.questionID !== selectedQuestionToDelete.questionID
      )
    );

    // Update localStorage to reflect the changes for both quizQuestions, currentQuizQuestions, and createdQuestions
    localStorage.setItem(
      "quizQuestions",
      JSON.stringify(
        quizQuestions.filter(
          (q) => q.questionID !== selectedQuestionToDelete.questionID
        )
      )
    );

    localStorage.setItem(
      "currentQuizQuestions",
      JSON.stringify(
        currentQuizQuestions.filter(
          (q) => q.questionID !== selectedQuestionToDelete.questionID
        )
      )
    );

    localStorage.setItem(
      "createdQuestions",
      JSON.stringify(
        createdQuestions.filter(
          (q) => q.questionID !== selectedQuestionToDelete.questionID
        )
      )
    );

    setIsConfirmationOpen(false);
  };

  const handleDeleteQuestion = (questionIndex) => {
    // Remove the question from createdQuestions state
    setCreatedQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      const deletedQuestion = updatedQuestions.splice(questionIndex, 1)[0];

      // If the question was moved to the quiz section, remove it from currentQuizQuestions state
      if (
        currentQuizQuestions.some(
          (q) => q.questionID === deletedQuestion.questionID
        )
      ) {
        setCurrentQuizQuestions((prevQuestions) =>
          prevQuestions.filter(
            (q) => q.questionID !== deletedQuestion.questionID
          )
        );

        // Update localStorage to reflect the changes for currentQuizQuestions
        localStorage.setItem(
          "currentQuizQuestions",
          JSON.stringify(
            currentQuizQuestions.filter(
              (q) => q.questionID !== deletedQuestion.questionID
            )
          )
        );
      }

      // Save the updated createdQuestions to localStorage
      localStorage.setItem(
        "createdQuestions",
        JSON.stringify(updatedQuestions)
      );

      return updatedQuestions;
    });
  };

  useEffect(() => {
    // Retrieve quizQuestions from localStorage and initialize state
    const storedQuizQuestions = localStorage.getItem("quizQuestions");
    if (storedQuizQuestions) {
      setQuizQuestions(JSON.parse(storedQuizQuestions));
    }

    // Retrieve currentQuizQuestions from localStorage and initialize state
    const storedCurrentQuizQuestions = localStorage.getItem(
      "currentQuizQuestions"
    );
    if (storedCurrentQuizQuestions) {
      setCurrentQuizQuestions(JSON.parse(storedCurrentQuizQuestions));
    }
  }, []);

  useEffect(() => {
    // Retrieve quizQuestions from localStorage and initialize state
    const storedQuizQuestions = localStorage.getItem("quizQuestions");
    if (storedQuizQuestions) {
      setQuizQuestions(JSON.parse(storedQuizQuestions));
    }
  }, []);

  const handleSaveEditQuestion = (question) => {
    // Cập nhật lại quizQuestions với giá trị đã chỉnh sửa
    setQuizQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.questionID === question.questionID ? editingQuestion : q
      )
    );
    setEditingQuestion(null);
  };

  const handleEditQuestions = (question) => {
    setEditingQuestion(question);
  };

  const handleRemoveFromQuiz = (question) => {
    handleConfirmationOpen(question);
  };

  const handleConfirmationOpen = (question) => {
    setSelectedQuestionToDelete(question);
    setIsConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setSelectedQuestionToDelete(null);
    setIsConfirmationOpen(false);
  };

  const handleSubjectChange = (subject, event) => {
    setSelectedSubjects((prevSelectedSubjects) => ({
      ...prevSelectedSubjects,
      [subject]: prevSelectedSubjects[subject] ? false : true,
    }));
  };
  const router = useRouter();

  // Function to shorten the URL and encode the createdQuestions data


  // ...

  const handleReviewClick = () => {
    // Convert createdQuestions to JSON string and encode it
    const encodedData = encode(JSON.stringify(createdQuestions));
  
    // Use router.push with the query option to pass the encodedData
    router.push({
      pathname: '/review',
      query: { data: encodedData },
    });
  };
  return (
    <Flex>
      <Box flex={1} p={4}>
        {Object.entries(groupedQuestions).map(([subject, questions]) => (
          <Box key={subject} borderWidth="1px" borderRadius="md" p={4} mb={4}>
            <Heading as="h1" mb={2}>
              <b>{subject}</b>
            </Heading>
            <Button onClick={() => handleSubjectChange(subject)}>
              {selectedSubjects[subject] ? "Ẩn câu hỏi" : "Hiển thị câu hỏi"}
            </Button>
            {selectedSubjects[subject] && (
              <Box borderWidth="1px" borderRadius="md" p={4} mt={4}>
                {questions.map((question) => (
                  <Box
                    key={question.questionID}
                    borderWidth="1px"
                    borderRadius="md"
                    p={2}
                    mb={2}
                  >
                    <Text>{question.content}</Text>
                    {question.answer && question.answer.length > 0 && (
                      <Box mt={2}>
                        <Text fontWeight="bold">Câu trả lời:</Text>
                        <VStack align="start" spacing={2}>
                          {question.answer.map((answer, index) => (
                            <Box key={index}>
                              <Text>
                                {answer.title}. {answer.content}
                              </Text>
                            </Box>
                          ))}
                        </VStack>
                      </Box>
                    )}
                    {question.explanation && (
                      <Box mt={2}>
                        <Text fontWeight="bold">Giải thích:</Text>
                        <Text>{question.explanation.text}</Text>
                      </Box>
                    )}
                    <Button
                      mt={2}
                      onClick={() => handleMoveToQuizCreator(question)}
                    >
                      Chuyển sang Quiz Creator
                    </Button>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>

      <Box flex={1} p={4}>
        <Box borderWidth="1px" borderRadius="md" p={4} mb={4}>
          <Heading as="h1" mb={2}>
            <b>Quiz Creator</b>
          </Heading>
          {!isCreatingQuestion ? (
            <Button onClick={() => setIsCreatingQuestion(true)} mb={4}>
              Tạo câu hỏi và câu trả lời
            </Button>
          ) : (
            <Box>
              <FormControl id="question-content" isRequired>
                <FormLabel>Nội dung câu hỏi</FormLabel>
                <Textarea
                  value={questionContent}
                  onChange={(e) => setQuestionContent(e.target.value)}
                  size="md"
                />
              </FormControl>
              <FormControl id="answer-a" isRequired>
                <FormLabel>Câu trả lời A</FormLabel>
                <Input
                  value={answerContentA}
                  onChange={(e) => setAnswerContentA(e.target.value)}
                  size="md"
                />
              </FormControl>
              <FormControl id="answer-b" isRequired>
                <FormLabel>Câu trả lời B</FormLabel>
                <Input
                  value={answerContentB}
                  onChange={(e) => setAnswerContentB(e.target.value)}
                  size="md"
                />
              </FormControl>
              <FormControl id="answer-c" isRequired>
                <FormLabel>Câu trả lời C</FormLabel>
                <Input
                  value={answerContentC}
                  onChange={(e) => setAnswerContentC(e.target.value)}
                  size="md"
                />
              </FormControl>
              <FormControl id="answer-d" isRequired>
                <FormLabel>Câu trả lời D</FormLabel>
                <Input
                  value={answerContentD}
                  onChange={(e) => setAnswerContentD(e.target.value)}
                  size="md"
                />
              </FormControl>
              <FormControl id="correct-answer" isRequired>
                <FormLabel>Đáp án đúng</FormLabel>
                <Checkbox
                  isChecked={correctAnswer === "A"}
                  onChange={() => setCorrectAnswer("A")}
                >
                  A
                </Checkbox>
                <Checkbox
                  isChecked={correctAnswer === "B"}
                  onChange={() => setCorrectAnswer("B")}
                >
                  B
                </Checkbox>
                <Checkbox
                  isChecked={correctAnswer === "C"}
                  onChange={() => setCorrectAnswer("C")}
                >
                  C
                </Checkbox>
                <Checkbox
                  isChecked={correctAnswer === "D"}
                  onChange={() => setCorrectAnswer("D")}
                >
                  D
                </Checkbox>
              </FormControl>
              <Input
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Nhập giải thích câu hỏi"
              />

              <Button colorScheme="blue" onClick={handleCreateQuestion}>
                Tạo câu hỏi
              </Button>
              <Button variant="ghost" onClick={handleCancelCreation}>
                Hủy
              </Button>
            </Box>
          )}
          {createdQuestions.length > 0 && (
            <Box mt={4}>
              {createdQuestions.map((question, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  mb={4}
                >
                  <Text fontWeight="bold">{question.content}</Text>
                  <VStack align="start" spacing={2} mt={4}>
                    {question.answers.map((answer, answerIndex) => (
                      <Text key={answerIndex}>
                        {answer.title}. {answer.content}
                      </Text>
                    ))}
                  </VStack>
                  <Text>Câu trả lời đúng: {question.correctAnswer}</Text>
                  <Text>Giải thích: {question.explanation}</Text>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    onClick={() => handleEditQuestion(index)}
                  >
                    Chỉnh sửa
                  </Button>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleDeleteQuestion(index)}
                  >
                    Xóa
                  </Button>
                </Box>
              ))}
            </Box>
          )}
          {quizQuestions.map((question, index) => (
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
                  <Button onClick={() => handleEditQuestions(question)}>
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
        <Button colorScheme="green" mt={4} onClick={handleReviewClick}>
          Review Questions
        </Button>
      </Box>
      {isConfirmationOpen && (
        <AlertDialog
          isOpen={isConfirmationOpen}
          leastDestructiveRef={undefined}
          onClose={handleConfirmationClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Xác nhận
              </AlertDialogHeader>

              <AlertDialogBody>
                Bạn có chắc chắn muốn xóa khỏi Quiz?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button onClick={handleConfirmationClose}>Hủy</Button>
                <Button
                  colorScheme="red"
                  ml={3}
                  onClick={() => {
                    handleConfirmationDelete(); // Call the delete function here
                  }}
                >
                  Xóa
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </Flex>
  );
}
