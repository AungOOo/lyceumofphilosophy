// src/styles.js
// This file centralizes all the Tailwind CSS class strings for consistent styling.

export const styles = {
    body: "font-['Inter',_sans-serif] bg-[#f8f7f4] text-[#2c3e50] antialiased",
    header: "bg-white sticky top-0 z-50 py-4 border-b border-gray-200/80",
    navLink: "px-3 py-2 text-sm font-medium text-[#2c3e50] transition-colors duration-300 rounded-md hover:bg-gray-100 hover:text-[#2c3e50]",
    navLinkActive: "font-semibold text-[#2c3e50] bg-gray-100",
    prose: "prose max-w-2xl mx-auto prose-p:text-lg prose-p:leading-relaxed prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:text-3xl prose-h2:mt-16 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 prose-a:text-[#34495e] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-[#34495e] prose-blockquote:pl-6 prose-blockquote:italic",
    articleCard: "article-card flex flex-col rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/80 hover:-translate-y-1",
    formContainer: "bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200/80",
    formInput: "block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34495e] sm:text-sm transition-all",
    formLabel: "block text-sm font-medium text-gray-700 mb-2",
    submitBtn: "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#34495e] hover:bg-[#2c3e50] transition-colors",
    pageTitle: "text-4xl lg:text-5xl font-bold tracking-tight text-center",
    pageSubtitle: "mt-3 text-lg text-gray-600 text-center max-w-2xl mx-auto",
    pageHeaderContainer: "bg-white rounded-xl p-8 shadow-sm border border-gray-200/80 mb-16",
    featureCard: "bg-white p-8 rounded-xl shadow-sm border border-gray-200/80",
    footer: "bg-white border-t border-gray-200/80 py-12",
};
