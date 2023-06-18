import React from "react";
import HomeBanner from "@/components/home.component/home.bannercomponent";
import HomeIntro from "@/components/home.component/home.introcomponent";
import HomeComment from "@/components/home.component/home.commentcomponent";

export default function home() {
  return (
    <div className="bg-[#f6f7fb]">
      <HomeBanner />
      <HomeIntro />
      <HomeComment />
    </div>
  );
}
