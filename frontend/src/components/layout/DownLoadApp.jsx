import Link from 'next/link'
import bg from '@/public/assests/hero-bg.png'
import StrapiImage from '../custom/StrapiImage';

export default function  DownLoadApp({data}) {
   
  return (
    <div className='download__app py-5 my-5' style={{backgroundImage: `url(${bg.src})`}}>
        <div className='container'>
            <div className='row align-items-md-center'>
                <div className='col-5'>
                    <div className='download__app__left'>
                        <div className='download__app__content  d-flex flex-column justify-content-center align-content-center row-gap-5'>
                            <p className='heading'>{data.heading}</p>
                            <p className='my-4 sub_heading'>{data.subHeading}</p>
                            <div className='d-flex align-items-center'>
                                <Link href='/'>
                                    <StrapiImage src={data.googleplay.url} width={200} height={200}  className='img-fluid' alt="app-store"/>
                                </Link>
                                <Link href='/'>
                                    <StrapiImage src={data.appStore.url} width={180} height={200}  className='img-fluid' alt="gpStore"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='download__app__img d-flex justify-content-center'>
                        <StrapiImage src={data.perview.url} className='img-fluid' width={500}  height={200} alt="appWid" quality={100}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};