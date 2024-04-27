import Link from 'next/link';
import Image from 'next/image';

// Icons
import { ArrowRight2, BagHappy, Heart } from 'iconsax-react';

// Assets
import polygonPic from '@/assets/images/polygon.png';

function ProductCart2({ image, hasColor, hasDiscount }) {
   return (
      <Link href="/" className="relative block rounded-2xl bg-white px-[7px] py-[13px] customMd:px-5 customMd:py-6">
         <p
            className="absolute left-[10px] top-[13px] z-[1] flex size-[23px] h-7 items-center justify-center text-[9px]
            text-customPink customMd:left-[24px] customMd:top-[16px] customMd:size-8 customMd:text-xs"
            style={{
               backgroundImage: `url(${polygonPic.src})`,
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
            }}
         >
            65
         </p>
         <Heart size="24" className="absolute right-[10px] top-[13px] z-[1] customMd:right-6 customMd:top-6" />
         {hasColor && (
            <div className="absolute left-[15px] top-16 z-[1] flex flex-col gap-2 customMd:left-6 customMd:top-20">
               <span className="size-2 rounded-full bg-[#373B40]" />
               <span className="size-2 rounded-full bg-[#096A50]" />
               <span className="size-2 rounded-full bg-[#3B3C34]" />
            </div>
         )}
         <div className="relative mx-auto aspect-square w-[187px] max-w-full">
            <Image src={image} alt="product" fill className="object-cover" />
         </div>
         <p className="mt-[9px] line-clamp-2 h-[42px] text-[13px] leading-[21px] customMd:mt-3">
            Women wristwatch, City Woman, model EM0896-89Y
         </p>
         <div className="mt-6 flex items-center justify-center customMd:mt-8 customMd:justify-between">
            <div
               href="/"
               className="hidden h-[24px] items-center rounded-[500px] bg-[#FFF3F7] customMd:flex customMd:h-[33px]"
            >
               <p
                  className="flex h-full items-center justify-center gap-[5.5px] rounded-[500px] bg-customPink pl-[11px]
                   pr-[17px] font-jakartaTextBold text-xs text-white customMd:gap-2 customMd:pl-4 customMd:pr-6 customMd:text-sm"
               >
                  <BagHappy size="16px" />
                  Buy
               </p>
               <ArrowRight2 size="14" className="px-[6.5px] customMd:px-[10px]" />
            </div>
            <div className="flex flex-col gap-[6px] font-jakartaTextBold max-customMd:items-center">
               <p className="text-sm leading-[14px] text-[#00000080] max-customMd:h-[14px]">
                  {hasDiscount && '$649.99'}
               </p>
               <p className="text-base leading-[16px] max-customMd:text-customPink customMd:text-sm customMd:leading-[14px]">
                  $499.99
               </p>
            </div>
         </div>
      </Link>
   );
}

export default ProductCart2;
