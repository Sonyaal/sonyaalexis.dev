import React, { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';

const navItems = [
  ['Experience', 'history'],
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav id="navigation" className={`portfolio-nav${scrolled ? ' scrolled' : ''}`}>
        <span className="nav-logo">SA</span>

        <div className="nav-right">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              className="nav-link"
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </nav>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            backgroundColor: 'var(--bg)',
            boxShadow: 'none',
            borderLeft: '1px solid var(--border)',
          },
        }}
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex' }}
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>
        {navItems.map(([label, id]) => (
          <div
            key={id}
            className="mobile-nav-item"
            onClick={() => scrollToSection(id)}
          >
            {label}
          </div>
        ))}
      </Drawer>
    </>
  );
}

export default Navigation;
