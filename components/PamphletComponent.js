import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Page = forwardRef(({ children, number }, ref) => {
    return (
        <div className="bg-white shadow-xl relative overflow-hidden h-full flex flex-col border border-gray-100" ref={ref}>
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
                {children}
            </div>
            <div className="absolute bottom-2 right-4 text-[10px] text-gray-300">
                {number}
            </div>
        </div>
    );
});

Page.displayName = 'Page';

const TopperCard = ({ rank, name, percentage, emoji }) => (
    <div className="flex flex-col items-center bg-white p-2 rounded-lg border border-blue-100 shadow-sm transform hover:scale-105 transition-transform">
        <div className="w-16 h-16 bg-gray-100 rounded-full mb-2 flex items-center justify-center text-2xl border-2 border-blue-500 relative">
            {emoji}
            {rank && (
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-blue-900 text-[8px] font-black px-1 rounded-full border border-blue-900">
                    {rank}
                </div>
            )}
        </div>
        <p className="text-[10px] font-bold text-blue-900 text-center leading-tight">{name}</p>
        <p className="text-[10px] font-black text-red-600">{percentage}</p>
    </div>
);

const PamphletComponent = () => {
    return (
        <div className="flex flex-col items-center py-12 bg-white min-h-[600px] w-full max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-2 uppercase tracking-tighter">College Pamphlet</h2>
            <p className="text-gray-500 mb-8 font-medium">Celebrating Our Academic Success</p>
            
            <div className="relative shadow-2xl rounded-xl overflow-hidden border-8 border-gray-50 bg-gray-50">
                <HTMLFlipBook 
                    width={500} 
                    height={700} 
                    size="stretch"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={false}
                    mobileScrollSupport={true}
                    className="pamphlet-book"
                >
                    {/* Page 1: Front - 100% Results & Top Rankers */}
                    <Page number={1}>
                        <div className="h-full flex flex-col">
                            <div className="text-center mb-4 bg-blue-900 text-white p-3 rounded-lg uppercase">
                                <p className="text-[10px] uppercase font-bold tracking-widest opacity-80 mb-1">Shree Sadguru Gajanan Bahuuddheshiya Sanstha's</p>
                                <h3 className="text-xl font-black leading-tight tracking-tighter uppercase">LAXMILAL KANOJIYA</h3>
                                <p className="text-xs font-bold uppercase text-blue-200">Commerce & Science Jr. College</p>
                            </div>

                            <div className="flex justify-between items-center mb-6 px-2">
                                <div className="bg-red-600 text-white px-4 py-2 rounded-full transform -rotate-12 shadow-lg border-2 border-white">
                                    <span className="text-xl font-black">100%</span>
                                    <span className="block text-[8px] font-bold uppercase">Results</span>
                                </div>
                                <div className="text-right">
                                    <p className="text-blue-900 font-black italic text-sm">"The Best Jr. College in our region"</p>
                                    <p className="text-red-600 font-bold uppercase text-[10px]">Delivers best result</p>
                                </div>
                            </div>

                            <div className="text-center mb-4">
                                <h4 className="text-xl font-black text-blue-900 uppercase leading-none mb-1">CONGRATULATIONS</h4>
                                <p className="text-xs font-bold text-gray-600">to the Successful Students of 2022</p>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-6">
                                <TopperCard rank="1st" name="Rutuj Ghungrud" percentage="91.83%" emoji="👨‍🎓" />
                                <TopperCard rank="2nd" name="Ritika Trivedi" percentage="91.17%" emoji="👩‍🎓" />
                                <TopperCard rank="3rd" name="Musfera Ansari" percentage="91.00%" emoji="👩‍🎓" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-blue-50 p-2 rounded-lg border-l-4 border-blue-900">
                                    <p className="font-black text-blue-900 text-xs mb-1">XI-XII (SCIENCE)</p>
                                    <ul className="text-[9px] text-blue-800 font-bold space-y-0.5">
                                        <li>• Computer Science</li>
                                        <li>• Fisheries</li>
                                        <li>• Information Tech (IT)</li>
                                        <li>• General Science</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-50 p-2 rounded-lg border-l-4 border-orange-600">
                                    <p className="font-black text-orange-900 text-xs mb-1">XI-XII (COMMERCE)</p>
                                    <ul className="text-[9px] text-orange-800 font-bold space-y-0.5">
                                        <li>• English Medium</li>
                                        <li>• Commerce Basic</li>
                                        <li>• Commerce with IT</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-auto bg-gray-100 p-2 rounded text-center border-t border-gray-200">
                                <p className="text-[9px] font-bold text-gray-700">ADDRESS: NEAR MILAN CHOWK, DAHEGAON-KHAPERKHEDA ROAD.</p>
                                <p className="text-red-600 font-black text-[10px] animate-pulse">➔ Please Turn The Page</p>
                            </div>
                        </div>
                    </Page>

                    {/* Page 2: Back - More Toppers & Contact */}
                    <Page number={2}>
                        <div className="h-full flex flex-col">
                            <h4 className="text-center text-blue-900 font-black text-lg italic mb-4">Our Pride</h4>
                            <div className="grid grid-cols-4 gap-2 mb-6 flex-1 overflow-y-auto pr-1">
                                {[
                                    { name: "Shruti Misal", p: "89.50%" },
                                    { name: "Vanshika K.", p: "89.17%" },
                                    { name: "Sonal Shukla", p: "88.83%" },
                                    { name: "Ersheen K.", p: "88.67%" },
                                    { name: "Aboli Dodal", p: "88.00%" },
                                    { name: "Tanisha N.", p: "87.83%" },
                                    { name: "Amit Thoke", p: "87.17%" },
                                    { name: "Ansh N.", p: "87.00%" },
                                    { name: "Manav Fale", p: "87.00%" },
                                    { name: "Vaishnavi T.", p: "87.00%" },
                                    { name: "Riya Meshram", p: "86.50%" },
                                    { name: "Himanshu G.", p: "86.50%" },
                                    { name: "Anshum K.", p: "86.33%" },
                                    { name: "Vaishnavi K.", p: "86.17%" },
                                    { name: "Jitisha Badge", p: "85.83%" },
                                    { name: "Shreya M.", p: "85.67%" },
                                ].map((topper, i) => (
                                    <div key={i} className="flex flex-col items-center bg-gray-50 rounded p-1 border border-gray-100">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 mb-1 flex items-center justify-center text-[8px]">👤</div>
                                        <p className="text-[7px] font-bold text-center leading-tight truncate w-full">{topper.name}</p>
                                        <p className="text-[7px] font-black text-blue-700">{topper.p}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-yellow-400 p-3 rounded-lg shadow-inner mb-4 flex justify-between items-center">
                                <div>
                                    <p className="text-[10px] font-black text-blue-900 uppercase leading-none">Admission Prospectus</p>
                                    <p className="text-[8px] font-bold text-blue-800">Available: 9:00 am to 12 pm</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-black text-red-700">9527-13-3033</p>
                                </div>
                            </div>

                            <div className="mt-auto border-t-2 border-dashed border-gray-300 pt-4 text-center">
                                <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-1">Office Address</p>
                                <p className="text-[9px] font-extrabold text-blue-900 mb-4 leading-tight">
                                    L.K. Jr. College, Rukhmini Nagar, Near Milan Chowk,<br/>
                                    Khaperkheda, Dahegaon (R), Road.
                                </p>
                                <div className="bg-blue-900 text-white p-2 rounded-full inline-block px-6 border-2 border-white shadow-md">
                                    <p className="text-[10px] font-black tracking-tighter">
                                        CONTACT: +91 9822-88-9413 / 9011-47-5663
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Page>
                </HTMLFlipBook>
            </div>
            <p className="text-gray-400 mt-4 text-[10px] uppercase tracking-widest">Flip to see more toppers and contact info</p>
        </div>
    );
};

export default PamphletComponent;
