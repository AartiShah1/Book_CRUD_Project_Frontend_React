import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Navbar</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
         <Link to="/create" >
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            +Create
          </button>
          </Link>

           {/* <Link to="/edit-page" >
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            Edit
          </button>
          </Link> */}


         
          
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/create" >
          <button className="bg-blue-500 text-white px-4 py-2 mr-5 rounded hover:bg-blue-600 transition duration-300">
            +Create
          </button>
          </Link>

            <Link to="/edit" >
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            Edit
          </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
