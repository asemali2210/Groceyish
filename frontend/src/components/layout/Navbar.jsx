'use client';
import Image from 'next/image'
import '@/styles/components/navbar.scss';
import logo from '@/public/assests/logo.svg';
import user from '@/public/assests/user.png';
import { CiCircleChevDown } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { TbCategory } from "react-icons/tb";
import Link from 'next/link';
import { LuHome } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { MdOutlineWhatshot } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { TbSpeakerphone } from "react-icons/tb";
import { CiPhone } from "react-icons/ci";
import { BsPercent } from "react-icons/bs";

export default function Navbar() {
    
    const currDir = usePathname();

    return (
        <nav className='navbar__main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='navbar__top'>
                            <div className='row'>
                                <div className='col-md-2 col-2'>
                                    <div className='img__logo'>
                                        <Image src={logo} alt='Groceyish' className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-md-5 d-flex'>
                                    <div className='navbar__dropdown__categories'>
                                        <div className=''>
                                            <button className='btn p-0 dropdown__btn'>All Categories <CiCircleChevDown /> </button>
                                            <div className='dropdown__items'>
                                                <ul className='list-unstyled m-0 dropdown__items__list'>
                                                    {/* map category form backedn */}
                                                    <li className='dropdown__item'>Peach</li>
                                                    <li className='dropdown__item'>Vegetables</li>
                                                </ul>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className='navbar__search'>
                                        <input type='search' />
                                    </div>
                                    <div className='navbar__search'>
                                        <HiOutlineSearch />
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='navbar__tools d-flex align-items-center column-gap-4'>
                                        <div className='navbar__tool __wishlist'>
                                            <IoHeartOutline />
                                            <span className='ms-1'>Wishlist</span>
                                            <span className='_num'>5</span>
                                        </div>
                                        <div className='navbar__tool __cart'>
                                            <TiShoppingCart />
                                            <span className='ms-1'>My cart</span>
                                            <span className='_num'>5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div className='navbar__user d-flex align-items-center column-gap-2'>
                                        <Image src={user} alt='Groceyish' className='img-fluid' />
                                        <span className='ms-1'>Asem Ali</span>
                                        <BsChevronDown /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='navbar__bottom'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className='__categories d-flex column-gap-2 align-items-center'>
                                        <TbCategory />
                                        Brows All Categories
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <ul className='navbar__list__items list-unstyled m-0 d-flex flex-md-row flex-column'>
                                        <li className={`navbar__item ${currDir == '/' ? `--active` : `navbar__item` }`}>
                                            <Link href='/' className='d-flex column-gap-2 align-items-center'>
                                                <LuHome />
                                                Home
                                            </Link>
                                        </li>
                                        <li className={`navbar__item ${currDir == '/' ? `--active` : `navbar__item` }`}>
                                            <Link href='/' className='d-flex column-gap-2 align-items-center'>
                                                <MdOutlineWhatshot />
                                                Hot deals
                                            </Link>
                                        </li>
                                        <li className={`navbar__item ${currDir == '/' ? `--active` : `navbar__item` }`}>
                                            <Link href='/' className='d-flex column-gap-2 align-items-center'>
                                                <AiOutlinePercentage />
                                                Promotions
                                            </Link>
                                        </li>
                                        <li className={`navbar__item ${currDir == '/' ? `--active` : `navbar__item` }`}>
                                            <Link href='/' className='d-flex column-gap-2 align-items-center'>
                                                <BsPercent />
                                                Promotions
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className='col-md-3'>
                                    <div className='d-flex column-gap-2'>
                                        <Link href='/' className='d-flex column-gap-2 align-items-center'>
                                            <TbSpeakerphone />
                                            1233-7777
                                        </Link>
                                        <div>
                                            24/7 support center
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};