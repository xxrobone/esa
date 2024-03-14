export interface GameplayLogType {
    _id: string;
    userId: string;
    gameId: string;
    betAmount: number;
    payoutAmount: number;
    outcome: string;
    timestamp: string;
    winningAmount: number;
    hash: string;
    playerAddress: string;
    gameName: string;
    name: string | null;
    operatorCode: string;
    chainId: number;
    token: string;
  }
  
  const mockData: GameplayLogType[] = [
    {
        _id: "65e752379c2e1c873e39626b",
        userId: "65d4b5cded8b524c02982fef",
        gameId: "pgp_7_monkeys",
        betAmount: 0.7,
        payoutAmount: 0,
        outcome: "Lose",
        timestamp: "1709658679130",
        winningAmount: 0,
        hash: "ba13cc8d-6260-52a7-b5d8-28240477e1fa",
        playerAddress: "0x61c8dbb4af6e1b049ead3bcaa345df5708fbaa38",
        gameName: "7 Monkeys",
        name: null,
        operatorCode: "CASIN0X",
        chainId: 51,
        token: "0xfba6ced88170e86da9f49902055cf80a62f1ac4a"
      },
    // Add other objects here
  ];
  
  export default mockData;
  