import Image from "next/image";
import Block from "./Block";
const Header1 = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-24 px-5">
      <Image
        src={"/OYO_Rooms_(logo).png"}
        alt="OYO LOGO"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className="border-r-2 border-gray-300 h-full flex">
        <Block
          title={"Become a member"}
          para={"Additional 10% off on stays."}
        />
        <Block
          title={"OYO for businesss"}
          para={"Trusted by 5000+ coorporates."}
        />
        <Block
          title={"List your property"}
          para={"Start earning in 30 minutes."}
    
        />
        <Block title={"+357-17041704"} para={"Call us today to book a demo."} />
        <div className="flex items-center px-3 ">
          <Image
            src={"/next.svg"}
            width={200}
            height={200}
            alt="block svg"
            className="w-10 h-10 rounded-full mr-5"
          />
          <h3 className="font-bold">Login / SignUp</h3>
        </div>
      </div>
    </div>
  );    
};

export default Header1;
