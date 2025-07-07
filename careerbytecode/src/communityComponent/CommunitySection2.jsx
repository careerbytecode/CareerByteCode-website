import React from 'react'

const CommunitySection2 = () => {
  return (
      <section id="partners-filter" class="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div class="max-w-7xl mx-auto px-5">
              <div class="flex flex-wrap justify-center gap-4">
                  <button class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-gray-600 rounded-full font-medium shadow-md">All Partners</button>
                  <button class="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">Cloud Providers</button>
                  <button class="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">Tech Companies</button>
                  <button class="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">Educational Institutions</button>
                  <button class="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">Certification Bodies</button>
                  <button class="px-6 py-3 bg-white text-gray-600 rounded-full font-medium hover:bg-gray-50 border border-gray-200 shadow-sm">Recruiters</button>
              </div>
          </div>
      </section>
  )
}

export default CommunitySection2