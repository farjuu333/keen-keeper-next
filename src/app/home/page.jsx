import Banner from "@/components/shared/homepage/Banner";
import FriendApps from "@/components/shared/homepage/FriendApps";
import { Suspense } from "react";
import { SyncLoader } from "react-spinners"; 

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container mx-auto px-4">
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center py-20 gap-4">
              <SyncLoader color="#10b981" size={15} />
              <p className="text-gray-400 font-medium animate-pulse text-sm uppercase tracking-widest">
                Loading Friends...
              </p>
            </div>
          }
        >
          <FriendApps from="homepage" />
        </Suspense>
      </div>
    </main>
  );
}