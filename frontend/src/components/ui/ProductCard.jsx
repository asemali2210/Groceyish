import StrapiImage from "../custom/StrapiImage";
import { BsFillCartPlusFill } from "react-icons/bs";
export default function ProductCard({product}) {
  const { url } = product.images[0];
  return (
    <div className='product__card  p-4  my-1 d-flex flex-column h-100'>
        <div className='product__image d-flex align-items-center justify-content-center position-relative'>
           <StrapiImage 
            src={url}
            alt={product.name}
             width={150} height={100}  className="img-fluid" quality={80}/>
        </div>
        <div className="d-flex">
          <p className="product__category m-0 rounded-1 p-2 py-1">{product.categories[0].name}</p>
        </div>
        <p className="h5 product__name m-0">{product.name}</p>
        <div className="product__info d-flex h4 gap-1 align-items-center">
            <span className="h5 m-0">For: </span>
            <p className="h5 m-0 product__quntity ">{product.quantity}</p>
            <span className="h5 m-0">Pay</span>
        </div>
        <div className="d-flex aling-items-center justify-content-between column-gap-2">
          <p className="h4 product__price">{product.price}$ </p> 
          <button className="cart__btn"><BsFillCartPlusFill /> Add </button>
        </div>
    </div>
  )
};