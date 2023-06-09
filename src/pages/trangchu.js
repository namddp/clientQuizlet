import React from "react";
import HomeBanner from "@/components/home.component/home.bannercomponent";
import HomeIntro from "@/components/home.component/home.introcomponent";
import HomeComment from "@/components/home.component/home.commentcomponent";

export default function trangchu() {
  return (
    <div>
      <HomeBanner />
      <HomeIntro />
      <HomeComment />
    </div>
  );
}
