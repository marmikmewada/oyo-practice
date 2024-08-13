"use client"
import Image from "next/image"

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
         <div className="flex items-center">
            <Image
                src={"/fire.jpg"}
                alt="fire image"
                width={200}
                height={200}
                className="w-32 h-32 rounded-full mr-5"
            />
            <div className="text-xl">
                <p className="font-bold">Get access to our exculise deals</p>
                <p className="">Only the best deals reach your inbox</p>
            </div>
         </div>
         <div className="flex">
            <input type="email" className="px-6 py-3 outline-none border border-gray-300 w-80 h-16 rounded-lg mr-5 " placeholder="eg.john@gmail.com" />
            <button type="submit" className="w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer ">Notify</button>
         </div>
    </div>
  )
}

export default Header4