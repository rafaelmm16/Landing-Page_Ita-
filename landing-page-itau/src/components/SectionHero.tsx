import Image from "next/image";

import { Container } from "./Container";
import ImgAppleStore from '../assets/btn-apple-store.svg'
import ImgGooglePlay from '../assets/btn-google-play.svg'
import ArrowDown from '../assets/arrow-explorer.svg'
import woman from '../assets/woman.png'


export function SectionHero(){
    return(
        <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex1 max-w-[500px]">
                    <h1 className="text-white text-7xl font-bold mb-4">Tenha seu banco na palma da mão</h1>
                    <p className="text-white text-xl max-w-[408] mb-8">Todas as operações que você cria em um só lugar, Simples, completo e feito pra você.</p>
                    <div className="flex gap-4 mb-24">
                        <button>
                            <Image 
                                src={ImgAppleStore}
                                alt="Imagem icone Apple Store"
                            />
                        </button>
                        <button>
                            <Image 
                                src={ImgGooglePlay}
                                alt="Imagem icone Google Play"
                            />
                        </button>
                    </div>
                    <button className="flex items-center gap-3">
                        <Image 
                            src={ArrowDown}
                            alt="Imagem de seta para baixo"
                        />
                        <span className="text-white text-sm font-bold">Continue explorando</span>
                    </button>
                </div>

                <Image 
                    src={woman}
                    alt="Imagem mulher com celular nas mãos sorrindo"
                    className="mr-[-41px]" 
                />
            </Container>
        </section>
    )
}