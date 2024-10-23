import logo from '@/public/assests/logo.svg';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

function getIcon(iconName){
    switch(iconName) {
        case "CiLocationOn": 
            return <CiLocationOn />;
        case "CiPhone": 
            return <CiPhone />;
        case "MdOutlineMail": 
            return <MdOutlineMail />;
        case "CiClock2": 
            return <CiClock2 />;
        default:
        return null
    }
}

export default function Footer({data}) {

    if (!data) return null; 

    const { footerLinkWithIcon, footerColumn } = data || {};

    if (!data.footerLinkWithIcon || !data.footerColumn) {
        return <div>No footer data available</div>;  // Fallback content
    }

  return (
    <footer className='footer__main pt-5 pb-2'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='footer__col'>
                        <div className='img__logo'>
                            <Image src={logo} alt='Groceyish' className='img-fluid' />
                        </div>
                        <ul className='footer__items list-unstyled'>
                            {footerLinkWithIcon.map(footerLinkWithIconItem => (
                                <li className='footer__item __icons d-flex align-items-center' key={footerLinkWithIconItem.id}>
                                    <span className='_icon'>
                                        {getIcon(footerLinkWithIconItem.icon) }
                                    </span>
                                    <Link  href={`${footerLinkWithIconItem.url}`}>
                                        {footerLinkWithIconItem.text}
                                    </Link>
                                </li>

                            )) }
                        </ul>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        {
                            footerColumn.map(footerCol => (
                                <div className='col-md-4' key={footerCol.boxHeading}>
                                    <div className='footer__col'>
                                        <div className='col__heading'>{footerCol.boxHeading}</div>
                                        <ul className='footer__items list-unstyled'>
                                            {
                                                footerCol.boxItem.map(boxLink => (
                                                    <li className='footer__item' key={boxLink.id}>
                                                    <Link href={boxLink.url}>
                                                        {boxLink.text} 
                                                    </Link>
                                                </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='footer__bottom '>
                <div className="d-flex justify-content-center align-items-center my-2 ">
                    Developed by: 
                    <Link href='https://github.com/asemali2210' className="c-main m-3"> <BsGithub /> asemali </Link>
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
};