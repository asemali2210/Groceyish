import Image from 'next/image';
import logo from '@/public/assests/logo.svg';


export default function LogoImage() {
  return (
    <>
        <Image src={logo} alt='Groceyish' className='img-fluid' />
    </>
  )
};