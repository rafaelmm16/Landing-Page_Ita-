import Image from "next/image";

import { Container } from "./Container";
import Logo from '../assets/logo.svg';

export function Footer(){
    return(
        <footer className="w-full h-[300px] pt-[56px] bg-primary-blue">
            <Container>
                <div className="flex-1 flex items-start justify-between h-[190px]">
                    <Image 
                        src={Logo}
                        alt="Imagem de Logo Principal"
                        className="ml-36"
                    />
                    <div>
                        <ul className="text-white font-bold mr-36">
                            <li>Para você</li>
                            <li>Para empresas</li>
                            <li>Serviços</li>
                            <li>Ajuda</li>
                            <li>Trabalhe conosco</li>
                        </ul>
                    </div>
                </div>
            </Container>
            <div className="flex-1 text-center w-full">
                <p className="text-white">Desenvolvido por  <a href="https://www.linkedin.com/in/gstavohnz/" className="font-bold hover:text-gray-phone">Gustavo Henz</a></p>
            </div>
        </footer>
    )
}