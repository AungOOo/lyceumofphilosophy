import React, { useState } from 'react';
import { styles } from './styles';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';

// Import Pages
import Home from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ArticleDetail } from './pages/ArticleDetail';
import { About } from './pages/About';
import { Support } from './pages/Support';
import { BooksPage } from './pages/BooksPage';

// --- MAIN APP COMPONENT ---
export default function App() {
    const [page, setPage] = useState({ name: 'home', articleId: null, categoryName: null });

    const renderPage = () => {
        const mainContainerClasses = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12";
        
        if (page.name === 'articleDetail') {
            return <ArticleDetail articleId={page.articleId} setPage={setPage} />;
        }
        
        return (
            <div className={mainContainerClasses}>
                {(() => {
                    switch (page.name) {
                        case 'home':
                            return <Home setPage={setPage} />;
                        case 'category':
                            return <CategoryPage categoryName={page.categoryName} setPage={setPage} />;
                        case 'about':
                            return <About setPage={setPage} />;
                        case 'support':
                            return <Support />;
                        case 'books':
                            return <BooksPage />;
                        default:
                            return <Home setPage={setPage} />;
                    }
                })()}
            </div>
        );
    };
    
    const getActivePage = () => {
        if (page.name === 'articleDetail' || page.name === 'category') return 'category';
        return page.name;
    }

    return (
        <div className={styles.body}>
            <Header setPage={setPage} activePage={getActivePage()} />
            <main>
                {renderPage()}
            </main>
            <Footer setPage={setPage} />
            <BackToTopButton />
        </div>
    );
}