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
import blogPic1 from '@/assets/images/blogPic1.png';
import blogPic2 from '@/assets/images/blogPic2.png';
import blogPic3 from '@/assets/images/blogPic3.png';

// Components
import BlogCart from '@/components/templates/blog-cart/blog-cart';

function MoreAbout() {
   const swiperRef = useRef(null);

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
      <div className="mt-[30] bg-[#F8F2F2] pb-[29px] pl-8 pt-[77px] customSm:pr-8 customMd:mt-20 customMd:px-[129px] customMd:pb-10 customMd:pt-[54px]">
         <div className="mx-auto max-w-[1176px]">
            <p className="text-center font-jakartaTextBold text-[18px] leading-[22px] customMd:text-2xl customMd:leading-[30px]">
               Learn more about the Fashion world
            </p>
            <p className="mb-8 mt-2 text-center text-xs text-[#00000080] customMd:mb-10 customMd:mt-4 customMd:text-sm">
               Latest news and articles about Fashion products
            </p>
            <Link href="/" className="mx-auto flex h-[33px] w-fit items-center rounded-[500px] bg-white">
               <p
                  className="flex h-full items-center justify-center rounded-[500px] bg-customPink
                   px-4 font-jakartaTextBold text-xs text-white customMd:px-6 customMd:text-sm"
               >
                  See All
               </p>
               <ArrowRight2 size="14" className="px-2 customMd:px-[10px]" />
            </Link>

            <div className="relative mt-16">
               <Swiper
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className="mySwiper"
                  loop
                  ref={swiperRef}
                  breakpoints={{
                     300: {
                        slidesPerView: 1.5,
                        spaceBetween: '16px',
                     },
                     600: {
                        slidesPerView: 2,
                        spaceBetween: '24px',
                     },
                     1200: {
                        slidesPerView: 3,
                        spaceBetween: '24px',
                     },
                  }}
               >
                  <SwiperSlide>
                     <BlogCart image={blogPic1} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <BlogCart image={blogPic2} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <BlogCart image={blogPic3} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <BlogCart image={blogPic1} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <BlogCart image={blogPic2} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <BlogCart image={blogPic3} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <BlogCart image={blogPic1} />
                  </SwiperSlide>
                  <SwiperSlide>
                     <BlogCart image={blogPic2} />
                  </SwiperSlide>
               </Swiper>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 customMd:mt-10">
               <div style={{ boxShadow: '0px 4px 51px 0px #00000014' }} className="rounded-full">
                  <IconButton onClick={navigatePrev} sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}>
                     <ArrowLeft size="20" color="#292D32" />
                  </IconButton>
               </div>
               <div style={{ boxShadow: '0px 4px 51px 0px #00000014' }} className="rounded-full">
                  <IconButton onClick={navigateNext} sx={{ backgroundColor: 'white', width: '48px', height: '48px' }}>
                     <ArrowRight size="20" color="#292D32" />
                  </IconButton>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MoreAbout;
