import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TittleAndButtonLink: React.FC = () => {
     return (
          <section className="px-6 md:px-14 py-6 ">
      <div className="mx-auto max-w-screen-2xl space-y-10 lg:gap-6">
        <div className="w-full">
          <div className="flex space-x-5 md:space-x-10 items-center align-middle pb-4">
            <h2 className="text-lg font-bold text-green-700 mt-1 uppercase">{"Perekapan hafalan Al-Qur'an"}</h2>
            <div className="flex-grow">
              <hr className="bg-gradient-to-r from-green-500 to-green-800 h-2" />
            </div>
          </div>
          <div className="md:space-y-0 lg:space-y-6 gap-4 flex flex-col md:text-center text-sm md:text-base lg:block md:ml-32 lg:ml-28">
          <Link href="https://himmatulquranmalino.siata.org"><Button className="bg-gradient-to-r md:py-6 md:px-8  from-green-500 to-green-800 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800 uppercase text-white  hover:text-black transition-all font-semibold text-xs duration-300 ease-in-out">Kunjungi</Button></Link>
          </div>
        </div>
      </div>
    </section>
     )
}
export default TittleAndButtonLink;