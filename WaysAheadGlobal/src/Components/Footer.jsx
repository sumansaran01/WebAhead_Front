import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Wave from 'react-wavify'
const Footer = () => {
  return (
    <>
      <Wave fill='#f54a00'
        paused={false}
        style={{ display: '' }}
        options={{
          height: 10,
          amplitude: 10,
          speed: 0.15,
          points: 6
        }}
      />
      <footer className="bg-black text-gray-300 py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">

          <div className='col-span-2 md:col-span-1 w-full flex flex-col justify-center items-center'>
            <h3 className="text-white text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-blue-500 hover:scale-110 transition-transform"><FaLinkedin size={30} /></a>
              <a href="#" className="text-red-500 hover:scale-110 transition-transform"><FaInstagram size={30} /></a>
              <a href="#" className="text-blue-600 hover:scale-110 transition-transform"><FaFacebook size={30} /></a>
              <a href="#" className="text-blue-400 hover:scale-110 transition-transform"><FaTwitter size={30} /></a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Rapid Product Development</a></li>
              <li><a href="#" className="hover:text-white">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white">AI As A Service</a></li>
            </ul>
          </div>

          {/* Solution Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Solution</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">BI Kiosk</a></li>
              <li><a href="#" className="hover:text-white">News & Media</a></li>
              <li><a href="#" className="hover:text-white">Blog/Vlog</a></li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">HustleX 1.0 Results</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Copyright <span className="text-red-500 font-semibold">WaysAhead Global.</span>
          </p>
          <a href="#" className="text-white font-semibold hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </>

  );
};

export default Footer;
