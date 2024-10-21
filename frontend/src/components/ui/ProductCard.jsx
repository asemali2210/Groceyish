import StrapiImage from "../custom/StrapiImage";


export default function ProductCard({product}) {
  const { url } = product.images[0];
  return (
    <div className='product__card border border-secondary p-2 rounded-2 my-1 d-flex flex-column h-100'>
        <div className='product__image d-flex align-items-center justify-content-center position-relative'>
           <StrapiImage src={url} alt={product.name} width={product.images[0].width} height={product.images[0].height}  className="img-fluid" quality={80}/>
        </div>
        <div className="d-flex">
          <p className="product__name text-bg-success rounded-1 p-1 text-white">{product.categories[0].name}</p>
        </div>
        <p className="h4 product__name">{product.name}</p>
        <div className="d-flex h4 gap-1 align-items-center">
                <span className="h6">For: </span>
            <p className="h6 product__name text-primary">{product.quantity}</p>
            <span className="h6">Pay</span>
        <p className="h4 product__name text-success">{product.price}$ </p> 
        </div>
    </div>
  )
};