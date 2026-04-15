

import FriendCard from '@/components/ui/AppCard';
import React from 'react';
 

const appsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data;
};

const FriendApps = async ({ from }) => {
  const apps = await appsPromise();
  
  return (
    <div className="container mx-auto my-[60px] px-4">
      {/* Dynamic Title Section */}
      <div className="mb-10 text-left">
        <h2 className="font-bold text-4xl text-gray-800">
           Your Friends
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.map((friend, ind) => {
          return <FriendCard friend={friend} key={friend.id || ind} />;
        })}
      </div>
    </div>
  );
};

export default FriendApps;