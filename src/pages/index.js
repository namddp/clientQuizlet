export default function Home() {
  const apiUrl = process.env.BASE_URL;
  return (
    <>
      <h1>Hello Exam Client: {apiUrl}</h1>
    </>
  );
}
