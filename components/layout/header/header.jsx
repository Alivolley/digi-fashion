import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, IconButton } from '@mui/material';

// Icons
import {
   ArrowDown2,
   BagHappy,
   Category2,
   DiscountShape,
   Global,
   Headphone,
   Notepad2,
   SearchNormal1,
   Tag2,
} from 'iconsax-react';
import fireSvg from '@/assets/svg/fire.svg';
import menuSvg from '@/assets/svg/menu.svg';

// Assets
import logo from '@/assets/images/logo.png';

function Header() {
   const searchHandler = e => {
      e.preventDefault();
   };

   return (
      <header className="px-6 pt-[25px] customMd:px-[129px] customMd:pt-[50px]">
         <div className="mx-auto flex max-w-[1176px] items-center border-b border-solid border-[#DADADA] pb-5 customMd:pb-6">
            <div className="flex items-center gap-16">
               <Link href="/" className="flex items-center gap-2">
                  <div className="size-[37px] customMd:size-[50px]">
                     <Image src={logo} alt="logo" className="size-full" />
                  </div>
                  <p className="font-jakartaTextBold text-sm customMd:text-[18px]">DigiFashion</p>
               </Link>
               <div className="hidden items-center gap-6 customLg:flex">
                  <Link href="/">
                     <Button startIcon={<Category2 size="22" />} color="black">
                        Category
                     </Button>
                  </Link>

                  <div className="h-5 w-px bg-[#DADADA]" />
                  <div className="flex items-center gap-6 customXl:gap-12">
                     <Link href="/">
                        <Button startIcon={<DiscountShape size="22" />} color="black">
                           Hot Deals
                        </Button>
                     </Link>
                     <Link href="/">
                        <Button startIcon={<Image src={fireSvg} alt="svg" />} color="black">
                           New Arrivals
                        </Button>
                     </Link>
                     <Link href="/">
                        <Button startIcon={<Notepad2 size="22" />} color="black">
                           Blog
                        </Button>
                     </Link>
                     <Link href="/">
                        <Button startIcon={<Tag2 size="22" />} color="black">
                           Brands
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="ml-auto hidden w-fit items-center gap-4 customLg:flex">
               <Button
                  sx={{
                     height: '46px',
                     paddingX: '24px',
                     borderRadius: '44px',
                  }}
                  color="secondary"
                  variant="contained"
               >
                  My Account
               </Button>
               <IconButton color="black">
                  <BagHappy size="24" />
               </IconButton>
            </div>
            <div className="ml-auto w-fit customLg:hidden">
               <IconButton
                  sx={{
                     width: '46px',
                     height: '46px',
                     backgroundColor: '#EF5A881A',
                     ':hover': { backgroundColor: '#ef5a894c' },
                  }}
               >
                  <Image src={menuSvg} alt="menu" />
               </IconButton>
            </div>
         </div>

         <div className="mx-auto flex max-w-[1176px] items-center justify-between pt-4 customMd:pt-5">
            <form
               onSubmit={searchHandler}
               className="flex h-[58px] max-w-[243px] grow items-center rounded-[44px] bg-[#F3F7FA] px-[14px] customMd:max-w-[528px]"
            >
               <IconButton type="submit">
                  <SearchNormal1 size="22" color="#292D32" />
               </IconButton>
               <input
                  type="text"
                  className="w-full border-none bg-transparent py-2 text-base outline-none 
                     placeholder:font-jakartaTextRegular placeholder:text-xs placeholder:text-[#00000080]"
                  placeholder="Search among products"
               />
            </form>
            <div>
               <div className="hidden items-center gap-8 customMd:flex">
                  <div className="flex items-center gap-2">
                     <div className="flex size-12 items-center justify-center rounded-full border border-solid border-[#00000014]">
                        <Global size="22" />
                     </div>
                     <p className="text-sm">EN</p>
                     <ArrowDown2 size="16" />
                  </div>
                  <div className="flex items-center gap-2 text-customPink">
                     <div className="flex size-12 items-center justify-center rounded-full bg-[#EF5A881A]">
                        <Headphone size="22" variant="Bulk" />
                     </div>

                     <p className="text-sm">Support</p>
                  </div>
               </div>
               <div className="customMd:hidden">
                  <IconButton
                     sx={{
                        width: '46px',
                        height: '46px',
                        backgroundColor: '#EF5A88',
                        position: 'relative',
                        ':hover': { backgroundColor: '#ef5a894c' },
                     }}
                  >
                     <BagHappy size="18" color="white" />
                     <p
                        className="absolute bottom-[-10px] right-1/2 w-fit translate-x-1/2 rounded-[9px] 
                     border-[3px] border-solid bg-[#002D3C] px-1.5 py-[2px] text-10 text-white"
                     >
                        2
                     </p>
                  </IconButton>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
