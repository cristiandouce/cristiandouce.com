import React from 'react'
import { SiGithub, SiLinkedin, SiNpm, SiX } from 'react-icons/si';
import type { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cristian Douce | Full-stack engineer from Buenos Aires, Argentina',
}


export default function Home() {
  const profiles = [
    { label: 'GitHub', url: 'https://github.com/cristiandouce', Icon: SiGithub, colorClass: 'text-gray-900' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/cristiandouce', Icon: SiLinkedin, colorClass: 'text-blue-600' },
    { label: 'npm', url: 'https://npmjs.com/~cristiandouce', Icon: SiNpm, colorClass: 'text-red-600' },
    { label: 'X', url: 'https://x.com/cristiandouce', Icon: SiX, colorClass: 'text-black' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between items-center px-4 py-8">
      <header className="w-full max-w-md text-center">
        <img
          src="https://github.com/cristiandouce.png"
          alt="Cristian Douce"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Cristian Douce</h1>
        <p className="text-base sm:text-lg text-gray-600 inline">
          Full-stack engineer passionate about building innovative solutions, exploring technology trends, and enjoying a good coffee or shawarma. Based in Buenos Aires, Argentina.
        </p>
      </header>

      <nav className="mt-8 w-full max-w-md">
        <ul className="flex flex-row justify-left text-left md:justify-between md:text-center gap-6 ps-6 md:p-0 flex-wrap">
          {profiles.map(({ label, url, Icon, colorClass }) => (
            <li key={url} className="group grow flex-1 md:flex-auto min-w-1/3 md:min-w-auto">
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 transition-colors duration-150 text-base sm:text-lg"
              >
                <Icon
                  className={`w-6 h-6 text-gray-500 transition-colors duration-150 group-hover:${colorClass}`}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="w-full text-center text-gray-400 mt-8">
        © {new Date().getFullYear()} Cristian Douce
      </footer>
    </div>
  );
}
