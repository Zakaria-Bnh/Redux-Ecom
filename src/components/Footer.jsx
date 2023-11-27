import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="mb-8 md:mb-0 ">
        <p className="text-3xl font-bold">WooShop</p>
  </div>
      <div className="flex items-center space-x-4 order-1 lg:order-2">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaFacebook className="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaTwitter className="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
