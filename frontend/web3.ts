import { ethers } from "ethers";

const CELO_CHAIN_ID = 42220;

export async function getCeloProvider() {
  if (!window.ethereum) throw new Error("Wallet not found");

  const provider = new ethers.BrowserProvider(window.ethereum);
  const network = await provider.getNetwork();

  if (Number(network.chainId) !== CELO_CHAIN_ID) {
    throw new Error("Wrong network: Celo required");
  }

  return provider;
}