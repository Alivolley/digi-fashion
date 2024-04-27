import { useRef } from 'react';
import Image from 'next/image';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// MUI
import { IconButton } from '@mui/material';

// Icons
import { ArrowLeft2, ArrowRight2, ArrowUp } from 'iconsax-react';

// Assets
import headerBanner1 from '@/assets/images/headerBanner1.png';
import headerBanner2 from '@/assets/images/headerBanner2.png';

// Components

function HomeBanner() {
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
      <div className="mb-[71px] mt-[67px] px-6 customMd:mb-[100px] customMd:mt-[97px] customMd:px-[129px]">
         <div className="relative mx-auto h-[229px] max-w-[1176px] rounded-2xl bg-[#F3F7FA] customMd:h-[447px]">
            <div className="absolute left-[10px] right-[-10%] top-[-35px] customMd:-right-1/4 customMd:left-[34px] customMd:top-[-57px] 2xl:-right-1/2">
               <div className="absolute bottom-[32px] left-[729px] z-[2] flex items-center gap-4 max-customMd:hidden">
                  <IconButton onClick={navigatePrev} sx={{ backgroundColor: 'white', width: '50px', height: '50px' }}>
                     <ArrowLeft2 size="18" color="#000" />
                  </IconButton>

                  <IconButton onClick={navigateNext} sx={{ backgroundColor: 'white', width: '50px', height: '50px' }}>
                     <ArrowRight2 size="18" color="#000" />
                  </IconButton>
               </div>

               <Swiper
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className="mySwiper"
                  loop
                  ref={swiperRef}
                  breakpoints={{
                     300: {
                        slidesPerView: 1.2,
                        spaceBetween: '16px',
                     },
                     900: {
                        slidesPerView: 1.5,
                        spaceBetween: '25px',
                     },
                  }}
               >
                  <SwiperSlide>
                     <div className="relative h-[211px] w-full customMd:h-[427px]">
                        <Image src={headerBanner2} alt="banner" fill className="rounded-2xl object-cover" />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="relative h-[211px] w-full customMd:h-[427px]">
                        <Image src={headerBanner1} alt="banner" fill className="rounded-2xl object-cover" />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="relative h-[211px] w-full customMd:h-[427px]">
                        <Image src={headerBanner2} alt="banner" fill className="rounded-2xl object-cover" />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="relative h-[211px] w-full customMd:h-[427px]">
                        <Image src={headerBanner1} alt="banner" fill className="rounded-2xl object-cover" />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="relative h-[211px] w-full customMd:h-[427px]">
                        <Image src={headerBanner2} alt="banner" fill className="rounded-2xl object-cover" />
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="relative h-[211px] w-full customMd:h-[427px]">
                        <Image src={headerBanner1} alt="banner" fill className="rounded-2xl object-cover" />
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>

            <div className="flex size-full items-end pb-5 pl-[22px] pr-[26px] customMd:pb-7 customMd:pl-[34px] customMd:pr-[93px]">
               <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-1 font-jakartaTextBold text-xs customMd:text-[18px]">
                     <p>Buying all kinds of</p>
                     <p className="text-[#00000080]">Accessories</p>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="flex items-center gap-1 customMd:gap-4">
                        <p className="text-10 customMd:text-base">Go Shop</p>
                        <div className="flex size-4 rotate-45 items-center justify-center rounded-full border-2 border-solid customMd:size-[26px]">
                           <ArrowUp size="16" />
                        </div>
                     </div>
                     <div className="flex items-center gap-1 font-jakartaTextBold text-[18px] max-customMd:hidden">
                        <p>Buying all kinds of</p>
                        <p className="text-[#00000080]">Dresses</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HomeBanner;
