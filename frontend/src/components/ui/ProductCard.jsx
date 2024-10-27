import StrapiImage from "../custom/StrapiImage";
import { BsFillCartPlusFill } from "react-icons/bs";
export default function ProductCard({product}) {
  const { url } = product.images[0];
  return (
    <div className='product__card my-1 d-flex flex-column h-100'>
        <div className='product__image d-flex align-items-center justify-content-center position-relative'>
           <StrapiImage 
            src={url}
            alt={product.name}
            quality={80}
            width={100}
            height="300"
            className="img-fluid" 
            />
        </div>
        <div className="d-flex">
          <p className="h6 product__category text-truncate m-0 rounded-1 p-2 py-1">{product.categories[0].name}</p>
        </div>
        <p className="product__name d-block text-truncate m-0">{product.name}</p>
        <div className="product__info text-truncate d-flex gap-1 align-items-center">
            <span className="m-0">For: </span>
            <p className="m-0 product__quntity p-0 ">{product.quantity}</p>
            <span className="m-0">Pay</span>
        </div>
        <div className="d-flex aling-items-center justify-content-between column-gap-2">
          <p className="h4 product__price">{product.price}$ </p> 
          <button className="cart__btn"><BsFillCartPlusFill /> Add </button>
        </div>
    </div>
  )
};