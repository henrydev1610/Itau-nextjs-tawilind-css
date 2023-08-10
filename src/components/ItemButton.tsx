
import Image from 'next/image'
import Arow from '../../src/assets/arrow-down.svg'
import { type } from 'os'


type props = {
    name: string
}



export const ItemButton = ({name}: props) => {
    return (
        <>
            <button className='flex items-center gap-2 outline-none text-white font-bold'>
                                <span>{name}</span>
                                <Image
                                    src={Arow}
                                    alt='arow'
                                />
                            </button>
        </>
    )
}