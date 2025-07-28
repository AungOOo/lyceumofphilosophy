// src/components/ArticleCard.js
import React from 'react';
import { styles } from '../styles';
import { philosophyData } from '../data/contentData';

const ArticleCard = ({ article, onSelect }) => (
    <div className={styles.articleCard} onClick={() => onSelect('articleDetail', { articleId: article.id })}>
        <div className="flex-shrink-0">
             <img className="h-48 w-full object-cover" src={article.imageUrl.replace('1200x500', '600x400')} alt={article.title} />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
            <div className="flex-1">
                <p className="text-sm font-medium text-blue-700">{Object.keys(philosophyData).find(key => philosophyData[key].includes(article))}</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{article.title}</h3>
                <p className="mt-3 text-base text-gray-600">{article.excerpt}</p>
            </div>
        </div>
    </div>
);
export default ArticleCard;

// ---

// src/components/BookCard.js
import React from 'react';
import { styles } from '../styles';

const BookCard = ({ book }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <img src={book.imageUrl} alt={book.title} className="w-full h-auto object-cover rounded-md shadow-lg mb-4 max-w-[180px]" />
        <div className="flex flex-col flex-grow justify-between">
            <div>
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.author}</p>
            </div>
            <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-white bg-[#34495e] hover:bg-[#2c3e50] font-semibold py-2 px-5 rounded-md transition-colors text-sm">
                Buy on Amazon
            </a>
        </div>
    </div>
);
export { BookCard }; // Named export

// ---

// src/components/ContactForm.js
import React from 'react';
import { styles } from '../styles';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent (demo)!');
        e.target.reset();
    };
    return (
        <div className="mt-24">
            <div className={`max-w-2xl mx-auto ${styles.formContainer}`}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
                    <p className="mt-2 text-lg text-gray-600">Have a question, a suggestion, or just want to say hello?</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                        <input type="text" name="name" id="name" required className={styles.formInput} />
                    </div>
                    <div>
                        <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                        <input type="email" name="email" id="email" required className={styles.formInput} />
                    </div>
                    <div>
                        <label htmlFor="message" className={styles.formLabel}>Message</label>
                        <textarea name="message" id="message" rows="4" required className={styles.formInput}></textarea>
                    </div>
                    <div>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export { ContactForm }; // Named export

// ---

// src/components/HeroSlideshow.js
import React, { useState, useEffect, useRef } from 'react';
import { philosophyData } from '../data/contentData';

const HeroSlideshow = ({ articles, setPage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => 
            setCurrentIndex((prev) => prev === articles.length - 1 ? 0 : prev + 1), 5000);
        return () => resetTimeout();
    }, [currentIndex, articles.length]);

    const goToSlide = (index) => setCurrentIndex(index);
    const goToPrev = () => setCurrentIndex(currentIndex === 0 ? articles.length - 1 : currentIndex - 1);
    const goToNext = () => setCurrentIndex(currentIndex === articles.length - 1 ? 0 : currentIndex + 1);

    const currentArticle = articles[currentIndex];

    return (
        <div className="relative w-full h-[500px] rounded-xl shadow-lg border border-gray-200/80 overflow-hidden">
            {articles.map((article, index) => (
                <div key={article.id} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={article.imageUrl.replace('1200x500', '1200x600')} alt={article.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                </div>
            ))}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full h-full flex flex-col justify-end md:px-20">
                <div>
                    <span className="text-sm font-semibold bg-white/20 text-white px-3 py-1 rounded-full">{Object.keys(philosophyData).find(key => philosophyData[key].includes(currentArticle))}</span>
                    <h2 className="text-3xl lg:text-5xl font-bold mt-4 leading-tight max-w-3xl">{currentArticle.title}</h2>
                    <p className="text-lg text-gray-200 mt-2 max-w-2xl">{currentArticle.excerpt}</p>
                    <button onClick={() => setPage({ name: 'articleDetail', articleId: currentArticle.id })} className="mt-6 inline-block font-semibold bg-white text-black py-2 px-5 rounded-md hover:bg-gray-200 transition-colors">Read More</button>
                </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-6 z-10">
                <button onClick={goToPrev} className="bg-white/50 hover:bg-white text-black p-2 rounded-full transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
                <button onClick={goToNext} className="bg-white/50 hover:bg-white text-black p-2 rounded-full transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {articles.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}></button>
                ))}
            </div>
        </div>
    );
};
export { HeroSlideshow }; // Named export

// ---

// src/components/BackToTopButton.js
import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) setIsVisible(true);
        else setIsVisible(false);
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button onClick={scrollToTop} className={`fixed bottom-8 right-8 bg-[#34495e] hover:bg-[#2c3e50] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
        </button>
    );
};
export { BackToTopButton }; // Named export

// ---

// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="flex justify-center items-center space-x-2 mt-16">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 rounded-md text-sm font-medium bg-white border border-gray-300 text-gray-600 disabled:opacity-50 hover:bg-gray-50">Previous</button>
            {pageNumbers.map(number => (
                <button key={number} onClick={() => onPageChange(number)} className={`px-4 py-2 rounded-md text-sm font-medium border ${currentPage === number ? 'bg-[#2c3e50] text-white border-[#2c3e50]' : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'}`}>{number}</button>
            ))}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 rounded-md text-sm font-medium bg-white border border-gray-300 text-gray-600 disabled:opacity-50 hover:bg-gray-50">Next</button>
        </nav>
    );
};
export { Pagination }; // Named export
