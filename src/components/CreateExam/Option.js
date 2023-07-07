// Option.js
import React from "react";

const Option = ({
  option,
  optionIndex,
  questionIndex,
  handleOptionChange,
  handleCorrectOptionChange,
  handleDeleteOption,
}) => {
  return (
    <div>
      <label>{String.fromCharCode(65 + optionIndex)}</label>
      <input
        type="text"
        value={option}
        onChange={(event) =>
          handleOptionChange(event, questionIndex, optionIndex)
        }
      />
      <button
        onClick={() => handleDeleteOption(questionIndex, optionIndex)}
        disabled={question.options.length === 1}
      >
        Delete Option
      </button>
      <label>
        Correct Answer
        <input
          type="checkbox"
          checked={question.selectedOption === optionIndex}
          onChange={() =>
            handleCorrectOptionChange(questionIndex, optionIndex)
          }
        />
      </label>
    </div>
  );
};

export default Option;
