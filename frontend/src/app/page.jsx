import Sale from "@/components/custom/Sale";
import DownLoadApp from "@/components/layout/DownLoadApp";
import FeatureMainSection from "@/components/layout/FeatureMainSection";
import Features from "@/components/layout/Features";
import HomeHeader from "@/components/layout/HomeHeader";
import SpecialProducts from "@/components/layout/SpecialProducts";
import ProductsList from "@/components/ui/ProductsList";
import RowCategory from "@/components/ui/RowCategory";
import { getHomePageData } from "@/data/loader";


function blockRender(block){

  switch(block.__component){
    case "layout.hero-section":
      return <HomeHeader key={block.id} data={block} />;
    case 'layout.featrues-sections': 
      return <Features key={block.id} data={block}/>
    case 'custom.categries': 
      return <RowCategory key={block.id} data={block}/>
    case 'components.products': 
      return <ProductsList key={block.id} data={block}/>
    case 'custom.download-app': 
      return <DownLoadApp key={block.id} data={block}/>
    case 'custom.special-products-section': 
      return <SpecialProducts key={block.id} data={block}/>
    case 'layout.feature-main': 
      return <FeatureMainSection key={block.id} data={block}/>
    default:
      return null
  
    }
}
export default async function Home() {
  
  const homePage = await getHomePageData();
  const { blocks } = homePage.data;

  if(!blocks) return <div>no blocks</div>

  return (
    <main>
      {blocks.map(block => blockRender(block))}
      <FeatureMainSection />
      <Sale />
    </main>
  );
}
