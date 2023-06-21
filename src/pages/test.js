import React, { useState,useCallback } from 'react';

const QuizCreator = () => {
  const [questions, setQuestions] = useState([]);

  const handleQuestionChange = (event, questionIndex) => {
    const { name, value } = event.target;
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        [name]: value
      };
      return updatedQuestions;
    });
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        options: updatedQuestions[questionIndex].options.map((option, idx) => {
          if (idx === optionIndex) {
            return value;
          }
          return option;
        })
      };
      return updatedQuestions;
    });
  };

  const handleAddQuestion = () => {
    setQuestions(prevQuestions => [
      ...prevQuestions,
      {
        question: '',
        options: ['', '', '', ''],
        selectedOption: null
      }
    ]);
  };

  const handleDeleteQuestion = (questionIndex) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(questionIndex, 1);
      return updatedQuestions;
    });
  };

  const handleDeleteOption = (questionIndex, optionIndex) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      const question = JSON.parse(JSON.stringify(updatedQuestions[questionIndex]));
      question.options.splice(optionIndex, 1);
      updatedQuestions[questionIndex] = question;
      return updatedQuestions;
    });
  };

  const handleAddOption = useCallback((questionIndex) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      const question = { ...updatedQuestions[questionIndex] };
      question.options = [...question.options, '']; // Thêm một tùy chọn rỗng mới
      updatedQuestions[questionIndex] = question;
      return updatedQuestions;
    });
  }, []);
  

  const handleFinishQuiz = () => {
    // Lưu các câu hỏi vào cơ sở dữ liệu hoặc nguồn dữ liệu khác
    console.log(questions);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Quiz Creator</h2>

      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4">
          <h3 className="text-lg font-bold">Question {questionIndex + 1}</h3>
          <button
            className="py-1 px-2 bg-red-500 text-white rounded"
            onClick={() => handleDeleteQuestion(questionIndex)}
          >
            Delete
          </button>
          <label className="block mt-2">
            Question:
            <input
              className="border border-gray-300 rounded px-2 py-1 mt-1"
              type="text"
              name="question"
              value={question.question}
              onChange={(event) => handleQuestionChange(event, questionIndex)}
            />
          </label>
          <br />
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center mt-2">
              <label className="mr-2">
                Option {String.fromCharCode(65 + optionIndex)}:
                <input
                  className="border border-gray-300 rounded px-2 py-1"
                  type="text"
                  value={option}
                  onChange={(event) => handleOptionChange(event, questionIndex, optionIndex)}
                />
              </label>
              <button
                className="py-1 px-2 bg-red-500 text-white rounded"
                onClick={() => handleDeleteOption(questionIndex, optionIndex)}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            className="py-1 px-2 bg-green-500 text-white rounded mt-2"
            onClick={() => handleAddOption(questionIndex)}
          >
            Add Option
          </button>
        </div>
      ))}

      <button
        className="py-2 px-4 bg-green-500 text-white rounded mt-4"
        onClick={handleAddQuestion}
      >
        Add
      </button>

      {questions.length > 0 && (
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded mt-4"
          onClick={handleFinishQuiz}
        >
          Finish
        </button>
      )}
    </div>
  );
};

export default QuizCreator;
