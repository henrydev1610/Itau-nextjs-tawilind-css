import Image from "next/image";
import React from "react";
import { Container } from "./Container";

import AppleStoreButton from "../assets/btn-apple-store.svg";
import GooglePlay from "../assets/btn-google-play.svg";
import Arrow from "../assets/arrow-explorer.svg"
import WomamImage from "../assets/woman.png"
export const SectionHero = () => {
  return (
    <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover ">
      <div>
        <Container>
          <div className="flex-1 max-w-[500px]">
            <h1 className="text-white font-bold text-7xl mb-4">
              Tenha seu banco na palma da mão.
            </h1>
            <p className="text-white text-xl max-w-[408px] mb-8">
              Todas as operações que você precisa em um só lugar. Simples,
              completo e feito pra você.
            </p>
            <div className="flex gap-3 mb-[105px]">
              <button>
                <Image src={AppleStoreButton} alt="Aple store" />
              </button>
              <button>
                <Image src={GooglePlay} alt="google play" />
              </button>
            </div>
            <button className=" flex gap-2 items-center">
              <Image src={Arrow} alt="Arrow down"/>
              <span  className="text-white text-sm font-bold">Continue explorando</span>
            </button>
          </div>
          <div>
            <Image src={WomamImage} alt="woman image" className="mr-[41px]"/>
          </div>
        </Container>
      </div>
    </section>
  );
};
