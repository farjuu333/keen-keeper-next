
"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { FriendContext } from "@/context/FriendContext";

const StatsPage = () => {
  const { timeline } = useContext(FriendContext);

  // data filtering
  const textCount = timeline.filter(item => item.type === 'Text').length;
  const callCount = timeline.filter(item => item.type === 'Call').length;
  const videoCount = timeline.filter(item => item.type === 'Video').length;

  const totalCount = textCount + callCount + videoCount;

  const data = [
    { name: "Text", value: textCount || 0, fill: "#7E35E1" },
    { name: "Call", value: callCount || 0, fill: "#244D3F" },
    { name: "Video", value: videoCount || 0, fill: "#37A163" },
  ];

  return (
    <div className="min-h-screen bg-[#eff1f3] py-12 px-4">
      <h2 className="max-w-4xl mx-auto font-bold text-4xl text-[#1F2937] mb-4 text-left">
        Friendship Analytics
      </h2>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <p className="text-[20px] text-#244D3F mb-10 text-left">By Interaction Type</p>

        {/* Conditional Rendering logic starts here */}
        {totalCount > 0 ? (
          <PieChart
            width={400}
            height={400}
            style={{
              width: "100%",
              maxWidth: "400px",
              maxHeight: "400px",
              margin: "auto",
              aspectRatio: 1,
            }}
          >
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="90%"
              paddingAngle={8}
              dataKey="value"
              stroke="none"
              cornerRadius="50%"
              isAnimationActive={true}
            />
            <Tooltip
              contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              formatter={(value) => <span className="text-xs font-bold text-gray-600 uppercase ml-2">{value}</span>}
            />
          </PieChart>
        ) : (
          /* Empty state UI */
          <div className="flex flex-col items-center justify-center h-[300px] text-gray-500 italic">
            <p className="text-xl font-medium">No Interaction</p>
            <p className="text-sm">Start a conversation to see your analytics!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;