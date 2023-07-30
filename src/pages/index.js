import React from "react";
import HomeBanner from "@/components/home.component/banner";
import HomeIntro from "@/components/home.component/intro";
import HomeComment from "@/components/home.component/comments";
import { useSelector, useDispatch } from "react-redux";

export default function home() {
  return (
    <div className="bg-[#f6f7fb]">
      <HomeBanner />
      <HomeIntro />
      <HomeComment />
    </div>
  );
}
