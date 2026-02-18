import { useLenis } from '../hooks/useLenis';
import Navbar from '../components/layout/Navbar';
import GridBackground from '../components/background/GridBackground';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
// import Footer from '../sections/Footer';

const Home = () => {
    // Initialize Smooth Scroll
    useLenis();

    return (
        <div className="relative antialiased">
            <GridBackground />
            {/* Noise Texture */}
            <div className="bg-noise"></div>

            <Navbar />

            <main className="relative z-10">
                <Hero />
                <About />
                <Projects />
                <Contact />
                {/* <Footer /> */}
            </main>
        </div>
    );
};

export default Home;
