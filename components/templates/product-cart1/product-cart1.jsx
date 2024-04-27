import Link from 'next/link';
import Image from 'next/image';

// Icons
import { ArrowRight2, BagHappy, Heart } from 'iconsax-react';

function ProductCart1({ image, hasColor }) {
   return (
      <Link href="/" className="relative mt-5 block shrink-0 rounded-2xl bg-white px-5 py-6 max-customMd:w-[250px]">
         <p
            className="absolute left-6 top-0 flex h-7 w-fit rotate-90 items-center justify-center rounded-l-[5px]
          rounded-r-[25px] bg-[#FF2A50] px-3 font-jakartaTextBold text-xs text-white"
         >
            New
         </p>
         <Heart size="24" className="absolute right-6 top-6" />
         {hasColor && (
            <div className="absolute left-6 top-16 flex flex-col gap-2">
               <span className="size-2 rounded-full bg-[#373B40]" />
               <span className="size-2 rounded-full bg-[#096A50]" />
               <span className="size-2 rounded-full bg-[#3B3C34]" />
            </div>
         )}
         <div className="relative mx-auto aspect-square w-[187px]">
            <Image src={image} alt="product" fill className="object-cover" />
         </div>
         <p className="mt-[9px] line-clamp-2 h-[42px] text-[13px] leading-[21px]">
            Womens wristwatch, City Woman, model EM0896-89Y
         </p>
         <div className="mt-6 hidden items-center justify-between customMd:flex">
            <div
               className="flex size-[54px] items-center justify-center rounded-full
             border-4 border-solid border-white bg-customPink outline outline-[#DCDCDC]"
            >
               <BagHappy size="20" color="#fff" />
            </div>
            <p className="font-jakartaTextBold">$499.99</p>
         </div>

         <div className="mt-8 flex items-center justify-between customMd:hidden">
            <div href="/" className="flex h-[33px] items-center rounded-[500px] bg-[#FFF3F7]">
               <p
                  className="flex h-full items-center justify-center gap-2 rounded-[500px]
                    bg-customPink pl-4 pr-6 font-jakartaTextBold text-sm text-white"
               >
                  <BagHappy size="16px" />
                  Buy
               </p>
               <ArrowRight2 size="14" className="px-[10px]" />
            </div>
            <div className="flex flex-col gap-[6px] font-jakartaTextBold text-sm leading-[14px]">
               <p className="text-[#00000080]">$649.99</p>
               <p>$499.99</p>
            </div>
         </div>
      </Link>
   );
}

export default ProductCart1;
