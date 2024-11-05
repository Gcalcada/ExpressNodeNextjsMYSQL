"use client"; 
import Link from 'next/link';
import { useState, useEffect } from 'react'; // Adicione o useEffect
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Usar useEffect para definir a classe 'dark' no body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => !prevState);
  };

  const handleCloseMenu = (e) => {
    if (e.target.id === "menu-background") {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`p-4 flex justify-between items-center shadow ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Link href="/" className="flex-shrink-0">
        <h1 className="text-2xl font-bold text-yellow-500">Meu E-commerce</h1>
      </Link>

      <div className="md:hidden">
        <IconButton color="inherit" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          {isMenuOpen ? <CloseIcon aria-label="Fechar menu" /> : <MenuIcon aria-label="Abrir menu" />}
        </IconButton>
      </div>

      <nav 
        id="menu-background" 
        onClick={handleCloseMenu} 
        className={`fixed top-0 left-0 w-full h-full bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}
        role="dialog" 
        aria-modal="true"
      >
        {isMenuOpen && (
          <IconButton 
            onClick={() => setIsMenuOpen(false)} 
            aria-label="Fechar menu" 
            className="absolute top-4 right-4"
            style={{ color: 'white', fontSize: '36px' }}
          >
            <CloseIcon style={{ fontSize: '36px' }} />
          </IconButton>
        )}
        
        <div className={`flex flex-col mt-20 h-full`}>
          <Link href="/products" className="block py-2 text-white text-lg hover:text-gray-400 border-b border-white w-full text-left">Produtos</Link>
          <Link href="/about" className="block py-2 text-white text-lg hover:text-gray-400 border-b border-white w-full text-left">Sobre</Link>
          <Link href="/cart" className="block py-2 text-white text-lg hover:text-gray-400 border-b border-white w-full text-left">Carrinho</Link>
        </div>
      </nav>

      <nav className={`hidden md:flex items-center space-x-4`}>
        <Link href="/pages/products" className="block py-2 hover:text-gray-400">Produtos</Link>
        <Link href="/pages/about" className="block py-2 hover:text-gray-400">Sobre</Link>
        <Link href="/pages/cart" className="block py-2 hover:text-gray-400">Carrinho</Link>
        <div className="flex items-center space-x-4 ml-4">
          <IconButton color="inherit" aria-label="Pesquisar">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Favoritos">
            <FavoriteIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Conta">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Carrinho de Compras">
            <ShoppingCartIcon />
          </IconButton>
          {/* Botão para alternar entre modo claro e escuro */}
          <IconButton color="inherit" onClick={toggleDarkMode} aria-label="Alternar modo escuro/claro">
            {isDarkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
