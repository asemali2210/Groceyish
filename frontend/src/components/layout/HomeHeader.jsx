import Image from 'next/image'
import heroimg from '@/public/assests/Hreo-img.png';
import { TbSend } from "react-icons/tb";
export default function HomeHeader() {
  return (
    <div className='home__header'>
        <div className='container'>
            <div className='row align-items-md-center'>
                <div className='col-5'>
                    <div className='home__header__left'>
                        <div className='home__header__content'>
                            <p>Don’t miss our daily  <br /> amazing deals.</p>
                            <p className='my-4'>Save up to 60% off on your first order</p>
                            <div className='newsletter'>
                                <TbSend />
                                <input type='email' className='header__input' placeholder='Enter your email address'/>
                                <button className='btn m-0' type='submit'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <p>asdas</p>
                    <div className='home__header__img'>
                    <Image src={heroimg} className='img-fluid' alt="appWid" quality={100}/>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};