import Link from 'next/link';
import Image from 'next/image';

// Icons
import { Calendar2, FolderMinus } from 'iconsax-react';

function BlogCart({ image }) {
   return (
      <Link href="/" className="relative block">
         <div className="ml-4 flex items-center gap-[7px] customMd:gap-[9px]">
            <Calendar2 size="18" />
            <p className="text-[8px] customMd:text-[11px]">14 Feb 2024</p>
         </div>
         <div className="relative mt-[9px] aspect-video w-full customMd:mt-3">
            <Image src={image} alt="product" fill className="rounded-2xl object-cover" />
         </div>
         <div
            className="relative mx-auto mt-[-30px] w-[calc(100%-36px)] rounded-10
          bg-white p-[18px] customMd:mt-[-50px] customMd:w-[calc(100%-48px)] customMd:p-6"
         >
            <div className="flex items-center gap-[6px] customMd:gap-2">
               <FolderMinus size="24px" color="#002D3C" />
               <p className="text-10 customMd:text-[13px]">Educational writing</p>
            </div>
            <p className="mt-[6px] line-clamp-2 h-5 text-10 text-[#002D3C] customMd:mt-2 customMd:h-10 customMd:text-sm">
               Everything you need to know about the history of the Prada brand
            </p>
         </div>
      </Link>
   );
}

export default BlogCart;
