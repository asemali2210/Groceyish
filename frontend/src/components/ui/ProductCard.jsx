import StrapiImage from "../custom/StrapiImage";


export default function ProductCard({product}) {
    const { url } = product.images[0]
  return (
    <div className='product__card border border-secondary p-5 rounded-2 my-1 d-flex flex-column align-items-stretch'>
        <div className='product__image d-flex align-items-center justify-content-center'>
           <StrapiImage src={url} alt={product.name} width={200} height={200} className="img-fluid" layout="resposive"/>
        </div>
        <p className="h4 product__name">{product.name}</p>
        <div className="d-flex h4 gap-1 align-items-center">
                <span className="h6">For: </span>
            <p className="h6 product__name text-danger">{product.quantity}</p>
            <span className="h6">Pay</span>
        <p className="h4 product__name text-success">{product.price}$ </p> 
        </div>
    </div>
  )
};