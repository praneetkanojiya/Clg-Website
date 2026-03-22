import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

const Page = forwardRef(({ number, imageSrc }, ref) => {
    return (
        <div className="bg-white shadow-2xl relative overflow-hidden h-full flex flex-col" ref={ref}>
            <div className="absolute inset-0 z-0">
                <Image
                    src={`/images/${imageSrc}`}
                    alt={`Brochure Page ${number}`}
                    fill
                    className="object-contain"
                    priority={number <= 2}
                />
            </div>
            <div className="absolute bottom-2 right-4 text-[10px] text-gray-400 font-bold bg-white/50 px-2 rounded-full z-10">
                {number}
            </div>
        </div>
    );
});

Page.displayName = 'Page';

const BrochureComponent = () => {
    // Current HD assets provided: 5 brochure pages, 2 pamphlet pages
    const brochurePages = [
        'hd_brochure_1.jpg',
        'hd_brochure_2.jpg',
        'hd_brochure_3.jpg',
        'hd_brochure_4.jpg',
        'hd_brochure_5.jpg'
    ];

    return (
        <div className="flex flex-col items-center py-12 bg-gray-50 min-h-[600px] w-full max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-black text-blue-900 mb-8 uppercase tracking-tighter">COLLEGE BROCHURE</h2>
            
            <div className="relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden border-[8px] border-white bg-white">
                <HTMLFlipBook 
                    width={450} 
                    height={650} 
                    size="stretch"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="brochure-book"
                >
                    {brochurePages.map((src, index) => (
                        <Page key={index} number={index + 1} imageSrc={src} />
                    ))}
                </HTMLFlipBook>
            </div>
            <p className="text-blue-900/40 mt-8 text-xs font-black uppercase tracking-[0.2em] animate-pulse">Drag corners to flip pages</p>
        </div>
    );
};

export default BrochureComponent;
