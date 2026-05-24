import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Banner from './components/Banner';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Instagram from './components/Instagram';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Banner />
      <Features />
      <Testimonials />
      <Instagram />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
