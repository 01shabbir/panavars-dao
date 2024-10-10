import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '@/components/shared/Wrapper'



const Header = () => {
  return (
    <Wrapper>
    
    <header className='flex justify-between  bg-white py-4  sticky top-0 items-center' >
      {/* <h2 className='text-2xl text-blue-700 font-semibold '>$$Solution</h2> */}
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <div>
        <ul className='flex space-x-4 font-semibold'>
           <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li><Link href={"/about"}>about</Link></li>
          <li><Link href={"/contact"}>contact</Link></li>
        </ul>
      </div>

    </header>
    </Wrapper>
  
  
  )
}

export default Header