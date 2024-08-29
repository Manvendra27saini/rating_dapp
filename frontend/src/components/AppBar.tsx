import { FC } from "react";
import dynamic from "next/dynamic";
import { AiOutlineUser } from 'react-icons/ai'; // Ensure react-icons is installed
import { HiHome } from 'react-icons/hi'; // Import Home icon from react-icons

// Dynamically import WalletMultiButton with SSR turned off
const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  {
    ssr: false,
  }
);

export const AppBar: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full p-0 bg-gray-600 text-white shadow-md">
      {/* Container for Home Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-0 mt-4 ml-4 flex items-center justify-center w-20 h-20 bg-gray-600 text-white rounded-full border border-gray-400 hover:bg-gray-500"
      >
        <HiHome size={30} />
      </button>

      {/* Container for other buttons */}
      <div className="absolute top-0 right-0 mt-4 mr-4 flex items-center space-x-4 bg-gray-700 p-2 rounded-md">
        {/* Profile Button */}
        <button className="flex items-center justify-center w-10 h-10 bg-gray-600 text-white rounded-full border border-gray-500 hover:bg-gray-500">
          <AiOutlineUser size={20} />
        </button>

        {/* Wallet Multi Button */}
        <div className="border border-gray-500 rounded-md">
          <WalletMultiButton className="bg-primary text-white border-none px-4 py-2 rounded-md hover:bg-primary-dark" />
        </div>
      </div>
    </div>
  );
};
