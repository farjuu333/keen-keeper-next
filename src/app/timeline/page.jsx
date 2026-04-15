
"use client";
import React, { useContext, useState } from 'react'; 
import { FriendContext } from '@/context/FriendContext';
import Image from 'next/image';
import CallImg from "@/assets/call.png";
import TextImg from "@/assets/text.png";
import VideoImg from "@/assets/video.png";

const TimelinePage = () => {
  const { timeline } = useContext(FriendContext);
  const [filter, setFilter] = useState("All"); 

  const getIcon = (type) => {
    if (type === 'Call') return CallImg;
    if (type === 'Text') return TextImg;
    return VideoImg;
  };

  
  const filteredData = timeline.filter(item => 
    filter === "All" ? true : item.type === filter
  );

  return (
    <div className="min-h-screen bg-[#F8FAFB] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Timeline</h1>

        
        <select 
          onChange={(e) => setFilter(e.target.value)}
          className="mb-8 p-2 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-#244D3F"
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

        {filteredData.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-3xl">No entries found.</div>
        ) : (
          <div className="space-y-6">
            
            {filteredData.map((item) => (
              <div key={item.id} className="flex items-center gap-5 p-4 border border-gray-100 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                  <Image src={getIcon(item.type)} alt={item.type} width={28} height={28} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-gray-800 text-base">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;