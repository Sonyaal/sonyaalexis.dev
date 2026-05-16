import React, { useEffect } from "react";
import {
  Main,
  Timeline,
  Project,
  Navigation,
  Footer,
  Cursor,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 400);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main-container">
      <Cursor />
      <Navigation />
      <FadeIn transitionDuration={700}>
        <Main />
        <Timeline />
        <Project />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
