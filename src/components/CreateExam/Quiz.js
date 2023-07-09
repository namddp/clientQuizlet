// Quiz.js
import React from "react";
import Question from "./Quetions";

const Quiz = ({ questions, handleAddQuestion, handleFinishQuiz }) => {
  return (
    <div>
      {questions.map((question, questionIndex) => (
        <Question
          key={questionIndex}
          question={question}
          questionIndex={questionIndex}
        />
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
      {questions.length > 0 && (
        <button onClick={handleFinishQuiz}>Preview</button>
      )}
    </div>
  );
};

export default Quiz;
