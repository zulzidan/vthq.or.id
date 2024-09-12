import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Montserrat } from 'next/font/google'
import CallToAction from './Cta';
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
            <main className="flex-grow p-4">
                {children}
            </main>
            <CallToAction/>
            <Footer />
        </div>
    );
};

export default Layout;