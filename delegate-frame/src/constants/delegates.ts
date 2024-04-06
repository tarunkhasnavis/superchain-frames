export type AddressMapping = {
  name: string;
  statement: string;
  image: string;
};

export const delegates: Record<string, AddressMapping> = {
  "0xF4B0556B9B6F53E00A1FDD2b0478Ce841991D8fA": {
    name: "olimpio.eth",
    statement: "I am a strong believer in the power of decentralization and the importance of public goods funding. My passion for cryptocurrencies and the financial freedom greatly aligns with the goals of the Optimism network.",
    image: "https://ipfs.io/ipfs/bafybeia6dd6uymusy435c2soikw3jxtgguxiatofex7zy27tmofilvybgy/image",
  },
  "0x5e349eca2dc61aBCd9dD99Ce94d04136151a09Ee": {
    name: "lindajxie.eth",
    statement: "I want to further support the important work that Optimism is doing on scaling. I’m also passionate about public goods funding and governance experimentation.",
    image: "https://cryptocoven.s3.amazonaws.com/54986ff127ad77379a722350c2331e55.png",
  },
};