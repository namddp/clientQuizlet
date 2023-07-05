import React from "react";
import SelectButtonLearning from "./SelectButtonLearning";
import FormLearning from "./FormLearning";

export default function TermsLearning() {
  const [isSelected, setSelected] = React.useState(false);

  const handleSelect = () => {
    setSelected(!isSelected);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-[27px]">
        <div>
          <h1 className="text-[22px] font-semibold text-[#ff983a] mb-[10px]">
            Đang học
          </h1>
          <div>
            <span>Bạn đã bắt đầu học những thuật ngữ này. Tiếp tục phát huy nhé!</span>
          </div>
        </div>
        <div>
          <SelectButtonLearning isSelected={isSelected} handleSelect={handleSelect} />
        </div>
      </div>
      <div>
        <FormLearning isSelected={isSelected} />
      </div>
    </div>
  );
}
