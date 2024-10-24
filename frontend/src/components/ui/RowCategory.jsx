import Link from "next/link";
import StrapiImage from "../custom/StrapiImage";
import '@/styles/components/row-categories.scss';
export default async function RowCategory({data}) {
    const {categories} = data;
  return (
    <div className='row__category py-5'>
        <div className='container'>
            <div className='row__category__header d-flex'>
                <p className='h3 fw-medium'>Explore Categories</p>
            </div>
            <div className='row row__items flex-nowrap overflow-x-scroll'>
                
                 {
                    categories.map(category => (
                        <div className='col-5 col-md-3 col-lg-2' key={category.id}>
                            <div className="category__item px-4 py-1" style={{backgroundColor: `${category.bgColor}` || '#fff'}}>
                                <div className="category__img">
                                    <StrapiImage src={category.image.url} alt="asd"  width={200} height={200} className="img-fluid"/>
                                </div>
                                <p href={category.slug} className="category__name text-truncate d-block">
                                    {category.name}
                                </p>
                                <p href={category.slug} className="category__products text-truncate d-block">
                                    {`${category.products.length} items` || `0 item`}
                                </p>
                                <Link href={category.slug} className="category__slug"></Link>
                            </div>
                        </div>
                    ))
                 }
                
            </div>
        </div>
    </div>
  )
};