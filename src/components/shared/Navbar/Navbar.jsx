import logoImg from "../../../assets/logo.png";
import Image from "next/image";
import MyLink from "./MyLink";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";


const Navbar = () => {
  const navItems = [
   
    {
      path: "/home",
      text: "Home",
      icon:<RiHome2Line className="text-xl" />,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon:<RiTimeLine className="text-xl" />,
    },
    {
      path: "/stats",
      text: "Stats",
      icon:<TfiStatsUp className="text-xl"/>,
    },
  ];

  return (
    <nav className=" shadow">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center py-4 px-4 container mx-auto">
        <Image
          src={logoImg}
          alt="keenkeeper"
          className="w-[120px] md:w-[141px] h-auto"
          priority
        />

        <ul className="flex flex-wrap justify-center gap-2 items-center">
          {navItems.map((item, index) => (
            // Client component
            <MyLink key={index} href={item.path} icon={item.icon}>
              {item.text}
            </MyLink>
          ))}

          
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
