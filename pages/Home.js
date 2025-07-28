import React, { useState, useEffect, useRef } from 'react';
import { styles } from '../styles';
import { philosophyData } from '../data/contentData';

const Header = ({ setPage, activePage }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    const handleNav = (pageName, data = {}) => {
        setPage({ name: pageName, ...data });
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const NavLinks = ({ isMobile = false }) => (
        <>
            <a href="#" onClick={() => handleNav('home')} className={`${styles.navLink} ${activePage === 'home' ? styles.navLinkActive : ''}`}>Home</a>
            <div className={isMobile ? 'w-full' : 'relative'} ref={isMobile ? null : dropdownRef}>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`${styles.navLink} flex items-center space-x-1 w-full justify-center md:w-auto ${activePage === 'category' || activePage === 'articleDetail' ? styles.navLinkActive : ''}`}>
                    <span>Articles</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isDropdownOpen && (
                    <div className={isMobile ? 'mt-1 space-y-1 pl-4' : 'absolute mt-2 w-64 bg-white rounded-md shadow-lg z-20 border border-gray-200/80 py-1'}>
                        {Object.keys(philosophyData).map(category => (
                            <a key={category} href="#" onClick={() => handleNav('category', { categoryName: category })} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 truncate">{category}</a>
                        ))}
                    </div>
                )}
            </div>
            <a href="#" onClick={() => handleNav('books')} className={`${styles.navLink} ${activePage === 'books' ? styles.navLinkActive : ''}`}>Books</a>
            <a href="#" onClick={() => handleNav('about')} className={`${styles.navLink} ${activePage === 'about' ? styles.navLinkActive : ''}`}>About</a>
            <a href="#" onClick={() => handleNav('support')} className={`${styles.navLink} ${activePage === 'support' ? styles.navLinkActive : ''}`}>Support</a>
        </>
    );

    return (
        <header className={styles.header}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="text-left cursor-pointer" onClick={() => handleNav('home')}>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">Philosophy in Motion</h1>
                    <p className="text-sm text-gray-500 mt-1 hidden sm:block">Exploring ideas that shaped our world.</p>
                </div>
                <div className="flex items-center">
                    <nav className="hidden md:flex items-center space-x-2">
                        <NavLinks />
                    </nav>
                    <div className="md:hidden ml-4">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-black">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 space-y-1 px-2 pb-3">
                    <NavLinks isMobile={true} />
                </div>
            )}
        </header>
    );
};

export default Header;
