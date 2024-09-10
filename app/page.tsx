import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]">
      <div className="flex py-4 px-6 justify-between bg-black w-full  text-white">
        <div className="flex gap-2 items-center ">
          <CallIcon />
          <span className="text-xl">012-345-6789</span>
        </div>
        <div className="flex gap-4 ">
          <FacebookIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </div>

      <div className="flex w-full items-center justify-between bg-gray-100 px-10 py-6">
        <div className="text-3xl font-bold">CONTRAST</div>
        <div className="flex gap-6 text-xl">
          <ul>HOME</ul>
          <ul>SERVICES</ul>
          <ul>COMPANY</ul>
          <ul>CLIETS</ul>
          <ul>CONTACT</ul>
        </div>
      </div>

      <div className="flex w-full h-[55vh] bg-gray-600"></div>
      <div className="flex w-full h-[20vh] bg-black items-center justify-between p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col  text-white ">
            <div className="flex items-center gap-2 ">
              <h1 className="text-[18px]">
                The easiest and quicket way to start your
              </h1>
              <p className="text-white font-bold text-[24px]">Business</p>
            </div>
            <p className="text-white">Start now , Achieve Later</p>
          </div>
          <div className="flex">
            <button className="py-4 px-6 bg-white rounded-xl">
              GET STARTED
            </button>
            <button className="py-4 px-6 bg-white rounded-xl">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
