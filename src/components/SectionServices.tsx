import Image from "next/image";
import { Container } from "./Container";
import phoneIcon from '../assets/icon-phone.svg'
import solutoinsIcon from '../assets/icon-solutions.svg'
import profileIcon from '../assets/icon-options.svg'
import cardIcon from '../assets/icon-card.svg'

import imagePhone from '../assets/phone.png'


export const SectionServices = () => {
  return (
    <section id="services" className="  relative w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32 "> 
            <span className=" block text-primary-orange text-sm uppercase mb-9">Serviços exclusivos</span>
            <h1 className="text-primary-gray font-bold text-[56px] leading-tight mb-6" >Gerencie suas finanças sem sair de casa</h1>
            <p className="text-lg max-w-[554px] mb-16 text-second-gray"> Veja como você pode cuidar das suas finanças pelo app itaú de forma segura, rápida, e o melhor, sem sair de sua casa</p>
            <ul className="flex flex-col gap-9">


                <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">


                    <div >
                    <Image src={phoneIcon} alt="phoneIcon"/>
                    
                    </div>
                    <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferencias e pagamentos de onde estiver</p>



                    
                </li>
                <li className="flex items-center gap-9 pb-9 border-b-[1px]  border-opacity-gray">


                    <div >
                    <Image src={solutoinsIcon} alt="solutionsIcon"/>
                    
                    </div>
                    <p className="flex-1 text-txt-gray pr-2">Soluções de emprestimos e renegociações para reorganizar suas finanças</p>



                    
                </li>
                <li className="flex items-center gap-9 pb-9 border-b-[1px]  border-opacity-gray">


                    <div >
                    <Image src={profileIcon} alt="profileIcon"/>
                    
                    </div>
                    <p className="flex-1 text-txt-gray pr-2">Diversas opções de investimento de acordo com seu perfil de investidor</p>



                    
                </li>
                <li className="flex items-center gap-9 ">


                    <div >
                    <Image src={cardIcon} alt="cardIcon"/>
                    
                    </div>
                    <p className="flex-1 text-txt-gray pr-2">Acompanhe a fatura do seu cartão de credito e faça compras online com seu cartão virtual</p>



                    
                </li>
            </ul>






        </div>


      </Container>
        <div className="absolute top-0 right-0 w-[32%] h-full flex items-center bg-gray-phone">
                <Image src={imagePhone} alt="imagPhone" className="translate-x-[-50%]"/>
        </div>


    </section>
  );
};
