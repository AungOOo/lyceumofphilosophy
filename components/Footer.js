import React from 'react';
import { styles } from '../styles';
import { philosophyData } from '../data/contentData';

const Footer = ({ setPage }) => (
    <footer className={styles.footer}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-lg font-semibold">Philosophy in Motion</h3>
                    <p className="mt-2 text-gray-500 text-sm">A platform for independent learning and exploration, making the great ideas of philosophy and the humanities accessible to everyone.</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase">Explore</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setPage({ name: 'home' }); }} className="text-sm text-gray-500 hover:text-gray-900">Home</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setPage({ name: 'books' }); }} className="text-sm text-gray-500 hover:text-gray-900">Books</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setPage({ name: 'about' }); }} className="text-sm text-gray-500 hover:text-gray-900">About</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setPage({ name: 'support' }); }} className="text-sm text-gray-500 hover:text-gray-900">Support</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase">Article Categories</h3>
                    <ul className="mt-4 space-y-2">
                        {Object.keys(philosophyData).map(category => (
                            <li key={category}><a href="#" onClick={(e) => { e.preventDefault(); setPage({ name: 'category', categoryName: category }); }} className="text-sm text-gray-500 hover:text-gray-900">{category}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">YouTube</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.812.42-7.812.42s-6.218 0-7.812-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.782 5 12 5 12 5s6.218 0 7.812.418zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                             <span className="sr-only">Twitter</span>
                             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </a>
                         <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.575 2h.093zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 text-sm text-gray-500 md:flex md:justify-between">
                <p>&copy; {new Date().getFullYear()} Philosophy in Motion, LLC. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-900">Terms of Service</a>
                    <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
