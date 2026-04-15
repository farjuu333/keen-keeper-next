import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
// add metadata
export const metadata = {
  title: "404 - Page Not Found | KeenKeeper",
  description: "The page you are looking for does not exist on KeenKeeper.",
};

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="text-[120px] font-extrabold text-[#244D3F] leading-none mb-10">
        404
      </h1>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Page Not Found
      </h2>
      <p className="text-center text-gray-500 max-w-[420px] mb-12">
        Looks like this friendship link is broken. The page you're looking for
        doesn't exist or has been moved.
      </p>

      <Link href="/">
        <button 
          className="flex items-center gap-3 px-8 py-3.5 bg-[#244D3F] text-white rounded-full font-semibold hover:bg-[#1f4236] transition-all"
        >
          <RiHome2Line className="text-xl"/>
          <span>Back to Home</span>
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;