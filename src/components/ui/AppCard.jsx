import { getStatusStyles } from "@/utils/StatusStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <Link 
      href={`/friends/${friend.id}`} 
      className="bg-white rounded-[8px] p-6 shadow-[0px_3px_6px_0px_rgba(0,0,0,0.08)] flex flex-col items-center text-center gap-3 border border-gray-50 hover:shadow-md transition-shadow"
    >
      {/* Profile Image */}
      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
        <Image
          src={friend.picture}
          alt={friend.name}
          fill
          sizes="(max-width: 768px) 64px, (max-width: 1200px) 64px, 64px"
          className="object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-gray-800 text-lg leading-tight">
          {friend.name}
        </h3>
        <p className="text-xs text-gray-400 font-medium">
          {friend.days_since_contact}d ago
        </p>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap justify-center gap-2 mt-1">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status Badge */}
      <div className="mt-1">
        <span
          className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${getStatusStyles(
            friend.status
          )}`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;