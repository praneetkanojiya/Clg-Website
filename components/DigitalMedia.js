import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import for react-pageflip as it requires window/document (Client-side only)
const BrochureComponent = dynamic(() => import('./BrochureComponent'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full flex items-center justify-center bg-gray-50 rounded-lg animate-pulse">Loading Brochure...</div>
});

const PamphletComponent = dynamic(() => import('./PamphletComponent'), {
    ssr: false,
    loading: () => <div className="h-[700px] w-full flex items-center justify-center bg-gray-50 rounded-lg animate-pulse">Loading Pamphlet...</div>
});

const DigitalMedia = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Digital Media Gallery</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4 px-4">
                        Explore our official college brochure and latest pamphlet. Flip through the pages to learn more about our courses, achievements, and admission process.
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-16 items-start justify-center">
                    {/* Brochure Section */}
                    <div className="w-full xl:w-1/2 flex flex-col items-center">
                        <div className="w-full max-w-[450px]">
                            <BrochureComponent />
                        </div>
                    </div>

                    {/* Pamphlet Section */}
                    <div className="w-full xl:w-1/2 flex flex-col items-center">
                        <div className="w-full max-w-[550px]">
                            <PamphletComponent />
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center p-4 bg-primary/5 rounded-2xl border border-primary/10 select-none">
                        <div className="flex -space-x-2 mr-4">
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-bold">L</div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary text-white flex items-center justify-center font-bold">K</div>
                        </div>
                        <p className="text-sm font-medium text-gray-700">
                            Looking for a physical copy? <span className="text-primary font-bold">Visit our office</span> for the printed edition.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalMedia;
