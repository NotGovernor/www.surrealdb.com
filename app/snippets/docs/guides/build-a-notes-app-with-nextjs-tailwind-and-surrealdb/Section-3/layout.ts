import { Footer } from '@/components/footer';
 import { Navbar } from '@/components/navbar';
 import { cn } from '@/lib/utils';
 import { Poppins } from 'next/font/google';
 import React from 'react';
 import './globals.css';

 // ...

 export default function RootLayout({
     children,
 }: {
     children: React.ReactNode;
 }) {
     return (
         <html lang="en">
             <body
                 className={cn(
                     'flex h-screen flex-col bg-dots',
                     poppins.className
                 )}
             >
                 <div className="mx-auto flex w-full max-w-screen-xl flex-grow flex-col px-8 sm:px-24">
                     <Navbar />
                     {/* We use the content of the page to grow so that the footer is always down the bottom */}
                     <div className="flex-grow">{children}</div>
                     <Footer />
                 </div>
             </body>
         </html>
     );
 }