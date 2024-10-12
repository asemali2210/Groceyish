import StrapiImage from "../custom/StrapiImage";

export default async function RowCategory({data}) {
    const {categories} = data;
  return (
    <div className='row__category'>
        <div className='container'>
            <div className='row__category__header d-flex'>
                <p className='h5'>Explore Categories</p>
                <div className="d-flex">{categories.map(category => (<span>{category.name}</span>))}</div>
            </div>
            <div className='row flex-nowrap overflow-x-scroll'>
                 {
                    categories.map(category => 
                        category.name == 'Fruits' && category.products.map(product=> (
                            <div className='col-md-2 col-lg-1'>
                                <StrapiImage src={product.images[0].url} alt="asd"  width={200} height={200} className="imgfluid"/>
                                {product.name}
                            </div>
                        ))
                    )
                 }
                
            </div>
        </div>
    </div>
  )
};