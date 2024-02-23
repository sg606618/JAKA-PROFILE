import BackgroundCover from "@/components/BackgroundCover";
import Header from "@/components/Header";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      {/* <div className="container font-bold text-3xl text-red-500 bg-transparent w-[100vw] h-[100vh] flex justify-center items-center">
        Under Construction
      </div> */}
      <BackgroundCover />
      <Products />
    </>
  );
}
