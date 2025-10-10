
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaMapMarker,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#EDF2F7] text-gray-800 shadow-2xl border-t border-gray-100 border-b-none">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div className="space-y-4">
          <img
            src="https://res.cloudinary.com/dnwyppsef/image/upload/v1758774583/logo-removebg-preview_tykgc6.png"
            alt="logo"
            className="w-24"
          />
          <h1 className="text-2xl font-semibold text-[#5F9C33]">
            Crystal Ark Hotel
          </h1>
          <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
            We aim to give you the best luxury experience in the heart of
            Teshie Regal Street, Agbelezaa-Manet road. Book your stay now and let us pamper you!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#5F9C33]">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#CE9E37] transition text-gray-700 hover:font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="/rooms" className="hover:text-[#CE9E37] transition text-gray-700 hover:font-medium">
                Rooms
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#CE9E37] transition text-gray-700 hover:font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#CE9E37] transition text-gray-700 hover:font-medium">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#5F9C33]">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-gray-700">
              <FaMapMarker className="text-[#CE9E37]" /> Teshie Regal street, Agbelezaa-Manet road
            </li>
            
            <li className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-[#CE9E37]" /> 030 272 6007
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-[#CE9E37]" />
              <a
                href="mailto:arthurkevin1260@gmail.com"
                className="hover:text-[#CE9E37] transition"
              >
                crystalarkhotel@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#5F9C33]">
            Connect With Us
          </h2>
          <div className="flex space-x-4 text-xl text-gray-700">
            <a href="https://www.facebook.com/share/17PXQz1auR/?mibextid=wwXIfr" className="hover:text-[#CE9E37] transition hover:scale-110 transform duration-200 p-2 rounded-full hover:shadow-lg hover:bg-gray-50">
              <FaFacebook />
            </a>
            {/* <a href="/home" className="hover:text-[#CE9E37] transition hover:scale-110 transform duration-200 p-2 rounded-full hover:shadow-lg hover:bg-gray-50">
              <FaTwitter />
            </a> */}
            <a href="https://www.instagram.com/crystalarkhotel?igsh=MXBiNThoN29md3pkMQ%3D%3D&utm_source=qr" className="hover:text-[#CE9E37] transition hover:scale-110 transform duration-200 p-2 rounded-full hover:shadow-lg hover:bg-gray-50">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className=" py-4 text-center text-sm text-gray-600 ">
        <p>&copy; {new Date().getFullYear()} Crystal Ark Hotel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;