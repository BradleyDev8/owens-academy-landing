'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from '@/public/owenAcademy.png';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Timetable', href: '#schedule' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-stage text-stage-foreground">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="flex items-center gap-3 rounded-md" onClick={() => setIsOpen(false)}>
          <Image src={logo} alt="" width={32} height={32} className="rounded-full" />
          <span className="text-base font-medium">Owens Academy</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="rounded-sm text-sm text-stage-muted transition-colors duration-150 hover:text-stage-foreground"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-2 grid size-10 place-items-center rounded-md text-stage-foreground md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
        </button>
      </nav>

      {isOpen && (
        <ul id="mobile-nav" className="border-t border-white/8 px-6 py-2 md:hidden">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="block py-3 text-base text-stage-muted" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
