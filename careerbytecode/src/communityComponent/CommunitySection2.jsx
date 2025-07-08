import React from 'react';

const CommunitySection2 = () => {
    return (
        <section
            id="partners-filter"
            className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50"
        >
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-gray-600 rounded-full font-medium shadow-md">
                        All Partners
                    </button>
                    <button className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">
                        Cloud Providers
                    </button>
                    <button className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">
                        Tech Companies
                    </button>
                    <button className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">
                        Educational Institutions
                    </button>
                    <button className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">
                        Certification Bodies
                    </button>
                    <button className="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">
                        Recruiters
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection2;
