import { useRef, useState } from 'react';
import Link from 'next/link';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// MUI
import { IconButton, Tab, Tabs } from '@mui/material';

// Icons
import { ArrowLeft, ArrowRight, ArrowRight2, LikeShapes, Sort } from 'iconsax-react';

// Assets
import product1Image from '@/assets/images/product1.png';
import product2Image from '@/assets/images/product2.png';
import product3Image from '@/assets/images/product3.png';
import product4Image from '@/assets/images/product4.png';

// Components
import ProductCart1 from '@/components/templates/product-cart1/product-cart1';

function PopularProducts() {
   const swiperRef = useRef(null);

   const [tabsValue, setTabsValue] = useState(1);

   const handleChange = (event, newValue) => {
      setTabsValue(newValue);
   };

   const navigatePrev = () => {
      if (swiperRef.current) {
         swiperRef.current.swiper.slidePrev();
      }
   };

   const navigateNext = () => {
      if (swiperRef.current) {
         swiperRef.current.swiper.slideNext();
      }
   };

   return (
      <div className="bg-[#FAF2F04D] px-8 pb-[112px] pt-[97px] customMd:px-[129px]">
         <div className="mx-auto max-w-[1176px]">
            <div className="flex items-center justify-between">
               <div className="flex items-center">
                  <LikeShapes size="32" color="#ef5a88" variant="Bold" />
                  <p className="ml-2 font-jakartaTextBold text-base customMd:ml-4 customMd:mr-6 customMd:text-2xl">
                     Popular Products
                  </p>
                  <p className="hidden text-sm text-[#00000080] customLg:block">
                     Our most popular products according to customers
                  </p>
               </div>
               <Link href="/" className="flex h-[33px] items-center rounded-[500px] bg-[#FFF3F7]">
                  <p
                     className="flex h-full items-center justify-center rounded-[500px] bg-customPink
                   px-4 font-jakartaTextBold text-xs text-white customMd:px-6 customMd:text-sm"
                  >
                     Shop
                  </p>
                  <ArrowRight2 size="14" className="px-2 customMd:px-[10px]" />
               </Link>
            </div>

            <div className="mt-[50px] flex items-center justify-between overflow-x-auto border-b border-solid border-[#DADADA] customMd:mt-14">
               <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                     <Sort size="24" />
                     <p className="font-jakartaTextBold text-sm">Category:</p>
                  </div>
                  <div>
                     <Tabs
                        value={tabsValue}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        variant="scrollable"
                        scrollButtons="auto"
                     >
                        <Tab label="Shoes" value={1} />
                        <Tab label="Watch" value={2} />
                        <Tab label="Coat" value={3} />
                        <Tab label="Sweatshirt" value={4} />
                        <Tab label="T shirt" value={5} />
                     </Tabs>
                  </div>
               </div>
               <p className="hidden font-jakartaTextBold text-[#2C2C2C] customMd:block">240 Products</p>
            </div>

            <div className="relative mt-11 px-9 max-customMd:hidden">
               <div
                  style={{ boxShadow: '0px 4px 51px 0px #00000014' }}
                  className="absolute left-0 top-[181px] z-10 rounded-full max-customMd:hidden"
               >
                  <IconButton onClick={navigatePrev} sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}>
                     <ArrowLeft size="20" color="#292D32" />
                  </IconButton>
               </div>
               <div
                  style={{ boxShadow: '0px 4px 51px 0px #00000014' }}
                  className="absolute right-0 top-[181px] z-10 rounded-full max-customMd:hidden"
               >
                  <IconButton onClick={navigateNext} sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}>
                     <ArrowRight size="20" color="#292D32" />
                  </IconButton>
               </div>

               <Swiper
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className="mySwiper"
                  loop
                  ref={swiperRef}
                  spaceBetween="37px"
                  breakpoints={{
                     900: {
                        slidesPerView: 2,
                     },
                     1200: {
                        slidesPerView: 3,
                     },
                     1400: {
                        slidesPerView: 4,
                     },
                  }}
               >
                  <SwiperSlide>
                     <ProductCart1 image={product1Image} hasColor />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCart1 image={product2Image} hasColor />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCart1 image={product3Image} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCart1 image={product4Image} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCart1 image={product1Image} hasColor />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCart1 image={product2Image} hasColor />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCart1 image={product3Image} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCart1 image={product4Image} />
                  </SwiperSlide>
               </Swiper>
            </div>

            <div className="mt-11 flex items-center gap-9 overflow-x-auto customMd:hidden">
               <ProductCart1 image={product1Image} hasColor />
               <ProductCart1 image={product2Image} hasColor />
               <ProductCart1 image={product3Image} />
               <ProductCart1 image={product4Image} />
               <ProductCart1 image={product1Image} hasColor />
               <ProductCart1 image={product2Image} hasColor />
               <ProductCart1 image={product3Image} />
               <ProductCart1 image={product4Image} />
            </div>
         </div>
      </div>
   );
}

export default PopularProducts;
