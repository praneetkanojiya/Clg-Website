import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

const Page = forwardRef(({ children, number, backgroundImage }, ref) => {
    return (
        <div className="bg-white shadow-2xl relative overflow-hidden h-full flex flex-col border border-gray-200" ref={ref}>
            {backgroundImage && (
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src={`/images/${backgroundImage}`}
                        alt={`Page ${number} Background`}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10">
                {children}
            </div>
            <div className="absolute bottom-2 right-4 text-xs text-gray-400 z-20">
                {number}
            </div>
        </div>
    );
});

Page.displayName = 'Page';

const BrochureComponent = () => {
    return (
        <div className="flex flex-col items-center py-12 bg-gray-100 min-h-[600px]">
            <h2 className="text-3xl font-black text-primary mb-8 uppercase tracking-tighter">COLLEGE BROCHURE</h2>
            
            <div className="relative shadow-2xl rounded-lg overflow-hidden border-4 border-white">
                <HTMLFlipBook 
                    width={400} 
                    height={600} 
                    size="stretch"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="demo-book"
                >
                    {/* Page 1: Cover */}
                    <Page number={1} backgroundImage="brochure_1.jpg">
                        <div className="h-full flex flex-col text-white rounded-lg p-6 relative overflow-hidden bg-blue-900/60 uppercase tracking-tight">
                            <div className="text-center mb-4">
                                <p className="text-[10px] font-semibold uppercase tracking-wider">Shree Sadguru Gajanan Bahuuddheshiya Sanstha's</p>
                                <p className="text-[10px]">(Government Approved)</p>
                            </div>
                            
                            <div className="flex justify-center mb-6">
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm border border-white/30">
                                    <div className="w-16 h-16 relative overflow-hidden rounded-full border-2 border-white bg-white shadow-lg">
                                        <Image
                                            src="http://latelkcollege.liveblog365.com/wp-content/uploads/2025/05/Navy-Gold-Modern-Circle-Class-Logo-150x150.png"
                                            alt="Logo"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-3xl font-black text-center mb-2 leading-tight drop-shadow-lg uppercase">LAXMILAL KANOJIYA</h1>
                            <h2 className="text-sm font-bold text-center mb-6 text-blue-100 uppercase tracking-widest leading-none">
                                Arts, Commerce & Science <br/> Junior College <br/> <span className="text-white italic text-md font-normal lowercase mt-1 block">Chankapur</span>
                            </h2>

                            <div className="space-y-3 mb-8 bg-blue-900/40 p-4 rounded-lg backdrop-blur-xs border border-white/10 normal-case shadow-inner">
                                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                    <span className="font-bold">Arts</span>
                                    <span className="text-sm">- English Medium</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                    <span className="font-bold">Commerce</span>
                                    <span className="text-sm">- English Medium</span>
                                </div>
                                <div className="flex justify-between items-center pb-1">
                                    <span className="font-bold">Science</span>
                                    <span className="text-sm">- English Medium</span>
                                </div>
                            </div>

                            <div className="bg-white text-blue-800 p-3 rounded-lg text-center font-bold mb-8 shadow-lg">
                                <p className="text-sm">Integrated Course For</p>
                                <p className="text-[10px]">JEE / NEET / MH-CET / KVPY / NTSE</p>
                            </div>

                            <div className="mt-auto text-center">
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 bg-yellow-400 rotate-3 rounded blur-sm opacity-50"></div>
                                    <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 px-6 py-2 rounded-full font-black text-xl border-2 border-red-700 shadow-xl transform -rotate-2">
                                        Admission Open
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 2: Chairman's Message */}
                    <Page number={2} backgroundImage="brochure_2.jpg">
                        <div className="h-full flex flex-col bg-white/40 p-2 rounded shadow-sm">
                            <h3 className="text-red-600 font-bold mb-4 text-center border-b-2 border-red-200 pb-2 bg-white/60 p-1 rounded-t">
                                <span className="text-gray-700 block text-xs mb-1 uppercase tracking-widest">Chairman of S.S.G.B.S.</span>
                                🎓 AJAY L. KANOJIYA
                            </h3>
                            <div className="text-[12px] text-gray-800 space-y-3 mb-6 font-serif italic leading-relaxed text-center bg-white/80 p-3 rounded shadow-inner">
                                <p>"On behalf of the staff, Pupils & governors, I would like to welcome you & your family to Laxmilal Kanojiya Arts, Commerce & Science Jr. College, Chankapur."</p>
                                <p>"Our Primary aim is to work together to inspire every Student to achieve & learn to their potential within a happy, Secure, Exciting & challenging environment."</p>
                            </div>
                            <div className="mt-auto grid grid-cols-2 gap-2 opacity-80 scale-95 origin-bottom">
                                <div className="h-28 bg-blue-100 rounded-md flex items-center justify-center border border-blue-200">
                                    <span className="text-4xl">🏅</span>
                                </div>
                                <div className="h-28 bg-amber-100 rounded-md flex items-center justify-center border border-amber-200">
                                    <span className="text-4xl">📖</span>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 3: Our Aim */}
                    <Page number={3} backgroundImage="brochure_3.jpg">
                        <div className="h-full flex flex-col bg-orange-50/60 p-2 border border-orange-100 rounded shadow-sm overflow-hidden">
                            <div className="bg-orange-600 text-white py-2 px-6 rounded-r-full -ml-6 mb-8 shadow-xl border-l-4 border-orange-800">
                                <h3 className="text-xl font-black italic tracking-tighter">OUR AIM:</h3>
                            </div>
                            <ul className="space-y-4 flex-1">
                                {[
                                    "To improve education standards of Rural Students",
                                    "To inspire life-long learning",
                                    "To provide equal opportunities to excel",
                                    "To foster overall personality development"
                                ].map((aim, i) => (
                                    <li key={i} className="flex items-start bg-white/80 p-2 rounded border border-orange-200 shadow-sm">
                                        <span className="text-orange-600 mr-2 mt-0.5">⭐</span>
                                        <p className="text-xs font-bold text-gray-800 leading-snug">{aim}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <div className="bg-red-600/90 text-white p-3 rounded-xl border-2 border-dashed border-white shadow-2xl text-center">
                                    <p className="font-black text-[10px] uppercase">Scholarship For</p>
                                    <p className="font-black text-lg">SC / ST / OBC / VJNT</p>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 4: Documents Required */}
                    <Page number={4} backgroundImage="brochure_4.jpg">
                        <div className="h-full flex flex-col bg-blue-900/50 p-1 border border-blue-300 rounded shadow-inner">
                            <h3 className="bg-blue-900 text-white text-center py-2 text-sm font-black mb-4 rounded-sm shadow-lg border-b-2 border-blue-400 uppercase tracking-widest">Required Documents</h3>
                            <div className="space-y-4 text-[11px] flex-1">
                                <div className="bg-white/90 p-3 rounded border border-blue-200 shadow-md">
                                    <p className="font-black underline text-blue-900 mb-2 uppercase">Admission Checklist:</p>
                                    <ul className="space-y-1.5 list-disc list-inside text-gray-900 font-bold px-1">
                                        <li>Leaving Cert (Original + Copy)</li>
                                        <li>SSC Mark Sheet (Copy)</li>
                                        <li>Aadhar Card (Copy)</li>
                                        <li>2 Passport Photos</li>
                                        <li>Caste Certificate (if any)</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-400/90 p-2 rounded-md border-2 border-yellow-600 shadow-md transform rotate-1">
                                    <p className="font-black text-red-900 text-center uppercase leading-none">Eligibility for Other Boards</p>
                                    <p className="text-[9px] text-red-800 text-center font-bold">CBSE / ICSE / Other State</p>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 5: Rules & Regulation */}
                    <Page number={5} backgroundImage="brochure_5.jpg">
                        <div className="h-full flex flex-col bg-blue-800/60 text-white rounded-lg p-4 shadow-inner border border-white/20">
                            <h3 className="text-yellow-400 text-xl font-black mb-1 border-b-2 border-white/30 pb-1 flex items-center uppercase">
                                <span className="mr-2">📋</span> Rules
                            </h3>
                            <p className="text-[10px] mb-4 italic opacity-90 leading-tight bg-blue-900/50 p-1 rounded">Compliance with college rules is mandatory.</p>
                            
                            <ol className="space-y-3 text-xs mb-6 font-bold flex-1">
                                {[
                                    "Timely payment of College dues.",
                                    "Minimum required attendance.",
                                    "Ethical conduct on campus.",
                                    "No damage to school property.",
                                    "Follow teacher's instructions."
                                ].map((rule, i) => (
                                    <li key={i} className="flex items-start bg-blue-900/40 p-2 rounded border border-white/10 shadow-sm">
                                        <span className="text-yellow-400 mr-2">{i+1}.</span>
                                        <p>{rule}</p>
                                    </li>
                                ))}
                            </ol>
                            
                            <div className="mt-auto overflow-hidden rounded-lg border-2 border-white/40 shadow-xl h-28 bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <div className="text-center p-2">
                                    <span className="text-3xl block">🏛️</span>
                                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Campus Pride</span>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 6: Last Page / Refund Policy */}
                    <Page number={6} backgroundImage="brochure_6.jpg">
                        <div className="h-full flex flex-col bg-red-700/60 text-white rounded-lg p-6 relative shadow-inner border border-white/20">
                            <div className="border-4 border-white p-3 text-center rounded-lg mb-8 bg-black/40 backdrop-blur-sm shadow-2xl transform -rotate-1">
                                <p className="text-yellow-400 font-black uppercase tracking-tight text-md">Fees Non-Refundable</p>
                                <p className="text-[10px] uppercase font-bold opacity-80">Under any circumstances</p>
                            </div>

                            <div className="flex flex-col items-center mb-12 bg-white/10 p-4 rounded-3xl backdrop-blur-md border border-white/20 shadow-xl">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 mb-4 shadow-lg">
                                     <Image
                                            src="http://latelkcollege.liveblog365.com/wp-content/uploads/2025/05/Navy-Gold-Modern-Circle-Class-Logo-150x150.png"
                                            alt="Logo"
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                </div>
                                <h4 className="text-center font-black text-2xl leading-tight uppercase tracking-tighter">L.K. COLLEGE</h4>
                                <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Arts Commerce & Science</p>
                            </div>

                            <div className="mt-auto text-center border-t border-white/30 pt-4">
                                <p className="text-xl font-black italic">Shape Your Future With Us</p>
                            </div>
                        </div>
                    </Page>
                </HTMLFlipBook>
            </div>
            <p className="text-gray-500 mt-6 text-sm font-bold uppercase tracking-widest animate-pulse">Drag corners to turn pages</p>
        </div>
    );
};

export default BrochureComponent;
