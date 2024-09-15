"use client";

import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import Icon

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol menu burger

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar position='sticky' className='z-50 bg-gradient-to-r from-green-600 flex to-green-800 border border-black py-6 md:px-4'>
                <NavbarBrand>
                    <Link href="/" className='flex gap-4 items-center'>
                        <Image src={Logo} alt={title} className='h-8 sm:h-10 lg:h-18 xl:h-20 w-auto' priority />
                        <p className='text-xs lg:text-lg text-stone-50 leading-5 font-bold'>
                        معهد همة القرآن لتحفيظ القرآن بمالينو
                            <br />
                            Pondok Pesantren Villa Tahfizh 
                            <br />
                            Himmatul Quran Malino
                        </p>
                    </Link>
                </NavbarBrand>
                
                {/* Content for larger screens */}
                <NavbarContent className="hidden text-base xl:text-lg lg:flex uppercase text-stone-50 gap-4">
                    <NavbarItem>
                        <Link href="/program">Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/about-us">Profil</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/berita">Akademik</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/program">Program</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/artikel">Artikel</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/kegiatan">Kegiatan</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button color="primary">
                            Pendaftaran
                        </Button>
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
                    <div className="fixed inset-0 bg-gradient-to-b from-green-500 to-green-800 z-50 flex flex-col items-center justify-center gap-8 text-stone-50 text-xl">
                        <button 
                            onClick={toggleMenu}
                            className="absolute top-10 right-6 md:top-10 md:right-10 text-stone-50"
                        >
                            <AiOutlineClose size={30} />
                        </button>
                        <Link href="/program" onClick={toggleMenu}>Home</Link>
                        <Link href="/about-us" onClick={toggleMenu}>Profil</Link>
                        <Link href="/berita" onClick={toggleMenu}>Akademik</Link>
                        <Link href="/program" onClick={toggleMenu}>Program</Link>
                        <Link href="/artikel" onClick={toggleMenu}>Artikel</Link>
                        <Link href="/kegiatan" onClick={toggleMenu}>Kegiatan</Link>
                        <Button color="primary" onClick={toggleMenu}>
                            Pendaftaran
                        </Button>
                    </div>
                )}
            </Navbar>
        </>
    );
};

export default Header;
