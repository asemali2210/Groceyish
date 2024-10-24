import ProductCard from "./ProductCard"

export default async function ProductsList({data}) {
  return (
    <div className="products__list">
        <div className="container">
            <div className="row row-gap-5 align-items-stretch ">

            {
                data.products.map(product => (
                    <div className="product__col col-md-4 col-lg-3 col-6">
                        <ProductCard product={product} key={product.id} />
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
};