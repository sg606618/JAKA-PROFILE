"use client";

import BackgroundCover from "@/components/BackgroundCover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Sponsored from "@/components/Sponsored";

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundCover />
      <Sponsored />
      <Products />
      <Footer />
    </>
  );
}
