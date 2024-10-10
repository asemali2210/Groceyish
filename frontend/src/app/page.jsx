import DownLoadApp from "@/components/layout/DownLoadApp";
import Features from "@/components/layout/Features";
import HomeHeader from "@/components/layout/HomeHeader";
import { getStrapiData, getStrapiUrl } from '@/util/util';
import { getHomePageData } from "@/data/loader";


function blockRender(block){
  switch(block.__component){
    case "layout.hero-section":
      return <HomeHeader key={block.id} data={block} />;
    case 'layout.featrues-sections': 
      return <Features key={block.id} data={block}/>
    default:
      return null
  
    }
}
export default async function Home() {
  
  const homePage = await getHomePageData();
  const blocks = homePage.data.blocks
  if(!blocks) return <div>no blocks</div>
  return (
    <main>
      {blocks.map(block => blockRender(block))}
    </main>
  );
}
