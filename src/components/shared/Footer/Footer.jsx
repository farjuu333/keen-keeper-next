import LogoxlImg from "../../../assets/logo-xl.png"; 
import Image from "next/image";
import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
import Twitter from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-[20px] md:py-[40px] px-4">
      <div className="container mx-auto flex flex-col items-center text-center">
        
        {/* Title / Logo */}
        <Image src={LogoxlImg} alt="logoxl" width={412} height={61}></Image>
        
        {/* Description */}
        <p className="max-w-[600px] text-gray-300 text-sm md:text-base mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-sm font-medium">Social Links</span>
          <div className="flex gap-4">
            
            <Image src={Facebook} alt="facebook" width={40} height={40}></Image>
            <Image src={Instagram } alt="facebook" width={40} height={40}></Image>
            <Image src={Twitter} alt="facebook" width={40} height={40}></Image>
            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full pt-6 border-t border-emerald-800 flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
            <a href="#" className="hover:text-white transition-all">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;