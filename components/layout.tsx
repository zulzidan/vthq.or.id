import React, { ReactNode } from 'react';
import Header from '../section/Header';
import Footer from '../section/Footer';
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
    variable: "--font-montserrat",
    weight: "variable",
    subsets: ["latin"],
});

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={`${montserrat.variable} font-sans  flex flex-col min-h-screen bg-stone-50 text-stone-950`}>
            <Header title='Pondok pesantren villa tahfizh Himmatul quran malino'/>
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;