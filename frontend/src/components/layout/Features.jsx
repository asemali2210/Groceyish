import StrapiImage from '../custom/StrapiImage';

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
                                    { <StrapiImage  src={feature.icon.url} alt={feature.icon.url} width={60} height={60} className="img-fluid"/>}
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