import Link from 'next/link';

// MUI
import { ArrowRight2 } from 'iconsax-react';

// Assets
import bannerPic from '@/assets/images/bannerPic.png';

function BannersProducts() {
   return (
      <div className="px-8 pb-[47px] pt-8 customMd:px-[129px] customMd:pb-[66px]">
         <div className="mx-auto flex max-w-[1176px] flex-col gap-6 customMd:flex-row customMd:items-center">
            <div
               className="relative h-[161px] rounded-3xl max-customMd:w-full customMd:h-[270px] customMd:flex-1"
               style={{
                  backgroundImage: `url(${bannerPic.src})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
               }}
            >
               <div className="absolute right-5 top-[38px] customMd:right-[53px] customMd:top-[75px]">
                  <p className="max-w-[153px] font-jakartaDisplayRegular text-sm text-white customMd:max-w-[242px] customMd:text-2xl">
                     The latest models of womens clothing
                  </p>
                  <Link
                     href="/"
                     className="mt-4 flex h-[33px] w-fit items-center rounded-[500px] bg-[#FFF3F7] customMd:mt-6"
                  >
                     <p
                        className="flex h-full items-center justify-center rounded-[500px] bg-customPink
                   px-4 font-jakartaTextBold text-xs text-white customMd:px-6 customMd:text-sm"
                     >
                        Shop
                     </p>
                     <ArrowRight2 size="14" className="px-2 customMd:px-[10px]" />
                  </Link>
               </div>
            </div>
            <div
               className="relative h-[161px] rounded-3xl max-customMd:w-full customMd:h-[270px] customMd:flex-1"
               style={{
                  backgroundImage: `url(${bannerPic.src})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
               }}
            >
               <div className="absolute right-5 top-[38px] customMd:right-[79px] customMd:top-[75px]">
                  <p className="max-w-[153px] font-jakartaDisplayRegular text-sm text-white customMd:max-w-[242px] customMd:text-2xl">
                     The latest models of womens clothing
                  </p>
                  <Link
                     href="/"
                     className="mt-4 flex h-[33px] w-fit items-center rounded-[500px] bg-[#FFF3F7] customMd:mt-6"
                  >
                     <p
                        className="flex h-full items-center justify-center rounded-[500px] bg-customPink
                   px-4 font-jakartaTextBold text-xs text-white customMd:px-6 customMd:text-sm"
                     >
                        Shop
                     </p>
                     <ArrowRight2 size="14" className="px-2 customMd:px-[10px]" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BannersProducts;
