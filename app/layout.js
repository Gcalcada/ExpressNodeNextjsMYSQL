// app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';

import './globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="pt">
      <body className="flex flex-col min-h-screen">
        <div className=""> 
          <Header />
          <main className="flex-grow">
            {children}
           
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
