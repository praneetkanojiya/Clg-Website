import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

const Page = forwardRef(({ children, number, backgroundImage }, ref) => {
    return (
        <div className="bg-white shadow-2xl relative overflow-hidden h-full flex flex-col border border-gray-100" ref={ref}>
             {backgroundImage && (
                <div className="absolute inset-0 z-0 opacity-80">
                    <Image
                        src={`/images/${backgroundImage}`}
                        alt={`Pamphlet Page ${number}`}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 relative z-10">
                {children}
            </div>
            <div className="absolute bottom-2 right-4 text-[10px] text-gray-500 font-bold z-20">
                {number}
            </div>
        </div>
    );
});

Page.displayName = 'Page';

const TopperCard = ({ rank, name, percentage, emoji }) => (
    <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm p-2 rounded-xl border-2 border-blue-100 shadow-lg transform hover:scale-105 transition-transform">
        <div className="w-16 h-16 bg-blue-50 rounded-full mb-2 flex items-center justify-center text-3xl border-4 border-blue-900 relative shadow-inner">
            {emoji}
            {rank && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-blue-900 shadow-md">
                    {rank}
                </div>
            )}
        </div>
        <p className="text-[11px] font-black text-blue-900 text-center leading-tight uppercase tracking-tighter">{name}</p>
        <p className="text-[12px] font-black text-red-600 bg-red-50 px-2 rounded-full mt-1 border border-red-100">{percentage}</p>
    </div>
);

const PamphletComponent = () => {
    return (
        <div className="flex flex-col items-center py-12 bg-white min-h-[600px] w-full max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-black text-blue-900 mb-2 uppercase tracking-tighter shadow-sm">COLLEGE PAMPHLET</h2>
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
                    {/* Page 1: Front - 100% Results & Top Rankers */}
                    <Page number={1} backgroundImage="pamphlet_front.jpg">
                        <div className="h-full flex flex-col">
                            <div className="text-center mb-6 bg-blue-900/90 backdrop-blur-md text-white p-4 rounded-2xl border-2 border-white/20 shadow-2xl">
                                <p className="text-[10px] uppercase font-black tracking-widest opacity-80 mb-2">Shree Sadguru Gajanan Bahuuddheshiya Sanstha's</p>
                                <h3 className="text-2xl font-black leading-tight tracking-tighter uppercase mb-1">LAXMILAL KANOJIYA</h3>
                                <p className="text-sm font-bold uppercase text-yellow-400 tracking-widest">COMMERCE & SCIENCE JR. COLLEGE</p>
                            </div>

                            <div className="flex justify-between items-center mb-8 px-2">
                                <div className="bg-red-600 text-white px-6 py-4 rounded-2xl transform -rotate-12 shadow-[0_10px_20px_rgba(220,38,38,0.4)] border-4 border-white animate-pulse">
                                    <span className="text-4xl font-black block leading-none">100%</span>
                                    <span className="block text-xs font-black uppercase tracking-widest mt-1">SUCCESS</span>
                                </div>
                                <div className="text-right bg-white/80 p-3 rounded-2xl border border-blue-100 shadow-lg">
                                    <p className="text-blue-900 font-black italic text-md leading-tight">"Best College in Region"</p>
                                    <p className="text-red-700 font-black uppercase text-xs mt-1">Consistently Top Results</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <TopperCard rank="1st" name="Rutuj Ghungrud" percentage="91.83%" emoji="🤴" />
                                <TopperCard rank="2nd" name="Ritika Trivedi" percentage="91.17%" emoji="👸" />
                                <TopperCard rank="3rd" name="Musfera Ansari" percentage="91.00%" emoji="👸" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-blue-900/10 backdrop-blur-xs p-4 rounded-2xl border-2 border-blue-900 shadow-inner">
                                    <p className="font-black text-blue-900 text-sm mb-2 border-b-2 border-blue-900/20 pb-1">XI-XII SCIENCE</p>
                                    <ul className="text-[11px] text-blue-900 font-black space-y-1">
                                        <li>⭐ COMPUTER SCIENCE</li>
                                        <li>⭐ IT / FISHERIES</li>
                                        <li>⭐ GENERAL SCIENCE</li>
                                    </ul>
                                </div>
                                <div className="bg-red-600/10 backdrop-blur-xs p-4 rounded-2xl border-2 border-red-600 shadow-inner">
                                    <p className="font-black text-red-900 text-sm mb-2 border-b-2 border-red-900/20 pb-1">XI-XII COMMERCE</p>
                                    <ul className="text-[11px] text-red-900 font-black space-y-1">
                                        <li>⭐ COMMERCE WITH IT</li>
                                        <li>⭐ COMMERCE BASIC</li>
                                        <li>⭐ ENGLISH MEDIUM</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-auto bg-blue-900 text-white p-3 rounded-2xl text-center shadow-2xl border-2 border-white/20">
                                <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">NEAR MILAN CHOWK, KHAPERKHEDA ROAD</p>
                                <p className="text-yellow-400 font-black text-lg animate-bounce mt-2 tracking-tighter">FLIP FOR TOPPER LIST ➔</p>
                            </div>
                        </div>
                    </Page>

                    {/* Page 2: Back - More Toppers & Contact */}
                    <Page number={2} backgroundImage="pamphlet_back.jpg">
                        <div className="h-full flex flex-col">
                            <div className="flex items-center justify-center mb-6">
                                <div className="h-px bg-blue-200 flex-1"></div>
                                <h4 className="mx-4 text-blue-900 font-black text-2xl uppercase tracking-tighter italic shadow-sm">OUR PRIDE</h4>
                                <div className="h-px bg-blue-200 flex-1"></div>
                            </div>

                            <div className="grid grid-cols-4 gap-3 mb-8 flex-1 overflow-y-auto pr-1">
                                {[
                                    "Shruti Misal", "Vanshika K.", "Sonal Shukla", "Ersheen K.",
                                    "Aboli Dodal", "Tanisha N.", "Amit Thoke", "Ansh N.",
                                    "Manav Fale", "Vaishnavi T.", "Riya Meshram", "Himanshu G.",
                                    "Anshum K.", "Vaishnavi K.", "Jitisha Badge", "Shreya M."
                                ].map((name, i) => (
                                    <div key={i} className="flex flex-col items-center bg-white/95 rounded-xl p-2 border border-blue-100 shadow-md hover:border-blue-500 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-blue-900 mb-2 flex items-center justify-center text-white border-2 border-white shadow-inner">
                                            🎓
                                        </div>
                                        <p className="text-[9px] font-black text-center text-blue-900 uppercase leading-none truncate w-full">{name}</p>
                                        <div className="w-full h-0.5 bg-blue-100 my-1"></div>
                                        <p className="text-[10px] font-black text-red-600">85%+</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-yellow-400 p-4 rounded-2xl shadow-xl mb-6 flex justify-between items-center border-4 border-white transform hover:rotate-1 transition-transform">
                                <div className="flex items-center">
                                    <div className="bg-blue-900 text-white p-2 rounded-xl mr-3">📞</div>
                                    <div>
                                        <p className="text-xs font-black text-blue-900 uppercase leading-none">Admission Prospectus</p>
                                        <p className="text-[10px] font-bold text-blue-800">9:00 am to 12 pm</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-black text-red-700 tracking-tighter">9527-13-3033</p>
                                </div>
                            </div>

                            <div className="mt-auto border-t-4 border-blue-900/10 pt-6 text-center">
                                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl border-2 border-blue-100 shadow-lg mb-6">
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">OFFICE ADDRESS</p>
                                    <p className="text-[11px] font-black text-blue-900 leading-tight">
                                        L.K. JR. COLLEGE, RUKHMINI NAGAR, NEAR MILAN CHOWK,<br/>
                                        KHAPERKHEDA, DAHEGAON (R) ROAD.
                                    </p>
                                </div>
                                <div className="bg-blue-900 text-white p-4 rounded-3xl border-4 border-white shadow-[0_15px_30px_rgba(30,58,138,0.4)] transform hover:-translate-y-1 transition-transform">
                                    <p className="text-sm font-black uppercase tracking-tighter">
                                        ADMISSION HELPLINE: 9822-88-9413
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Page>
                </HTMLFlipBook>
            </div>
            <p className="text-blue-900/40 mt-6 text-xs font-black uppercase tracking-[0.2em] animate-pulse">Experience Digital Excellence</p>
        </div>
    );
};

export default PamphletComponent;
