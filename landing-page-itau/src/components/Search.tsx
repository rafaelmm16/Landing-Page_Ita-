import IconSearch from '../assets/icon-search.svg'
import Image from "next/image"

export function Search(){
    return(
        <div className='flex item-center gap-4'>
            <Image 
                src={IconSearch}
                alt="Imagem de Lupa para busca"
            />
            <input type="text" className='bg-transparent outline-none text-white placeholder:text-white pr-5' placeholder='Buscar'/>
        </div>
    )
}