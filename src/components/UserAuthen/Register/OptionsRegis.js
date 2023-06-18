import React from "react";
import GoogleLoginButton from "@/components/UserAuthen/auth/GoogleLoginButton";
const OptionsRegis = () => {
  return (
    <div>
      <div>
        <GoogleLoginButton />
      </div>
      <div className="relative w-full ml-[10vh] mt-8 mb-8">
        <hr className="w-full" />
        <p className="absolute right-[40%] bottom-[0] bg-white text-[#939bb4] text-sm">
          HOẶC EMAIL
        </p>
      </div>
    </div>
  );
};

export default OptionsRegis;
