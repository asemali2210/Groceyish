import Link from "next/link"

export default function FeatureMainSection({data}) {
  console.log(data,"55555555")
  const {feature } = data

  return (
    <div className="feature__main">
        <div className="container">
          <div className="row">
            {
              feature.map()
            }
            <div className="col-md-6">
              <div className="feature__main">
                <div className="_left">
                  <p className="__tag">Free delivery</p>
                  <p className="heading">Free delivery over $50 </p>
                  <p className="sub__heading">Shop $50 product and get free delivery anywhre.</p>
                  <Link href='/'>
                    Shop Now
                  </Link>
                </div>
                <div className="_right">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  ) 
};


