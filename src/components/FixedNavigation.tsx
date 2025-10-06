'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function FixedNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 9999 
      }}
      className="backdrop-blur-sm"
    >
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <button
            onClick={() => scrollToSection('#home')}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Liam&apos;s Portfolio</span>
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              LM
            </span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-1 justify-end items-center">
          {/* Moon Icon */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-200 drop-shadow-xl"
          >
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9"/>
            <circle cx="8" cy="8" r="2" fill="#ffffff" opacity="0.6"/>
            <circle cx="14" cy="10" r="1.5" fill="#ffffff" opacity="0.4"/>
            <circle cx="10" cy="14" r="1" fill="#ffffff" opacity="0.3"/>
          </svg>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-[9998]" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('#home')}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Liam&apos;s Portfolio</span>
              <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                LM
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5 w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={() => {
                    scrollToSection('#contact');
                    setMobileMenuOpen(false);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5 w-full text-left"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      
      {/* Menu Button - Bottom Right Corner (All Screens) */}
      <div className="fixed bottom-6 right-6" style={{ zIndex: 9999 }}>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-full p-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
      </div>
    </header>
  );
}

