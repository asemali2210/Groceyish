import logo from '@/public/assests/logo.svg';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className='footer__main'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='footer__col'>
                        <div className='img__logo'>
                            <Image src={logo} alt='Groceyish' className='img-fluid' />
                        </div>
                        <ul className='footer__items list-unstyled list-unstyled'>
                            <li className='footer__item d-flex align-items-center'>
                                <CiLocationOn />
                                <p>Address: 1762 School House Road</p>
                            </li>
                            <li className='footer__item d-flex align-items-center'>
                                <CiPhone />
                                <p>Call Us: 1233-777</p>
                            </li>
                            <li className='footer__item d-flex align-items-center'>
                                <MdOutlineMail />
                                <p>Email: groceyish@contact.com</p>

                            </li>
                            <li className='footer__item d-flex align-items-center'>
                                <CiClock2 />
                                <p>Work hours: 1233-777</p>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <ul className='footer__items list-unstyled'>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Wishlist 
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Cart 
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Track Order 
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Shipping Details
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <ul className='footer__items list-unstyled'>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        About Us 
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Conact 
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Hot deals 
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Promotions
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        New products
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <ul className='footer__items list-unstyled'>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Payments
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Refund 
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Checkout
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Shipping
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Q&A
                                    </Link>
                                </li>
                                <li className='footer__item'>
                                    <Link href='/'>
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
};