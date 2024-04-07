import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/question1" className="hover:text-gray-300">Question 1</Link>
        </li>
        <li>
          <Link href="/question2" className="hover:text-gray-300">Question 2</Link>
        </li>
        <li>
          <Link href="/dataManipulation" className="hover:text-gray-300">Data Manipulation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;