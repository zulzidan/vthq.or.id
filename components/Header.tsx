"use client"

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from 'next/image';
import Logo from '@/public/logo.png';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {



    return (
        <>
            <Navbar position='sticky' className='z-50  bg-gradient-to-r from-green-600 to-green-800 border border-black py-6 px-4'>
                <NavbarBrand className=''>
                    <Link href={"/"} className='flex gap-4 w-1/2'> 
                        <Image src={Logo} alt={title} className='h-12 w-auto' />
                        <h1 className='text-lg text-stone-50 leading-5 font-bold'>
                            Pondok pesantren villa tahfizh 
                            <br />
                            Himmatul quran malino
                        </h1>
                    
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex uppercase text-stone-50 gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="/program">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        <Link href="/about-us">
                            Profil
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/berita">
                            Akademik
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/berita">
                            program
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/berita">
                            artikel 
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/berita">
                            kegiatan 
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button color="primary"  >
                            Pendaftaran
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
};

export default Header;