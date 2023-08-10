import {ReactNode} from 'react'


 type Props = {
    children: ReactNode
 }
export const Container = ({children}: Props) =>{

    return(
        <div className='w-full flex flex-1 items-center justify-between max-w-[1246px] px-[15px] mx-auto'>
        {children}
        </div>
    )


}