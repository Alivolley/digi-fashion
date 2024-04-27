// Components
import BannersProducts from '@/components/pages/home/banners-products/banners-products';
import HomeBanner from '@/components/pages/home/home-banner/home-banner';
import LatestProducts from '@/components/pages/home/latest-products/latest-products';
import MoreAbout from '@/components/pages/home/more-about/more-about';
import PopularProducts from '@/components/pages/home/popular-products/popular-products';
import ProductCategories from '@/components/pages/home/product-categories/product-categories';

export default function Home() {
   return (
      <div>
         <HomeBanner />
         <ProductCategories />
         <PopularProducts />
         <BannersProducts />
         <LatestProducts />
         <MoreAbout />
      </div>
   );
}
