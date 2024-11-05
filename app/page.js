// app/page.js
import Banner from './components/Banner'; 
import ProductCategory from './components/ProductCategory'; 
import FeaturedProducts from './components/FeaturedProducts';
import Newsletter from './components/Newsletter';

const HomePage = () => {
  return (
    <>
      <Banner />
      <ProductCategory />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
};

export default HomePage;
