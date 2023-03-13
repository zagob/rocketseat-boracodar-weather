import { Lato } from "next/font/google";
import Image from "next/image";
import { MapPin } from "phosphor-react";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

import WatherImage from "../assets/weather.svg";
import VentoSVG from "../assets/vento.svg";
import UnitSVG from "../assets/unit.svg";
import RainSVG from "../assets/rain.svg";

export default function Home() {
  return (
    <div
      style={lato.style}
      className="grid grid-cols-2 gap-8 place-content-center h-screen border px-[138px] py-[144px]"
    >
      <div className="rounded-[10px] flex items-center justify-center h-[480px] relative bg-center bg-backgroundTemperature bg-no-repeat bg-cover">
        <Image
          src={WatherImage}
          alt="Wather"
          className="absolute -top-16 -left-14"
        />
        <div className="flex items-center gap-2 text-[#C2BFF4] absolute right-10 top-8">
          <MapPin size={20} weight="fill" />
          <span className="font-bold text-sm">Bauru, SP</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-start leading-none">
            <h4 className="text-[88px] text-white font-bold flex items-start">
              18
            </h4>
            <span className="text-2xl block text-[#DAD8F7]">°C</span>
          </div>
          <div className="flex items-start w-full gap-2 ml-10 text-xl">
            <span className="text-white">22°</span>
            <span className="text-[#DAD8F7]">16°</span>
          </div>
        </div>

        <div className="absolute bottom-0 grid grid-cols-3 gap-2 w-full px-3 pb-3">
          <div className="bg-[#6660C8]/60 flex items-center gap-2 px-4 py-3 rounded-md">
            <Image src={VentoSVG} alt="Vento" />
            <div className="flex flex-col leading-5">
              <span className="text-[#E7E6FB] text-xs">Vento</span>
              <div className="text-[#DAD8F7] font-bold flex items-center gap-1">
                <span className=" text-lg">17</span>
                <span className="text-base">km/h</span>
              </div>
            </div>
          </div>
          <div className="bg-[#6660C8]/60 flex items-center gap-2 px-4 py-3 rounded-md">
            <Image src={UnitSVG} alt="Unidade" />
            <div className="flex flex-col leading-5">
              <span className="text-[#E7E6FB]">Vento</span>
              <div className="text-[#DAD8F7] font-bold flex items-center gap-1">
                <span className=" text-lg">31</span>
                <span className="text-base">%</span>
              </div>
            </div>
          </div>
          <div className="bg-[#6660C8]/60 flex items-center gap-2 px-4 py-3 rounded-md">
            <Image src={RainSVG} alt="Vento" />
            <div className="flex flex-col leading-5">
              <span className="text-[#E7E6FB]">Vento</span>
              <div className="text-[#DAD8F7] font-bold flex items-center gap-1">
                <span className=" text-lg">10</span>
                <span className="text-base">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#6D67D0] rounded-[10px]"></div>
          <div className="bg-[#6D67D0] rounded-[10px]"></div>
        </div>
        <div className="bg-[#6D67D0] rounded-[10px]"></div>
      </div>
    </div>
  );
}
