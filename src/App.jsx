import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Resources from './pages/Resources';
import WhoWeServe from './pages/WhoWeServe';
import WhyUsPage from './pages/WhyUsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
