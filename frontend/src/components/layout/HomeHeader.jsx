import { TbSend } from "react-icons/tb";
import StrapiImage from '../custom/StrapiImage';


export default async function HomeHeader({data}) {
  return (
    <div className='home__header'>
        <div className='container-fluid '>
            <div className='row align-items-md-center'>
                <div className='col-5'>
                    <div className='home__header__left'>
                        <div className='home__header__content'>
                            <p>{data.heading} </p>
                            <p className='my-4'>{data.subHeading}</p>
                            <div className='newsletter'>
                                <TbSend />
                                <input type='email' className='header__input' placeholder='Enter your email address'/>
                                <button className='btn m-0' type='submit'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-7 p-0'>
                    <div className='home__header__img d-flex'>
                        <StrapiImage src={data.image.url} width="400" height="400" className='img-fluid w-100'  alt={data.image.alternativeText} quality={100}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};