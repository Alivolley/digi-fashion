import Image from 'next/image';
import { useState } from 'react';

// Assets
import menSvg from '@/assets/svg/men.svg';
import womenSvg from '@/assets/svg/women.svg';
import kidsSvg from '@/assets/svg/kids.svg';
import accessoriesSvg from '@/assets/svg/accessories.svg';
import productPic1 from '@/assets/images/productPic1.png';
import productPic2 from '@/assets/images/productPic2.png';
import productPic3 from '@/assets/images/productPic3.png';

function ProductCategories() {
   const [chosenCategory, setChosenCategory] = useState('men');

   return (
      <div className="mb-[100px] px-8 customMd:px-[129px]">
         <div className="mx-auto max-w-[1176px]">
            <p className="text-center font-jakartaTextBold text-[18px] customMd:text-2xl">Product categories</p>
            <p className="mx-auto mt-4 max-w-[435px] text-center font-jakartaDisplayRegular text-[13px] leading-4 text-[#00000080] customMd:mt-6 customMd:text-sm">
               We have a wide variety of digital products, we have categorized them for your better access
            </p>
            <div className="mt-[50px] flex items-center justify-center gap-6 customMd:mt-10 customMd:gap-[50px]">
               <button
                  type="button"
                  className="flex cursor-pointer flex-col items-center gap-2 border-none bg-transparent outline-none"
                  onClick={() => setChosenCategory('men')}
               >
                  <Image src={menSvg} alt="icon" />
                  <p className={`text-sm ${chosenCategory === 'men' ? 'text-customPink' : 'text-[#55636F]'}`}>Men</p>
               </button>
               <button
                  type="button"
                  className="flex cursor-pointer flex-col items-center gap-2 border-none bg-transparent outline-none"
                  onClick={() => setChosenCategory('Women')}
               >
                  <Image src={womenSvg} alt="icon" />
                  <p className={`text-sm ${chosenCategory === 'Women' ? 'text-customPink' : 'text-[#55636F]'}`}>
                     Women
                  </p>
               </button>
               <button
                  type="button"
                  className="flex cursor-pointer flex-col items-center gap-2 border-none bg-transparent outline-none"
                  onClick={() => setChosenCategory('kids')}
               >
                  <Image src={kidsSvg} alt="icon" />
                  <p className={`text-sm ${chosenCategory === 'kids' ? 'text-customPink' : 'text-[#55636F]'}`}>Kids</p>
               </button>
               <button
                  type="button"
                  className="flex cursor-pointer flex-col items-center gap-2 border-none bg-transparent outline-none"
                  onClick={() => setChosenCategory('accessories')}
               >
                  <Image src={accessoriesSvg} alt="icon" />
                  <p className={`text-sm ${chosenCategory === 'accessories' ? 'text-customPink' : 'text-[#55636F]'}`}>
                     Accessories
                  </p>
               </button>
            </div>

            <div className="relative mt-[57px] flex flex-col items-center gap-[30px] customMd:mt-[69px] customMd:flex-row customMd:gap-6">
               <div className="w-full flex-[1.35]">
                  <div className="relative h-[142px] customMd:h-[190px]">
                     <Image src={productPic1} alt="product" fill className="rounded-lg object-cover" />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-3 customMd:mt-4 customMd:px-4">
                     <p className="font-jakartaTextBold text-base customMd:text-[18px]">Menswear</p>
                     <p className="font-jakartaTextBold text-xs text-[#00000040] customMd:text-sm">246 Products</p>
                  </div>
               </div>
               <div className="w-full flex-1">
                  <div className="relative h-[142px] customMd:h-[190px]">
                     <Image src={productPic2} alt="product" fill className="rounded-lg object-cover" />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-3 customMd:mt-4 customMd:px-4">
                     <p className="font-jakartaTextBold text-base customMd:text-[18px]">Bags</p>
                     <p className="font-jakartaTextBold text-xs text-[#00000040] customMd:text-sm">24 Products</p>
                  </div>
               </div>
               <div className="w-full flex-1">
                  <div className="relative h-[142px] customMd:h-[190px]">
                     <Image src={productPic3} alt="product" fill className="rounded-lg object-cover" />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-3 customMd:mt-4 customMd:px-4">
                     <p className="font-jakartaTextBold text-base customMd:text-[18px]">Shoes</p>
                     <p className="font-jakartaTextBold text-xs text-[#00000040] customMd:text-sm">246 Products</p>
                  </div>
               </div>

               <div className="absolute bottom-[-41px] left-[-25px] right-[-44px] z-[-1] h-[184px] rounded-3xl bg-[#F3F7FA] max-customMd:hidden" />
            </div>
         </div>
      </div>
   );
}

export default ProductCategories;
