import logo from '@/public/assests/logo.svg';
import Image from 'next/image';
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import Link from 'next/link';


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
    <footer className='footer__main'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='footer__col'>
                        <div className='img__logo'>
                            <Image src={logo} alt='Groceyish' className='img-fluid' />
                        </div>
                        <ul className='footer__items list-unstyled'>
                            {footerLinkWithIcon.map(footerLinkWithIconItem => (
                                <li className='footer__item d-flex align-items-center' key={footerLinkWithIconItem.id}>
                                    {getIcon(footerLinkWithIconItem.icon) }
                                
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
                                    <div>{footerCol.boxHeading}</div>
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
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
};