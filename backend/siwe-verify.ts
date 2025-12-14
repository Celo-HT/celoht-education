import { SiweMessage } from "siwe";

export async function verifySIWE({
  message,
  signature,
  expectedDomain,
  expectedChainId,
  nonceFromDB
}: {
  message: string;
  signature: string;
  expectedDomain: string;
  expectedChainId: number;
  nonceFromDB: string;
}) {
  const siwe = new SiweMessage(message);

  const result = await siwe.verify({
    signature,
    domain: expectedDomain,
    nonce: nonceFromDB,
    chainId: expectedChainId
  });

  if (!result.success) throw new Error("SIWE verification failed");
  return result;
}