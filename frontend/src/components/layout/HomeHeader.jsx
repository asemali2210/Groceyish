import { TbSend } from "react-icons/tb";
import StrapiImage from '../custom/StrapiImage';
import bg from '@/public/assests/hero-bg.png'

export default async function HomeHeader({data}) {
  return (
    <div className='page__header' style={{backgroundImage: `url(${bg.src})`,}}>
        
        <div className='container-fluid '>
            <div className='row align-items-md-center'>
                <div className="col-1"></div>
                <div className='col-md-5'>
                    <div className='page__header__left'>
                        <div className='page__header__content'>
                            <p className="heading h1 fw-bold">{data.heading} </p>
                            <p className='sub_heading my-4'>{data.subHeading}</p>
                            <div className='newsletter d-flex align-items-stretch'>
                                <div className="_icon">
                                    <TbSend /> 
                                </div>
                                <input type='email' className='header__input' placeholder='Enter your email address'/>
                                <button className='bg_primary m-0' type='submit'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 p-0 d-md-flex justify-content-end d-none'>
                   <div>
                    <StrapiImage src={data.image.url} alt="hero image" width={642} height={562} className="img-fluid" />
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
};