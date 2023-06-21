import React, { useState } from "react";
import { motion } from "framer-motion";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [focusedStar, setFocusedStar] = useState(0);

  const handleHover = (index) => {
    setRating(index);
  };

  const handleFocus = (index) => {
    setFocusedStar(index);
  };

  const handleLeave = () => {
    setRating(focusedStar);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1 }}
          style={{
            display: "inline-block",
            marginRight: "20px",
            color: index <= rating ? "#FFD700" : "#ccc",
            cursor: "pointer",
            fontSize: "25px",
            focus: focusedStar === index,
          }}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
          onFocus={() => handleFocus(index)}
          onBlur={() => setFocusedStar(0)}
          tabIndex={0}
        >
          ★
        </motion.div>
      ))}
    </div>
  );
};

export default StarRating;
