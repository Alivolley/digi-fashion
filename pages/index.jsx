// Components
import BannersProducts from '@/components/pages/home/banners-products/banners-products';
import PopularProducts from '@/components/pages/home/popular-products/popular-products';
import ProductCategories from '@/components/pages/home/product-categories/product-categories';

export default function Home() {
   return (
      <div>
         <ProductCategories />
         <PopularProducts />
         <BannersProducts />
      </div>
   );
}
