import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";


interface HeaderProps {
  title: string;
}

const HeaderWithSheet: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <Navbar
        position="sticky"
        className="z-50 bg-gradient-to-r from-green-600 flex font-sans to-green-800 border border-black py-6 md:px-4"
      >
        <NavbarBrand>
          <Link href="/" className="flex gap-4 items-center">
            <Image
              src={Logo}
              alt={title}
              className="h-8 sm:h-10 lg:h-18 xl:h-20 w-auto"
              priority
            />
            <p className="text-xs lg:text-base text-stone-50 leading-5 font-bold">
              معهد همة القرآن لتحفيظ القرآن بمالينو
              <br />
              Pondok Pesantren Villa Tahfizh
              <br />
              Himmatul Quran Malino
            </p>
          </Link>
        </NavbarBrand>

        {/* Content for larger screens */}
        <NavbarContent className="hidden text-xs xl:text-base lg:flex uppercase text-stone-50 gap-4">
          <NavbarItem>
            <Link
              href="/"
              className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/profil"
              className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            >
              Profil
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/akademik"
              className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            >
              Akademik
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/program"
              className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            >
              Program
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/artikel"
              className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            >
              Artikel
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/kegiatan"
              className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            >
              Kegiatan
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/ppdb">
              <Button className="bg-white hover:bg-yellow-500 hover:text-white text-xs xl:text-base text-black uppercase transition-colors duration-300 ease-in-out">
                Pendaftaran
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* mobile menu item  navigasion*/}
        <Sheet>
          <SheetTrigger asChild>
            <div className="lg:hidden flex items-center text-stone-50">
              <AiOutlineMenu size={24} />
            </div>
          </SheetTrigger>

          <SheetContent aria-describedby={undefined} className="bg-gradient-to-b from-green-500 to-green-800 z-50 font-sans flex flex-col items-center text-transparent  justify-center  gap-8 text-sm">
          <VisuallyHidden.Root>
            <SheetTitle></SheetTitle>
          </VisuallyHidden.Root>
            <SheetClose asChild>
              <div className="absolute top-10 right-6 md:top-10 md:right-10 text-stone-50">
                <AiOutlineClose size={24} />
              </div>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/"
                className="hover:underline hover:text-yellow-500 uppercase font-sans transition-colors duration-300 text-stone-50 ease-in-out"
              >
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/profil"
                className="hover:underline hover:text-yellow-500 uppercase font-sans transition-colors duration-300 text-stone-50 ease-in-out"
              >
                Profil
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/akademik"
                className="hover:underline hover:text-yellow-500 transition-colors uppercase font-sans duration-300 text-stone-50 ease-in-out"
              >
                Akademik
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/program"
                className="hover:underline hover:text-yellow-500 transition-colors uppercase font-sans duration-300 text-stone-50 ease-in-out"
              >
                Program
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/artikel"
                className="hover:underline hover:text-yellow-500 transition-colors uppercase font-sans duration-300 text-stone-50 ease-in-out"
              >
                Artikel
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/kegiatan"
                className="hover:underline hover:text-yellow-500 transition-colors uppercase font-sans duration-300 text-stone-50 ease-in-out"
              >
                Kegiatan
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/ppdb">
                <Button className="bg-white hover:bg-yellow-500 text-black uppercase font-sans text-xs transition-colors duration-300 ease-in-out">
                  Pendaftaran
                </Button>
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </Navbar>
    </>
  );
};

export default HeaderWithSheet;
