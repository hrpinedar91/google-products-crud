'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Cart from './Cart';

const Navbar = () => {
  const pathname = usePathname(); // Obtener el pathname actual

  const categories = [
    { name: 'TODOS', path: '/' },
    { name: 'COMESTIBLES', path: '/comestibles' },
    { name: 'ABARROTES', path: '/abarrotes' },
    { name: 'LIMPIEZA', path: '/limpieza' },
  ];

  return (
    <nav className="bg-green-500 p-4 relative">
      <ul className="flex flex-wrap justify-center space-x-6">
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={category.path}>
              <span
                className={`px-4 py-2 cursor-pointer rounded-lg ${
                  pathname === category.path
                    ? 'bg-green-700 text-white'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {category.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Cart />
    </nav>
  );
};

export default Navbar;
