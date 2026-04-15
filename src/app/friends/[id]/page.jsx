"use client";
import { FriendContext } from "@/context/FriendContext";
import Image from "next/image";
import CallImg from "../../../assets/call.png"
import TextImg from "../../../assets/text.png"
import VideoImg from "../../../assets/video.png"
import { useParams } from "next/navigation";
import { useContext } from "react";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { getStatusStyles } from "@/utils/StatusStyle";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends,addTimelineEntry } = useContext(FriendContext);

  
  const friend = friends.find((f) => f.id.toString() === id);

  
  if (!friend) return <div className="p-20 text-center text-red-500">Friend Not Found!</div>;

  return (
    
    <div className="min-h-screen bg-[#F8FAFB] flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
        
        {/* Left Side: Profile Card */}
        <div className="flex-1 flex flex-col gap-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image 
                src={friend.picture} 
                alt={friend.name} 
                fill 
                sizes="96px"

                className="object-cover" 
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-[#1F2937]">{friend.name}</h2>
            
            <div className="flex flex-col gap-2 mt-2">
              
              <span className={`${getStatusStyles(friend.status)} text-[10px] font-bold px-3 py-1 rounded-full uppercase`}>
  {friend.status}
</span>
              {friend.tags?.map(tag => (
                <span key={tag} className="bg-green-100 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="mt-6 text-gray-500  text-sm">
              "{friend.bio}"
            </p>
            <p className="text-xs text-gray-400 mt-2">Preferred: {friend.email}</p>
              </div>
            {/* Profile Action Buttons */}
            <div className="w-full mt-4 flex flex-col gap-3">
              <button className="w-full py-2 text-sm font-semibold border border-gray-100 rounded-xl shadow-sm bg-white text-gray-800 hover:bg-gray-50 flex items-center justify-center gap-2">
                <span><RiNotificationSnoozeLine className="w-5 h-5" /></span> Snooze 2 Weeks
              </button>
              <button className="w-full py-2 text-sm font-semibold border border-gray-100 rounded-xl shadow-sm bg-white text-gray-800 hover:bg-gray-50 flex items-center justify-center gap-2">
                <span><BsArchive className="w-5 h-5"/></span> Archive
              </button>
              <button className="w-full py-2 text-sm font-semibold border border-gray-100 rounded-xl shadow-sm bg-white text-red-500 hover:bg-red-50 flex items-center justify-center gap-2">
                <span><RiDeleteBinLine className="w-5 h-5 text-red-500"/></span> Delete
              </button>
            </div>
          
        </div>

        {/* Right Side: Stats & Interactions */}
        <div className="flex-[2] flex flex-col gap-6">
          
          {/* Top Stats Boxes */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-3xl font-bold text-gray-800">{friend.days_since_contact}</p>
              <p className="text-[11px] text-gray-400 uppercase mt-1 font-medium">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-3xl font-bold text-gray-800">{friend.goal}</p>
              <p className="text-[11px] text-gray-400 uppercase mt-1 font-medium">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-xl font-bold text-gray-800 mt-2">
                {new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
              <p className="text-[11px] text-gray-400 uppercase mt-2 font-medium">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal Box */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-700 text-sm">Relationship Goal</h4>
              <p className="text-sm text-gray-500 mt-1">Connect every <span className="font-bold text-gray-800">{friend.goal} days</span></p>
            </div>
            <button className="text-gray-500 text-xs font-bold border border-gray-100 px-3 py-1 rounded hover:bg-gray-50 transition-colors">EDIT</button>
          </div>

          {/* Quick Check-In Box */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-700 text-sm mb-4 uppercase tracking-wider">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => addTimelineEntry("Call", friend.name)}
         
              className="flex flex-col items-center justify-center p-4 bg-[#F9FAFB] rounded-xl hover:bg-gray-100 transition-all">
                
                    <Image src={CallImg} alt="call" width={32} height={32} className="mb-1"></Image>
                <span className="text-xs font-bold text-gray-600 uppercase">Call</span>
              </button>
              <button onClick={() => addTimelineEntry("Text", friend.name)} className="flex flex-col items-center justify-center p-4 bg-[#F9FAFB] rounded-xl hover:bg-gray-100 transition-all">
                <Image src={TextImg} alt="call" width={32} height={32} className="mb-1"></Image>
                <span className="text-xs font-bold text-gray-600 uppercase">Text</span>
              </button>
              <button onClick={() => addTimelineEntry("Video", friend.name)} className="flex flex-col items-center justify-center p-4 bg-[#F9FAFB] rounded-xl hover:bg-gray-100 transition-all">
                <Image src={VideoImg} alt="call" width={32} height={32} className="mb-1"></Image>
                <span className="text-xs font-bold text-gray-600 uppercase">Video</span>
              </button>
            </div>
          </div>

          {/* Recent Interactions Placeholder */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
  <div className="flex justify-between items-center mb-6">
    <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wider">Recent Interactions</h4>
    <button className="text-xs text-gray-400 font-bold flex items-center gap-1 ">Full History</button>
  </div>

  <div className="flex flex-col gap-6">
    {[
      { type: 'Text', desc: 'Asked for career advice', icon: '💬', date: 'Jan 28, 2026' },
      { type: 'Meetup', desc: 'Industry conference meetup', icon: '🤝', date: 'Jan 28, 2026' },
      { type: 'Video', desc: 'Asked for career advice', icon: '🎥', date: 'Jan 28, 2026' },
      { type: 'Text', desc: 'Asked for career advice', icon: '💬', date: 'Jan 28, 2026' }
    ].map((item, index) => (
      <div key={index} className="flex items-center justify-between group cursor-pointer py-4 border-b border-gray-100 last:border-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-lg border border-gray-100 group-hover:bg-blue-50 transition-colors">
            {item.icon}
          </div>
          <div>
            <h5 className="font-bold text-gray-800 text-sm">{item.type}</h5>
            <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
          </div>
        </div>
        <div className="text-[11px] text-gray-400 font-bold">
          {item.date}
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;