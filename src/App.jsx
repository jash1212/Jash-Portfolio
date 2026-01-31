import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import BlogListing from './components/BlogListing';
import BlogPost from './components/BlogPost';
import LiveBackground from './components/LiveBackground';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Router>
      <LiveBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <div className="h-24"></div>
      </Layout>
    </Router>
  );
}

export default App;
