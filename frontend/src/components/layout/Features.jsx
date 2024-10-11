
import { IoReloadOutline } from 'react-icons/io5';
import { CiBadgeDollar } from 'react-icons/ci';
import { FaTruckArrowRight } from "react-icons/fa6";
function getIcon(name){
    switch(name){
        case "CiBadgeDollar":
            return <CiBadgeDollar />;
        case "IoReloadOutline":
            return <IoReloadOutline />;
        case "FaTruckArrowRight":
            return <FaTruckArrowRight />;
        default:
        return null
        
    }
}

export default  function Features({data}) {
    
  return (
    <div className='features__cards'>
        <div className='container'>
            <div className='row'>
                {
                    data.feature.map(feature=> (
                        <div className='col-md-4' key={feature.id}>
                            <div className='feature__card d-flex  column-gap-4'>
                                <div className='__icon __left fw-bold h1'>
                                    {getIcon(feature.icons)}
                                </div>
                                <div className='__right'>
                                    <p className='h4'>{feature.heading}</p>
                                    <p className='lead'>{feature.subHeading}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
};