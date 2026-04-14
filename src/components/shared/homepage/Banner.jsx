

import { IoMdAdd } from "react-icons/io";


const Banner = () => {
  const stats = [
    { label: "Total Friends", value: 10 },
    { label: "On Track", value: 3 },
    { label: "Need Attention", value: 6 },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="container mx-auto px-4 pt-12 md:pt-20">
      {/* Title Section */}
      <div className="text-center flex flex-col items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0F172A] mb-2">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-xs md:text-sm max-w-[500px]">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        {/* Add Friend Button */}
        <button className="mt-6 bg-[#244D3F] text-white px-4 py-2 rounded-[4px] flex items-center gap-2 text-sm font-medium hover:bg-[#1a3a2f] transition-all">
          
         <IoMdAdd className="text-lg" />
          Add a Friend
        </button>
      </div>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-10">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-100 rounded-[8px] p-6 flex flex-col items-center justify-center text-center shadow-sm"
          >
            <span className="text-2xl md:text-3xl font-bold text-[#0F172A]">
              {stat.value}
            </span>
            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;