import React, { forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Page = forwardRef(({ children, number }, ref) => {
    return (
        <div className="bg-white shadow-2xl relative overflow-hidden h-full flex flex-col border border-gray-200" ref={ref}>
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
                {children}
            </div>
            <div className="absolute bottom-2 right-4 text-xs text-gray-400">
                {number}
            </div>
        </div>
    );
});

Page.displayName = 'Page';

const BrochureComponent = () => {
    return (
        <div className="flex flex-col items-center py-12 bg-gray-100 min-h-[600px]">
            <h2 className="text-3xl font-bold text-primary mb-8">College Brochure</h2>
            
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
                    <Page number={1}>
                        <div className="h-full flex flex-col text-white rounded-lg p-6 relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 uppercase tracking-tight">
                            <div className="text-center mb-4">
                                <p className="text-[10px] font-semibold uppercase tracking-wider">Shree Sadguru Gajanan Bahuuddheshiya Sanstha's</p>
                                <p className="text-[10px]">(Government Approved)</p>
                            </div>
                            
                            <div className="flex justify-center mb-6">
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm border border-white/30">
                                    <div className="w-16 h-16 relative overflow-hidden rounded-full border-2 border-white bg-white">
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

                            <div className="space-y-3 mb-8 bg-white/10 p-4 rounded-lg backdrop-blur-xs border border-white/10 normal-case">
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

                            <div className="bg-white text-blue-800 p-3 rounded-lg text-center font-bold mb-8 shadow-inner">
                                <p className="text-sm">Integrated Course For</p>
                                <p className="text-[10px]">JEE / NEET / MH-CET / KVPY / NTSE</p>
                            </div>

                            <div className="mt-auto text-center">
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 bg-yellow-400 rotate-3 rounded blur-sm opacity-50"></div>
                                    <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 px-6 py-2 rounded-full font-black text-xl border-2 border-red-700 shadow-lg transform -rotate-2">
                                        Admission Open
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 2: Chairman's Message */}
                    <Page number={2}>
                        <div className="h-full flex flex-col">
                            <h3 className="text-red-600 font-bold mb-4 text-center border-b-2 border-red-100 pb-2">
                                <span className="text-gray-700 block text-sm mb-1 uppercase tracking-widest">Chairman of S.S.G.B.S.</span>
                                Shri AJAY L. KANOJIYA
                            </h3>
                            <div className="text-[13px] text-gray-700 space-y-3 mb-6 font-serif italic leading-relaxed text-center">
                                <p>"On behalf of the staff, Pupils & governors, I would like to welcome you & your family to Laxmilal Kanojiya Arts, Commerce & Science Jr. College, Chankapur."</p>
                                <p>"Our Primary aim is to work together to inspire every Student to achieve & learn to their potential within a happy, Secure, Exciting & challenging environment."</p>
                                <p>"We Strongly believe that school is a partnership between children, parents, teacher & governors & that by working together we can enable & motivate our students to succeed in all areas of development."</p>
                            </div>
                            <div className="mt-auto grid grid-cols-2 gap-2">
                                <div className="h-28 bg-gray-200 rounded-md flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                                        <span className="text-white text-[10px] font-bold">Sports Excellence</span>
                                    </div>
                                    <div className="text-4xl">⚽</div>
                                </div>
                                <div className="h-28 bg-gray-200 rounded-md flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                                        <span className="text-white text-[10px] font-bold">Modern Library</span>
                                    </div>
                                    <div className="text-4xl">📚</div>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 3: Our Aim */}
                    <Page number={3}>
                        <div className="h-full flex flex-col bg-orange-50/30 p-2 border border-orange-100 rounded">
                            <div className="bg-orange-600 text-white py-2 px-6 rounded-r-full -ml-6 mb-8 shadow-md">
                                <h3 className="text-xl font-black italic tracking-tighter">OUR AIM :</h3>
                            </div>
                            <ul className="space-y-6 flex-1">
                                {[
                                    "To put sincere efforts to improve the education standard of Students of Rural areas",
                                    "To inspire life long learning",
                                    "To Provide each student with an equal opportunity to deliver to his or her full potential academically, spiritually socially & emotionally",
                                    "Make our students to understand the importance of education with over all personality development for competitive world."
                                ].map((aim, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-blue-600 mr-2 mt-1">➤</span>
                                        <p className="text-sm font-medium text-gray-800 leading-snug">{aim}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto">
                                <div className="relative mx-auto w-48 h-24 flex items-center justify-center text-center">
                                    <div className="absolute inset-0 bg-red-600 rounded-[50%] animate-pulse opacity-20"></div>
                                    <div className="relative border-4 border-dashed border-red-600 p-2 rounded-xl">
                                        <p className="text-red-700 font-black text-sm uppercase">Scholarship For</p>
                                        <p className="text-red-800 font-black text-lg">SC/ST/OBC/SBC/VJNT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 4: Documents Required */}
                    <Page number={4}>
                        <div className="h-full flex flex-col bg-blue-50/30 p-1 border border-blue-100 rounded">
                            <h3 className="bg-blue-800 text-white text-center py-2 text-sm font-bold mb-4 rounded-sm shadow-sm">Documents Required for Admission</h3>
                            <div className="space-y-4 text-[11px] flex-1">
                                <div>
                                    <p className="font-bold underline text-blue-900 mb-2">General Requirements:</p>
                                    <ul className="space-y-1 list-decimal list-inside text-gray-800 pl-2">
                                        <li>Leaving Certificate (Original + Photo Copy)</li>
                                        <li>Mark Sheet of SSC or XIth Std. (Photo Copy)</li>
                                        <li>Aadhar Card (Photo Copy)</li>
                                        <li>Two Passport size photograph</li>
                                        <li>Caste Certificate if available Etc.</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-100 p-2 rounded-md border border-yellow-200">
                                    <p className="font-medium text-amber-900 italic">Eligibility process for Students from other State / National / Board (CBSE, ICSE etc.)</p>
                                </div>
                                <div>
                                    <p className="font-bold underline text-blue-900 mb-2 uppercase">Required with Board Office Form:</p>
                                    <ul className="space-y-1 list-decimal list-inside text-gray-800 pl-2">
                                        <li>Leaving Certificate with Countersign (Photocopy)</li>
                                        <li>Mark Sheet/ Grade Sheet (Photocopy)</li>
                                        <li>Deed of Undertaking</li>
                                        <li>Migration certificate (Original + Photocopy)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 5: Rules & Regulation */}
                    <Page number={5}>
                        <div className="h-full flex flex-col bg-blue-600 text-white rounded-lg p-4">
                            <h3 className="text-yellow-400 text-lg font-black mb-1 border-b border-white/30 pb-1">Rules & Regulation :-</h3>
                            <p className="text-[10px] mb-4 italic opacity-90 leading-tight">Student will be discontinue if he/she is unable to abide following rules & Regulation</p>
                            
                            <ol className="space-y-3 text-xs mb-6">
                                {[
                                    "Failure to pay College dues.",
                                    "Failure to attend the class and not shown satisfactory Academic progress.",
                                    "Conduct which in the opinion of Management / Principal is unsatisfactory.",
                                    "Damage to the school property by the student will be fully recovered by the student.",
                                    "Unable to fulfill / obey the instruction given time to time by the teacher to the student."
                                ].map((rule, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="font-bold mr-2">{i+1})</span>
                                        <p>{rule}</p>
                                    </li>
                                ))}
                            </ol>
                            
                            <div className="mt-auto overflow-hidden rounded-lg border-2 border-white/20 shadow-md h-32 bg-white flex items-center justify-center p-2">
                                <div className="text-center">
                                    <span className="text-4xl block mb-1">🏢</span>
                                    <span className="text-blue-800 text-[10px] font-bold uppercase tracking-tight">College Campus</span>
                                </div>
                            </div>
                        </div>
                    </Page>

                    {/* Page 6: Last Page / Refund Policy */}
                    <Page number={6}>
                        <div className="h-full flex flex-col bg-blue-600 text-white rounded-lg p-6 relative">
                            <div className="border-4 border-white p-2 text-center rounded-lg mb-8 bg-blue-800 shadow-inner">
                                <p className="text-red-400 font-bold uppercase tracking-tight text-sm">Fees once paid will not be refunded</p>
                                <p className="text-xs uppercase font-medium">under any circumstances</p>
                            </div>

                            <div className="flex flex-col items-center mb-12">
                                <div className="bg-white/10 p-4 rounded-full backdrop-blur-md mb-4 border border-white/20">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                                        <span className="text-blue-800 text-[8px] font-bold">LOGO</span>
                                    </div>
                                </div>
                                <h4 className="text-center font-bold text-xl leading-tight">LAXMILAL KANOJIYA</h4>
                                <p className="text-blue-200 text-sm italic">Arts Commerce & Science Jr. College</p>
                            </div>

                            <div className="mt-auto space-y-4">
                                <div className="h-24 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                                    <span className="text-4xl">📚</span>
                                </div>
                                <div className="h-32 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                                    <span className="text-5xl">👨‍🎓👩‍🎓</span>
                                </div>
                            </div>
                            
                            <div className="mt-6 text-center text-[8px] opacity-70 italic font-mono">
                                Providing excellence since inception.
                            </div>
                        </div>
                    </Page>
                </HTMLFlipBook>
            </div>
            <p className="text-gray-500 mt-6 text-sm italic animate-bounce">Tip: Click or drag the corners to turn pages!</p>
        </div>
    );
};

export default BrochureComponent;
