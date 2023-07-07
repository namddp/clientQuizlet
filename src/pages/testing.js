import { connectToDatabase } from "./connectToDatabase";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export async function getServerSideProps({ query }) {
  try {
    const client = await connectToDatabase();
    const collection = client.db("Exam-System").collection("questions");

    const questionId = query.questionId;

    // Lấy câu hỏi từ MongoDB theo ID
    const question = await collection.findOne({ questionID: questionId });

    return {
      props: {
        question: JSON.parse(JSON.stringify(question)),
      },
    };
  } catch (error) {
    console.error("Error retrieving question:", error);
    return {
      props: {
        question: null,
      },
    };
  }
}

export default function Quizz({ question }) {
  const router = useRouter();

  const handleGoBack = () => {
    // Trở lại trang MyPage
    router.back();
  };

  return (
    <Box p={4}>
      {question ? (
        <>
          <Heading as="h1" mb={2}>
            <b>{question.subject}</b>
          </Heading>
          <Text>{question.content}</Text>
          {question.answer && question.answer.length > 0 && (
            <Box mt={4}>
              {question.answer.map((item, index) => (
                <Box key={index} borderWidth="1px" borderRadius="md" p={2}>
                  <Text>{item.title}. {item.content}</Text>
                </Box>
              ))}
            </Box>
          )}
          <button onClick={handleGoBack}>Trở lại</button>
        </>
      ) : (
        <Text>Câu hỏi không tồn tại</Text>
      )}
    </Box>
  );
}
