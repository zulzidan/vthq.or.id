"use client";

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar position='sticky' className='z-50 bg-gradient-to-r from-green-600 flex to-green-800 border border-black py-6 md:px-4'>
                <NavbarBrand>
                    <Link href="/" className='flex gap-4 items-center'>
                        <Image src={Logo} alt={title} className='h-8 sm:h-10 lg:h-18 xl:h-20 w-auto' priority />
                        <p className='text-xs lg:text-base text-stone-50 leading-5 font-bold'>
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
                        <Link href="/"  className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/profil" className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Profil</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/akademik" className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Akademik</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/program" className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Program</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/artikel" className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Artikel</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/kegiatan" className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Kegiatan</Link>
                    </NavbarItem>
                    <NavbarItem>
                    <Link href="/ppdb"><Button className="bg-white hover:bg-yellow-500 hover:text-white text-xs xl:text-base text-black uppercase transition-colors duration-300 ease-in-out">Pendaftaran</Button></Link>
                    </NavbarItem>
                </NavbarContent>

                {/* Burger Menu for small screens */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-stone-50">
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>

                {/* Full-screen menu for mobile */}
                {isOpen && (
                    <div className="fixed inset-0 bg-gradient-to-b from-green-500 to-green-800 z-50 flex flex-col items-center justify-center gap-8 text-stone-50 text-sm">
                        <button 
                            onClick={toggleMenu}
                            className="absolute top-10 right-6 md:top-10 md:right-10 text-stone-50"
                        >
                            <AiOutlineClose size={30} />
                        </button>
                        <Link href="/" onClick={toggleMenu} className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Home</Link>
                        <Link href="/profil" onClick={toggleMenu} className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Profil</Link>
                        <Link href="/akademik" onClick={toggleMenu} className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Akademik</Link>
                        <Link href="/program" onClick={toggleMenu} className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Program</Link>
                        <Link href="/artikel" onClick={toggleMenu} className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Artikel</Link>
                        <Link href="/kegiatan" onClick={toggleMenu} className="hover:underline hover:text-yellow-500 transition-colors duration-300 ease-in-out">Kegiatan</Link>
                        <Link href="/ppdb"><Button className="bg-white hover:bg-yellow-500 text-black uppercase text-xs transition-colors duration-300 ease-in-out">Pendaftaran</Button></Link>
                    </div>
                )}
            </Navbar>
        </>
    );
};

export default Header;
