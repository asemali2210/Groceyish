import Image from 'next/image'
import price from '@/public/assests/price.svg';
import refund from '@/public/assests/refund.svg';
import delivery from '@/public/assests/delivery.svg';


export default  function Features() {
  return (
    <div className='features__cards'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='feature__card d-flex  column-gap-4'>
                        <div className='__icon __left'>
                            <Image src={price} alt='price'/>
                        </div>
                        <div className='__right'>
                            <p className='h4'>Best Prices & Deals</p>
                            <p className='lead'>Don’t miss our daily amazing deals and prices</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='feature__card d-flex  column-gap-4'>
                        <div className='__icon __left'>
                            <Image src={refund} alt='price'/>
                        </div>
                        <div className='__right'>
                            <p className='h4'>Best Prices & Deals</p>
                            <p className='lead'>Don’t miss our daily amazing deals and prices</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='feature__card d-flex  column-gap-4'>
                        <div className='__icon __left'>
                            <Image src={delivery} alt='price'/>
                        </div>
                        <div className='__right'>
                            <p className='h4'>Best Prices & Deals</p>
                            <p className='lead'>Don’t miss our daily amazing deals and prices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};