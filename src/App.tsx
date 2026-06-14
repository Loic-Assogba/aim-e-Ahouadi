import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Expertise from './components/Expertise';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Services from './components/Services';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-navy text-white overflow-x-hidden">
            <Navbar />

            <main>
                <Hero />
                <Stats />
                <About />
                <Expertise />
                <Journey />
                <Projects />
                <Services />
                <Vision />
                <Testimonials />
                <Blog />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
