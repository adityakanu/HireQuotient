import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import About from './About/About';
import Partners from './Credibility/Partners';
// import { ParallaxText } from './Credibility/Credibility';
import Pricing from './Pricing/Pricing';
import Products from './Products/Product';
import Testimonials from './Testimonials/Testimonials';
const Home = () => {
    return (
        <div className="bag-secondary">
            <Navbar />
            <About />
            <Partners />
            <Products />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
