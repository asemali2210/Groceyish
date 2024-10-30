import React from 'react'
import StrapiImage from './StrapiImage'
import '@/styles/components/product-column.scss'
import StarRating from './StarRating'
function ProductsColumn({columnHeading, products= []}) {
  return (
    <div className='product__column'>
        <p className='cloumn__heading'>{columnHeading}</p>
        <ul className='list-unstyled m-0'>
            {
                products.map(product => (
                    <li className='product__item d-flex  my-4 column-gap-3' key={product.id}>
                        <div className='product__img d-flex align-items-center justify-content-center p-3'>
                            <StrapiImage src={product.images[0].url} width={100} height={100} className="img-fluid" alt={product.name} />
                        </div>
                        <div className='d-flex gap-1 flex-column'>
                            <p className='_name'>{product.name}</p>
                            <div className='d-flex gap-2 align-items-center'>
                                <StarRating rating={product.rating}/>
                                <p className='m-0'>({product.rating})</p>
                            </div>
                            <p className='_price'>${product.price}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ProductsColumn