import Image from 'next/image'
import Link from 'next/link'
import appStore from '@/public/assests/app-store.png';
import gpStore from '@/public/assests/gpStore.png';
import appWid from '@/public/assests/app-wid.png';

export default function DownLoadApp() {
  return (
    <div className='download__app'>
        <div className='container'>
            <div className='row align-items-md-center'>
                <div className='col-5'>
                    <div className='download__app__left'>
                        <div className='download__app__content'>
                            <p>Shop Faster With <br /> Groceyish App</p>
                            <p className='my-4'>Available on both IOS & Android</p>
                            <div className='d-flex'>
                                <Link href='/'>
                                    <Image src={appStore} className='img-fluid' alt="app-store"/>
                                </Link>
                                <Link href='/'>
                                    <Image src={gpStore} className='img-fluid' alt="gpStore"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='download__app__img'>
                    <Image src={appWid} className='img-fluid' alt="appWid" quality={100}/>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};