import React from 'react'
import StrapiImage from './StrapiImage'
import '@/styles/components/product-column.scss'
function ProductsColumn({columnHeading, products= []}) {
  return (
    <div className='product__column'>
        <p className='cloumn__heading'>{columnHeading}</p>
        <ul className='list-unstyled m-0'>
            {
                products.map(product => (
                    <li className='product__item d-flex my-4 column-gap-3' key={product.id}>
                        <div className='product__img d-flex align-items-center justify-content-center p-3'>
                            <StrapiImage src={product.images[0].url} width={100} height={100} className="img-fluid" alt={product.name} />
                        </div>
                        <div>
                            <p className='_name'>{product.name}</p>
                            <p className='_rating'>{product.rating}/5</p>
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