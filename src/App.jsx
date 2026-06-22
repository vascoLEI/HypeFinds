import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Outfits from './pages/Outfits.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/outfits" element={<Outfits />} />
          <Route path="/men" element={<Navigate to="/products" replace />} />
          <Route path="/women" element={<Navigate to="/products" replace />} />
          <Route path="/accessories" element={<Navigate to="/products" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
