import React from 'react';

const EnterpriseSection4 = () => {
    return (
        <section id="contact-form" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Partner?</h2>
                    <p className="text-xl text-gray-600">
                        Get in touch with our partnership team to explore opportunities
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <form id="partnership-form" className="space-y-6">
                        {/* Name Inputs */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>
                        </div>

                        {/* Company & Email */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    required
                                />
                            </div>
                        </div>

                        {/* Partnership Type Dropdown */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type *</label>
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                required
                            >
                                <option value="">Select one</option>
                                <option value="reseller">Reseller</option>
                                <option value="training">Training</option>
                                <option value="technology">Technology</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                            <textarea
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                placeholder="Tell us more about your partnership interest..."
                                required
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-primary/90 transition-all  hover:bg-blue-800 cursor-pointer"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSection4;
