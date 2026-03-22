import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

const Page = forwardRef(({ number, imageSrc }, ref) => {
    return (
        <div className="bg-white shadow-2xl relative overflow-hidden h-full flex flex-col" ref={ref}>
            <div className="absolute inset-0 z-0">
                <Image
                    src={`/images/${imageSrc}`}
                    alt={`Pamphlet Page ${number}`}
                    fill
                    className="object-contain"
                    priority={true}
                />
            </div>
            <div className="absolute bottom-2 right-4 text-[10px] text-gray-400 font-bold bg-white/50 px-2 rounded-full z-10">
                {number}
            </div>
        </div>
    );
});

Page.displayName = 'Page';

const PamphletComponent = () => {
    return (
        <div className="flex flex-col items-center py-12 bg-white min-h-[600px] w-full max-w-5xl mx-auto px-4">
             <h2 className="text-3xl font-black text-blue-900 mb-2 uppercase tracking-tighter shadow-sm">COLLEGE PAMPHLET</h2>
            <div className="w-24 h-1 bg-red-600 mb-8 rounded-full"></div>
            
            <div className="relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden border-[12px] border-white bg-white">
                <HTMLFlipBook 
                    width={500} 
                    height={700} 
                    size="stretch"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.6}
                    showCover={false}
                    mobileScrollSupport={true}
                    className="pamphlet-book"
                >
                    <Page number={1} imageSrc="hd_pamphlet_1.jpg" />
                    <Page number={2} imageSrc="hd_pamphlet_2.jpg" />
                </HTMLFlipBook>
            </div>
            <p className="text-blue-900/40 mt-8 text-xs font-black uppercase tracking-[0.2em] animate-pulse">Experience Digital Excellence</p>
        </div>
    );
};

export default PamphletComponent;
