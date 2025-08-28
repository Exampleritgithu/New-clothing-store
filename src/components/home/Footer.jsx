import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-600 py-10 z-10  absolute mt-64">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Menu */}
        <div>
          <h3 className="text-xl font-serif text-black mb-4 ">Menu</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">Shop</a></li>
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Contact Us</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-serif text-black mb-4">Categories</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-black">Casual</a></li>
            <li><a href="#" className="hover:text-black">Work & Office</a></li>
            <li><a href="#" className="hover:text-black">Activewear</a></li>
            <li><a href="#" className="hover:text-black">Evening Dresses</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-serif text-black mb-4">Resources</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-black">Contact Support</a></li>
            <li><a href="#" className="hover:text-black">FAQ</a></li>
            <li><a href="#" className="hover:text-black">Live Chat</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-serif text-black mb-4">Social Media</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-black">Facebook</a></li>
            <li><a href="#" className="hover:text-black">Twitter</a></li>
            <li><a href="#" className="hover:text-black">Instagram</a></li>
            <li><a href="#" className="hover:text-black">Pinterest</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
