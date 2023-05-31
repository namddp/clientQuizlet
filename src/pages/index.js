export default function Home() {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <h1>Hello Exam Client: {apiUrl}</h1>
    </>
  );
}
