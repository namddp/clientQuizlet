import { connectToDatabase } from "./connectToDatabase";

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
  );
}
