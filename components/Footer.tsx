import Image from "next/image";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-0.5 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="Decorative footer grid"
          width={100}
          height={100}
          className="w-full h-full opacity-70"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[60vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.{" "}
        </p>
        <a href="mailto: dhananjaybhatia@yahoo.co.in">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 justify-between items-center md:flex-row flex-col gap-4 md:gap-8">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          Copyright © 2025 Dhananjay
        </p>

        <div className="flex items-center gap-4 md:gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-b-200 rounded-lg border border-gray-800 transition duration-200 hover:scale-105 hover:border-purple"
            >
              <Image
                src={profile.img}
                alt={`social-icon-${profile.id}`}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
