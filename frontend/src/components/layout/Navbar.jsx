'use client';
import Image from 'next/image'
import user from '@/public/assests/user.png';
import { IoHeartOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { BsChevronDown } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
import Link from 'next/link';
import { LuHome } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { MdOutlineWhatshot } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { TbSpeakerphone } from "react-icons/tb";
import { BsPercent } from "react-icons/bs";
import { CiCircleChevDown } from 'react-icons/ci';
import LogoImage from '../ui/LogoImage';
import SearchField from '../custom/SearchField';
import StrapiImage from '../custom/StrapiImage';

export default  function Navbar({data}) {
    const currDir = usePathname(); 

    let totalAmount;
    console.log(data.categories[0], 'asdasdasasss')
    return (
        <nav className='navbar__main py-3 px-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='navbar__top'>
                            <div className='row align-items-center'>
                                <div className='col-md-2 col-2'>
                                    <div className='img__logo'>
                                      <LogoImage />
                                    </div>
                                </div>
                                <div className='col-md-5 d-flex'>
                                    <SearchField categories={data.categories}/>
                                </div>
                                <div className='col-md-3'>
                                    <div className='navbar__tools d-flex align-items-center column-gap-4'>
                                        <div className='navbar__tool __wishlist'>
                                            <div className='icon__box'>
                                                <IoHeartOutline  className='_icon'/>
                                                <span className='_num'>5</span>
                                            </div>
                                            <div>
                                                <span className='ms-1'>Wishlist</span>
                                            </div>
                                        </div>
                                        <div className='navbar__tool __cart'>
                                            <div className='icon__box'>
                                                <TiShoppingCart  className='_icon'/>
                                                <span className='_num'>5</span>
                                            </div>
                                            <div className='ms-2'>
                                                <span className='d-block'>My cart</span>
                                                <span className='__cat__total c_primary fw-bold d-block'>{totalAmount || '5$'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div className='navbar__user d-flex align-items-center column-gap-2'>
                                        <Image src={user} alt='Groceyish' className='img-fluid' />
                                        <span className='ms-1 navbar__username fw-bold'>Asem Ali</span>
                                        <BsChevronDown /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='navbar__bottom '>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className='__categories d-flex column-gap-2 align-items-center'>
                                        <div className="dropdown__btn bg_primary c_wh fw-bold p-2">
                                                <TbCategory />
                                                Brows All Categories
                                        </div>
                                        <div className="dropdown__items___container" aria-labelledby="dropdownMenuButton2">
                                                <ul className='dropdown__items list-unstyled'>
                                                    {
                                                        data.categories.map(category => (
                                                            <li 
                                                            className='dropdown__item fw-medium rounded ' 
                                                            key={category.id}>
                                                                <div>
                                                                    <StrapiImage 
                                                                        src={category.image.url}
                                                                        width={50}
                                                                        height={50}
                                                                        alt={category.name}
                                                                        className="img-fluid"
                                                                    />
                                                                </div>
                                                                {category.name}
                                                            </li>

                                                        ))
                                                    }
                                                </ul>
                                        </div>
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