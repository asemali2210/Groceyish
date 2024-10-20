import { TbSend } from "react-icons/tb";
import StrapiImage from '../custom/StrapiImage';
import bg from '@/public/assests/hero-bg.png'
import { getStrapiUrl } from "@/util/util";

export default async function HomeHeader({data}) {
  return (
    <div className='page__header' style={{backgroundImage: `url(${getStrapiUrl(data.image.url)}),url(${bg.src})`,}}>
        <div className='container'>
            <div className='row align-items-md-center'>
                <div className='col-5'>
                    <div className='page__header__left'>
                        <div className='page__header__content'>
                            <p className="c_bk h1 fw-bold">{data.heading} </p>
                            <p className='my-4'>{data.subHeading}</p>
                            <div className='newsletter'>
                                <TbSend />
                                <input type='email' className='header__input' placeholder='Enter your email address'/>
                                <button className='btn m-0' type='submit'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-7 p-0 d-flex justify-content-end'>
                    
        
                </div>
            </div>
        </div>
    </div>
  )
};