import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showFabricDropdown, setShowFabricDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Fine Thread Overseas</Link>
        
        {/* Mobile Menu */}
<div className="md:hidden">
  <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-xl">
    ☰
  </button>
  {showMobileMenu && (
    <div className="absolute bg-gray-900 w-full p-4 top-16 left-0">
      <Link to="/" className="block py-2 text-white">Home</Link>
      <Link to="/about-us" className="block py-2 text-white">About Us</Link>
      <Link to="/enquiries" className="block py-2 text-white">Enquiries</Link>
      <Link to="/whatsapp" className="block py-2 text-white">WhatsApp</Link>
    </div>
  )}
</div>

          {/* Brands Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowBrandDropdown(!showBrandDropdown)} 
              className="hover:text-gray-400"
            >
              Brands ▼
            </button>
            {showBrandDropdown && (
              <div className="absolute bg-gray-800 p-2 rounded mt-1 space-y-2">
                <Link to="/brand/zegna" className="block px-4 py-1 hover:bg-gray-700">Zegna</Link>
                <Link to="/brand/loro-piana" className="block px-4 py-1 hover:bg-gray-700">Loro Piana</Link>
                <Link to="/brand/scabal" className="block px-4 py-1 hover:bg-gray-700">Scabal</Link>
              </div>
            )}
          </div>

          <Link to="/enquiries" className="hover:text-gray-400">Enquiries</Link>
          <Link to="/whatsapp" className="hover:text-gray-400">WhatsApp</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
