import Link from "next/link"
import StrapiImage from "../custom/StrapiImage";
import { getStrapiUrl } from "@/util/util";

export default function FeatureMainSection({ data }) {
  console.log(data.feature[0]);
  const {feature} = data
  return (
    <div className="feature__main my-5 align-items-stretch">
        <div className="container">
          <div className="row">
            {
             feature.map(featureBox => (

                <div className="col-md-6" style={{height: '100%'}} key={featureBox.id}>
                  <div className={`feature__main__box  d-flex align-items-center ${featureBox.id == 17 ? `_first` : `_second` }`} 
                  style={{backgroundImage: `url(${getStrapiUrl(featureBox.bgImg.url)})` }}>
                    <div className="_left">
                      <p className="_tag">{featureBox.tagText}</p>
                      <p className="heading">{featureBox.heading}</p>
                      <p className="sub__heading">{featureBox.subHeading}</p>
                      <Link href='/' className="__link">
                        {featureBox.link.text}
                      </Link>
                    </div>
                    <div className="_right">
                       <StrapiImage src={featureBox.rightImg.url} width={featureBox.rightImg.width} height={featureBox.rightImg.height} quality={100} alt="offer"  className="img-fluid d-md-block d-none"/>
                    </div>
                  </div>
                </div>
             ))
            }
            
          </div>
        </div>
    </div>
  ) 
};


