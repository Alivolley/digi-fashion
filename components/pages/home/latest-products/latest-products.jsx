import { useRef } from 'react';
import Link from 'next/link';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// MUI
import { IconButton } from '@mui/material';

// Icons
import { ArrowLeft, ArrowRight, ArrowRight2 } from 'iconsax-react';

// Assets
import product3Image from '@/assets/images/product3.png';
import product4Image from '@/assets/images/product4.png';
import product5Image from '@/assets/images/product5.png';
import product6Image from '@/assets/images/product6.png';
import product7Image from '@/assets/images/product7.png';
import product8Image from '@/assets/images/product8.png';
import product9Image from '@/assets/images/product9.png';
import product10Image from '@/assets/images/product10.png';
import product11Image from '@/assets/images/product11.png';
import product12Image from '@/assets/images/product12.png';
import product13Image from '@/assets/images/product13.png';

// Components
import ProductCart2 from '@/components/templates/product-cart2/product-cart2';

function LatestProducts() {
   const swiperRef1 = useRef(null);
   const swiperRef2 = useRef(null);
   const swiperRef3 = useRef(null);

   const navigatePrev1 = () => {
      if (swiperRef1.current) {
         swiperRef1.current.swiper.slidePrev();
      }
   };

   const navigateNext1 = () => {
      if (swiperRef1.current) {
         swiperRef1.current.swiper.slideNext();
      }
   };

   const navigatePrev2 = () => {
      if (swiperRef2.current) {
         swiperRef2.current.swiper.slidePrev();
      }
   };

   const navigateNext2 = () => {
      if (swiperRef2.current) {
         swiperRef2.current.swiper.slideNext();
      }
   };

   const navigatePrev3 = () => {
      if (swiperRef3.current) {
         swiperRef3.current.swiper.slidePrev();
      }
   };

   const navigateNext3 = () => {
      if (swiperRef3.current) {
         swiperRef3.current.swiper.slideNext();
      }
   };

   return (
      <div className="bg-[#F6F2F3] px-6 pb-[51px] pt-[58px] customMd:px-[129px] customMd:pb-[94px] customMd:pt-[49px]">
         <div className="mx-auto max-w-[1176px]">
            <div>
               <div className="flex items-center justify-between">
                  <p className="max-w-[208px] font-jakartaTextBold text-base customMd:max-w-[242px] customMd:text-2xl">
                     The latest models of women clothing
                  </p>
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

               <div className="relative mt-11 customMd:px-[62px]">
                  <div
                     style={{ boxShadow: '0px 4px 51px 0px #00000014' }}
                     className="absolute left-0 top-[181px] z-10 rounded-full max-customMd:hidden"
                  >
                     <IconButton
                        onClick={navigatePrev1}
                        sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}
                     >
                        <ArrowLeft size="20" color="#292D32" />
                     </IconButton>
                  </div>
                  <div
                     style={{ boxShadow: '0px 4px 51px 0px #00000014' }}
                     className="absolute right-0 top-[181px] z-10 rounded-full max-customMd:hidden"
                  >
                     <IconButton
                        onClick={navigateNext1}
                        sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}
                     >
                        <ArrowRight size="20" color="#292D32" />
                     </IconButton>
                  </div>

                  <Swiper
                     // eslint-disable-next-line tailwindcss/no-custom-classname
                     className="mySwiper"
                     loop
                     ref={swiperRef1}
                     breakpoints={{
                        300: {
                           slidesPerView: 1,
                           spaceBetween: '5px',
                        },
                        390: {
                           slidesPerView: 2,
                           spaceBetween: '9px',
                        },
                        1200: {
                           slidesPerView: 3,
                           spaceBetween: '23px',
                        },
                        1400: {
                           slidesPerView: 4,
                           spaceBetween: '24px',
                        },
                     }}
                  >
                     <SwiperSlide>
                        <ProductCart2 image={product5Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product6Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product7Image} hasDiscount />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product8Image} hasDiscount />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product5Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product6Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product7Image} hasDiscount />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product8Image} hasDiscount />
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>

            <div className="mt-[102px] customMd:mt-[120px]">
               <div className="flex items-center justify-between">
                  <p className="font-jakartaTextBold text-[18px] customMd:text-2xl">
                     <span>Our new</span> <span className="text-customPink">Popular products</span>
                  </p>
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

               <div className="relative mt-11 customMd:px-[62px]">
                  <div
                     style={{ boxShadow: '0px 4px 51px 0px #00000014' }}
                     className="absolute left-0 top-[181px] z-10 rounded-full max-customMd:hidden"
                  >
                     <IconButton
                        onClick={navigatePrev2}
                        sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}
                     >
                        <ArrowLeft size="20" color="#292D32" />
                     </IconButton>
                  </div>
                  <div
                     style={{ boxShadow: '0px 4px 51px 0px #00000014' }}
                     className="absolute right-0 top-[181px] z-10 rounded-full max-customMd:hidden"
                  >
                     <IconButton
                        onClick={navigateNext2}
                        sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}
                     >
                        <ArrowRight size="20" color="#292D32" />
                     </IconButton>
                  </div>

                  <Swiper
                     // eslint-disable-next-line tailwindcss/no-custom-classname
                     className="mySwiper"
                     loop
                     ref={swiperRef2}
                     breakpoints={{
                        300: {
                           slidesPerView: 1,
                           spaceBetween: '5px',
                        },
                        390: {
                           slidesPerView: 2,
                           spaceBetween: '9px',
                        },
                        1200: {
                           slidesPerView: 3,
                           spaceBetween: '23px',
                        },
                        1400: {
                           slidesPerView: 4,
                           spaceBetween: '24px',
                        },
                     }}
                  >
                     <SwiperSlide>
                        <ProductCart2 image={product3Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product9Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product10Image} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product11Image} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product3Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product9Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product10Image} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product11Image} />
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>

            <div className="mt-[102px] customMd:mt-[120px]">
               <div className="flex items-center justify-between">
                  <p className="font-jakartaTextBold text-[18px] customMd:text-2xl">
                     <span>Our new</span> <span className="text-customPink">Accessories</span>
                  </p>
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

               <div className="relative mt-11 customMd:px-[62px]">
                  <div
                     style={{ boxShadow: '0px 4px 51px 0px #00000014' }}
                     className="absolute left-0 top-[181px] z-10 rounded-full max-customMd:hidden"
                  >
                     <IconButton
                        onClick={navigatePrev3}
                        sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}
                     >
                        <ArrowLeft size="20" color="#292D32" />
                     </IconButton>
                  </div>
                  <div
                     style={{ boxShadow: '0px 4px 51px 0px #00000014' }}
                     className="absolute right-0 top-[181px] z-10 rounded-full max-customMd:hidden"
                  >
                     <IconButton
                        onClick={navigateNext3}
                        sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}
                     >
                        <ArrowRight size="20" color="#292D32" />
                     </IconButton>
                  </div>

                  <Swiper
                     // eslint-disable-next-line tailwindcss/no-custom-classname
                     className="mySwiper"
                     loop
                     ref={swiperRef3}
                     breakpoints={{
                        300: {
                           slidesPerView: 1,
                           spaceBetween: '5px',
                        },
                        390: {
                           slidesPerView: 2,
                           spaceBetween: '9px',
                        },
                        1200: {
                           slidesPerView: 3,
                           spaceBetween: '23px',
                        },
                        1400: {
                           slidesPerView: 4,
                           spaceBetween: '24px',
                        },
                     }}
                  >
                     <SwiperSlide>
                        <ProductCart2 image={product4Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product13Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product12Image} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product7Image} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product4Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product13Image} hasColor />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product12Image} />
                     </SwiperSlide>
                     <SwiperSlide>
                        <ProductCart2 image={product7Image} />
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LatestProducts;
