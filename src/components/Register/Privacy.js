import { React, useState } from "react";
import { Checkbox } from "@chakra-ui/react";

const Privacity = () => {
  const [formData, setFormData] = useState({
    termsAccepted: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setTermsError(
        "PLEASE ACCEPT THE QUIZLET'S TERMS OF SERVICE AND PRIVACY POLICY TO CONTINUE."
      );
      return;
    }
    console.log(formData);
  };
  const [termsError, setTermsError] = useState("");
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  return (
    <div className="w-auto">
      <label className="inline-flex items-center">
        <Checkbox
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className="mr-2 leading-tight"
          required
        />
        <span className="text-base">
         Tôi chấp nhận 
          <a
            href="https://quizlet.com/tos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 ml-1 mr-1"
          >
            Điều khoản dịch vụ 
          </a>
          và 
          <a
            href="https://quizlet.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500  ml-1 mr-1"
          >
            Chính sách Quyền riêng tư
          </a>
          của Quizlets.
        </span>
      </label>
      {termsError && (
              <p className="text-red-500 text-xs italic">{termsError}</p>
            )}
    </div>
  );
};

export default Privacity;
