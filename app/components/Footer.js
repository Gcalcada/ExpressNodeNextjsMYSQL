import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Seção de links de navegação */}
        <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <div className="mb-2 md:mb-0">
            <h4 className="font-bold mb-2">Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400">Products</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Seção de redes sociais */}
        <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <div className="mb-2 md:mb-0">
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <InstagramIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>


    
    </footer>
  );
};

export default Footer;
