import { FC, ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";

require("@solana/wallet-adapter-react-ui/styles.css");

// Custom hook for creating wallet adapters
const useWallets = () => {
  return useMemo(() => {
    return [
      new walletAdapterWallets.PhantomWalletAdapter(),
      new walletAdapterWallets.SolflareWalletAdapter(),
    ];
  }, []);
};

// Error boundary to handle connection or wallet errors
const ErrorBoundary: FC<{ children: ReactNode }> = ({ children }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error("Error in WalletContextProvider:", error);
    return <div>Error loading wallet context.</div>;
  }
};

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const endpoint = process.env.REACT_APP_SOLANA_ENDPOINT || web3.clusterApiUrl("devnet");
  const wallets = useWallets();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
