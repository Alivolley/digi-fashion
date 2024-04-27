import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, IconButton, Tab, Tabs } from '@mui/material';

// Icons
import {
   ArrowUp,
   BagHappy,
   Call,
   Category,
   Code1,
   Dribbble,
   Home,
   SearchNormal1,
   Tag2,
   UserOctagon,
   Whatsapp,
   Youtube,
} from 'iconsax-react';

// Assets
import footerPic1 from '@/assets/images/footerPic1.png';
import footerPic2 from '@/assets/images/footerPic2.png';
import footerPic3 from '@/assets/images/footerPic3.png';
import footerPic4 from '@/assets/images/footerPic4.png';
import logoPic from '@/assets/images/logo.png';

function Footer() {
   const [tabsValue, setTabsValue] = useState(1);

   const goTopHandler = () => {
      window.scrollTo(0, 0);
   };

   const formSubmitHandler = e => {
      e.preventDefault();
   };

   const handleChange = (event, newValue) => {
      setTabsValue(newValue);
   };

   return (
      <div>
         <div className="relative px-6 pb-[550px] pt-[53px] customMd:px-[129px] customMd:pb-[248px] customMd:pt-[148px]">
            <div className="relative mx-auto max-w-[1176px]">
               <div className="flex items-center justify-center font-jakartaTextBold text-[18px] customMd:text-2xl">
                  <Tag2 size="24" className="pr-4" />
                  <span>The Most</span>
                  <span className="px-1 text-customPink">Popular</span>
                  <span>Brands</span>
               </div>
               <div className="mt-12 flex items-center justify-center customMd:mt-16 customMd:gap-[100px]">
                  <div className="max-customMd:scale-50">
                     <Image src={footerPic1} alt="logo" className="size-full" />
                  </div>
                  <div className="max-customMd:scale-50">
                     <Image src={footerPic2} alt="logo" className="size-full" />
                  </div>
                  <div className="max-customMd:scale-50">
                     <Image src={footerPic3} alt="logo" className="size-full" />
                  </div>
                  <div className="max-customMd:scale-50">
                     <Image src={footerPic4} alt="logo" className="size-full" />
                  </div>
                  <div className="max-customMd:hidden">
                     <Image src={footerPic3} alt="logo" className="size-full" />
                  </div>
               </div>

               <div
                  className="absolute inset-x-0 top-[200px] mx-auto flex max-w-[972px] flex-col justify-between rounded-2xl
                border border-solid border-[#E5E5E5] bg-white p-2 customMd:top-[260px] customMd:flex-row customMd:p-3"
               >
                  <div className="max-w-[543px] grow px-1 py-3 customMd:px-[38px]">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 customMd:gap-4">
                           <div className="w-8 customMd:w-10">
                              <Image src={logoPic} alt="logo" className="size-full" />
                           </div>
                           <div className="flex items-center gap-1 font-jakartaTextBold">
                              <p className="text-sm customMd:text-base">DigiFashion</p>
                              <p className="text-[11px] max-customMd:text-[#00000040] customMd:text-[13px]">
                                 Fashion Product Shop
                              </p>
                           </div>
                        </div>
                        <div className="hidden size-6 items-center justify-center rounded-full border-[1.5px] border-solid border-[#292D32] customMd:flex">
                           <ArrowUp size="14" color="#EF5A88" className="rotate-45" />
                        </div>
                     </div>
                     <p className="mt-3 text-[11px] leading-5 customMd:mt-6 customMd:text-xs customMd:leading-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae
                        congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis
                     </p>
                  </div>
                  <div className="max-w-[321px] rounded-2xl bg-[#FAF6F6] px-[30px] py-[21px] customMd:py-7">
                     <p className="font-jakartaTextBold text-[15px] leading-[21px] customMd:text-base customMd:leading-[22px]">
                        Subscribe and get 20% off your first purchase.
                     </p>
                     <form
                        className="mt-4 flex h-[38px] items-stretch justify-between gap-[6px] customMd:mt-7 customMd:h-12"
                        onSubmit={formSubmitHandler}
                     >
                        <input
                           type="text"
                           className="w-full rounded-[33px] border-none bg-[#F9E6EB] px-4 outline-none placeholder:text-xs placeholder:text-black"
                           placeholder="Enter Your Email"
                        />
                        <IconButton
                           sx={{
                              backgroundColor: '#EF5A88',
                              aspectRatio: '1/1',
                              ':hover': { backgroundColor: '#ef5a8975' },
                           }}
                           type="submit"
                        >
                           <ArrowUp size="24" color="#fff" className="rotate-45" />
                        </IconButton>
                     </form>
                  </div>
               </div>
            </div>

            <div className="absolute inset-x-8 bottom-0 flex justify-center border-t border-solid border-[#00000033] customMd:hidden">
               <Tabs
                  value={tabsValue}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  variant="scrollable"
                  scrollButtons="auto"
                  TabIndicatorProps={{ style: { top: '0' } }}
               >
                  <Tab icon={<Home size="24" />} value={1} sx={{ minWidth: '0px' }} />
                  <Tab icon={<SearchNormal1 size="24" />} value={2} sx={{ minWidth: '0px' }} />
                  <Tab icon={<Category size="24" />} value={3} sx={{ minWidth: '0px' }} />
                  <Tab icon={<UserOctagon size="24" />} value={4} sx={{ minWidth: '0px' }} />
                  <Tab icon={<BagHappy size="24" />} value={5} sx={{ minWidth: '0px' }} />
               </Tabs>
            </div>
         </div>

         <div className="bg-[#FAF6F6] px-6 pb-[32px] pt-[119px] max-customMd:hidden customMd:px-[129px]">
            <div className="mx-auto max-w-[1176px]">
               <div className="flex items-center justify-between border-b border-solid border-[#00000033] pb-10">
                  <div className="flex items-center gap-8 font-jakartaTextBold text-sm text-[#00000080]">
                     <Link href="/" className="flex items-center gap-3 text-customPink">
                        <span className="h-[2px] w-4 rounded-sm bg-customPink" />
                        Home
                     </Link>
                     <Link href="/">Blog</Link>
                     <Link href="/">New</Link>
                     <Link href="/">About us</Link>
                  </div>
                  <div className="flex items-center">
                     <div className="flex items-center gap-[18px]">
                        <Youtube size="24" variant="Bold" />
                        <Whatsapp size="24" variant="Bold" />
                        <Dribbble size="24" variant="Bold" />
                     </div>
                     <div className="mx-[26px] h-[22px] w-px bg-[#00000066]" />
                     <div className="flex items-center gap-3 text-sm">
                        <Call size="24" />
                        Contact Us
                     </div>
                  </div>
               </div>

               <div className="flex items-center justify-between pt-8">
                  <div className="flex items-center gap-[26px]">
                     <div className="flex items-center gap-4">
                        <div className="w-[41px]">
                           <Image src={logoPic} alt="logo" className="size-full" />
                        </div>
                        <div className="flex items-end gap-1.5 font-jakartaTextBold">
                           <p className="text-[18px]">DigiX</p>
                           <p className="text-[13px] text-[#00000040]">Digital Product Shop</p>
                        </div>
                     </div>
                     <div className="h-[22px] w-px bg-[#00000066]" />
                     <div className="flex items-center gap-1 text-[13px] text-[#353535B5]">
                        <p>Copyright ©</p>
                        <p className="font-jakartaTextBold">Digix</p>
                        <p>2023 All Rights Reserved</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-8">
                     <div className="flex items-center gap-[6px]">
                        <div className="flex size-[38px] items-center justify-center rounded-full bg-customPink">
                           <Code1 size="22" color="#ffffff" variant="Bulk" />
                        </div>
                        <p className="flex h-[38px] items-center justify-center rounded-full bg-[#EF5A881A] px-3 text-xs">
                           Power By Kushk
                        </p>
                     </div>
                     <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                           width: '68px',
                           height: '68px',
                           borderRadius: '10px',
                        }}
                        onClick={goTopHandler}
                     >
                        <ArrowUp size="24" />
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
