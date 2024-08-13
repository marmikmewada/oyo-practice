import Head from "next/head";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Image from "next/image";
import Header4 from "@/components/Header4";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Marmik's OYO</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
      <div className="my-14">
        <Image
          src={"/banner1.avif"}
          alt="banner one"
          width={200}
          height={200}
          className="h-auto w-full"
        />
      </div>
      <div className="mb14">
      <Image
          src={"/banner2.avif"}
          alt="banner one"
          width={200}
          height={200}
          className="h-auto w-full"
        />
      </div>
      <Header4/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
