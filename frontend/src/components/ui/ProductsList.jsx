import ProductCard from "./ProductCard"

export default async function ProductsList({data}) {
  return (
    <div className="products__list">
        <div className="container">
            <div className="row align-items-stretch ">

            {
                data.products.map(product => (
                    <div className="col-md-3 col-6">
                        <ProductCard product={product} key={product.id} />
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
};