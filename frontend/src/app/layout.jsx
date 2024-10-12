import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.scss';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import { getGlobalData } from "@/data/loader";
import { getCategorySlug } from "@/data/loader";
export const metadata = {
  title: "groceyish",
  description: "groceyish fresh food store",
};

export default async function RootLayout({ children }) {
  const globalData = await getGlobalData();
  const categorySlug = await getCategorySlug();

  return (
    <html lang="en">
      <body >
        <Navbar categories={categorySlug.data}/>
        {children}
        <Footer data={globalData.data.footer}/>
      </body>
    </html>
  );
}
