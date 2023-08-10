import Image from 'next/image'
import Logo from '../../src/assets/logo.svg'
import IconUser from '../../src/assets/icon-user.svg'
import { ItemButton } from './ItemButton'
import { Search } from './Search'


const Header = () => {
  return (
   <header >
        <div className='  relative flex items-center w-full h-20 bg-primary-orange'>
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>
            <div className='w-full flex flex-1 items-center justify-between max-w-[1246px] px-[15px] mx-auto'>
                <div className='flex items-center gap-14 '>
                    <Image
                            src={Logo}
                            alt='logo'
                    />
                    <ul className='flex items-center gap-12'>
                        <li >
                            <ItemButton name = 'Pra você'/>
                            
                        </li>
                        <li >
                            <ItemButton name = 'Para empresas'/>
                            
                        </li>
                        <li >
                            <ItemButton name = 'Serviços'/>
                            
                        </li>
                        <li >
                            <ItemButton name = 'Ajuda'/>
                            
                        </li>
                      
                    </ul>
                </div>
                <div>
                   <Search/> 
                </div>
                <button className='flex items-center gap-4 bg-primary-blue z-10 pl-20 h-20'>
                    <Image src={IconUser} alt='iconUser' />
                    <span className='text-white font-bold'>Entrar na conta</span>
                </button>
            </div>
        </div>
   </header>
  )
}

export default Header