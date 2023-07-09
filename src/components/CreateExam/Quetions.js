// Question.js
import React from "react";
import Option from "./Option";

const Question = ({
  question,
  questionIndex,
  handleQuestionChange,
  handleDeleteQuestion,
  handleImageUpload,
  handleAddOption,
  handleDeleteOption,
  handleCorrectOptionChange,
}) => {
  return (
    <div>
      <h3>Question {questionIndex + 1}</h3>
      <button onClick={() => handleDeleteQuestion(questionIndex)}>
        Delete Question
      </button>
      <input
        type="file"
        onChange={(event) => handleImageUpload(event, questionIndex)}
      />
      <input
        type="text"
        value={question.question}
        onChange={(event) =>
          handleQuestionChange(event, questionIndex, "question")
        }
      />
      {question.options.map((option, optionIndex) => (
        <Option
          key={optionIndex}
          option={option}
          optionIndex={optionIndex}
          questionIndex={questionIndex}
          handleOptionChange={handleOptionChange}
          handleCorrectOptionChange={handleCorrectOptionChange}
          handleDeleteOption={handleDeleteOption}
        />
      ))}
      <button onClick={() => handleAddOption(questionIndex)}>
        Add Option
      </button>
    </div>
  );
};

export default Question;
