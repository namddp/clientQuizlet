import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Trangchu from "./trangchu";

export default function home() {
  return (
    <div className="bg-[#f6f7fb]">
      <Header />
      <Trangchu />
      <Footer />
    </div>
  );
}
