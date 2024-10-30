import ProductsColumn from "../custom/ProductsColumn"

export default function SpecialProducts({data}) {
    console.log(data.productList)
    const {productList} = data
  return (
    <div className="special__products">
        <div className="container">
            <div className="row">
                {
                    productList.map(productsCol => (
                        <div className="col-6 col-md-3" key={productsCol.heading}>
                            <ProductsColumn columnHeading={productsCol.heading} products={productsCol.products} />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}