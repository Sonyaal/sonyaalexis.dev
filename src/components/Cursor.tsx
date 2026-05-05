import React, { useEffect, useRef } from 'react';

function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
        dotRef.current.style.opacity = '1';
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = '1';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseEnterLink = () => {
      if (ringRef.current) ringRef.current.classList.add('cursor-ring--active');
      if (dotRef.current) dotRef.current.classList.add('cursor-dot--active');
    };

    const handleMouseLeaveLink = () => {
      if (ringRef.current) ringRef.current.classList.remove('cursor-ring--active');
      if (dotRef.current) dotRef.current.classList.remove('cursor-dot--active');
    };

    const addLinkListeners = () => {
      document.querySelectorAll('a, button, .expertise-card, .project-card').forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterLink);
        el.addEventListener('mouseleave', handleMouseLeaveLink);
      });
    };

    document.documentElement.style.cursor = 'none';
    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);
    setTimeout(addLinkListeners, 1000);

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

export default Cursor;
