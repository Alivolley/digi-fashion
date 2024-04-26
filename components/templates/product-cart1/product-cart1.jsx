import Link from 'next/link';
import Image from 'next/image';

// Icons
import { BagHappy, Heart } from 'iconsax-react';

function ProductCart1({ image, hasColor }) {
   return (
      <Link href="/" className="relative mt-5 block rounded-2xl bg-white px-5 py-6 max-customMd:w-[250px]">
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
         <div className="mt-6 flex items-center justify-between">
            <div
               className="flex size-[54px] items-center justify-center rounded-full
             border-4 border-solid border-white bg-customPink outline outline-[#DCDCDC]"
            >
               <BagHappy size="20" color="#fff" />
            </div>
            <p className="font-jakartaDisplayBold">$499.99</p>
         </div>
      </Link>
   );
}

export default ProductCart1;
