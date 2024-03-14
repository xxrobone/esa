import React, { useState, useEffect } from 'react';
import styles from './table.module.scss'; // Import SCSS module
import TableHeadCell from './TableHeadCell';
import TableRowCell from './TableRowCell';

interface BankrollType {
  contractAddress: string;
  token: {
    symbol: string;
  };
}

interface GameplayLogType {
  timestamp: string;
  gameName: string;
  playerAddress: string;
  betAmount: number;
  winningAmount?: number;
  outcome: string;
  payoutAmount: number;
}

interface LiveBetsProps {
  bankroll: BankrollType;
  gameplayLogs: GameplayLogType[];
}

const LiveBets: React.FC<LiveBetsProps> = ({ bankroll, gameplayLogs }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  // Set initial state based on bankroll data
  useEffect(() => {
    if (gameplayLogs) {
      setIsOpen(Array(gameplayLogs.length).fill(false));
    }
  }, [gameplayLogs]);

  const handleClick = (index: number) => {
    setSelectedRow((prevIndex) => (prevIndex === index ? null : index));
    setIsOpen((prevIsOpen) =>
      prevIsOpen.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  const calcMultiplier = (betAmount: number, winningAmount?: number) =>
    winningAmount ? ((winningAmount + betAmount) / betAmount).toFixed(2) : '0';

  const calcProfit = (outcome: string, betAmount: number, payoutAmount: number = 0) =>
    outcome.toLowerCase() === 'win' ? payoutAmount : payoutAmount - betAmount;

  return (
    <div className={styles['live-bets']}>
      <div className={styles['table-container']}>
        <table className={styles['table']}>
          <thead>
            <tr>
              <TableHeadCell align="left">Time</TableHeadCell>
              <TableHeadCell align="left">Game</TableHeadCell>
              <TableHeadCell align="left">Player</TableHeadCell>
              <TableHeadCell align="right">Bet Amount</TableHeadCell>
              <TableHeadCell align="right">Multiplier</TableHeadCell>
              <TableHeadCell align="right">Payout</TableHeadCell>
            </tr>
          </thead>
          <tbody>
            {gameplayLogs &&
              gameplayLogs.map((row, index) => (
                <tr
                  key={index}
                  className={isOpen[index] ? styles['open'] : ''}
                  onClick={() => handleClick(index)}
                >
                  <TableRowCell align="left">
                    {row?.timestamp ? row.timestamp : '-'}
                  </TableRowCell>
                  <TableRowCell align="left">{row ? row.gameName : '-'}</TableRowCell>
                  <TableRowCell align="left">
                    {row?.playerAddress ? row.playerAddress : '-'}
                  </TableRowCell>
                  <TableRowCell align="right">
                    {row ? row.betAmount.toFixed(2) : '-'}
                  </TableRowCell>
                  <TableRowCell align="right">
                    {row ? calcMultiplier(row.betAmount, row.winningAmount) : '-'}x
                  </TableRowCell>
                  <TableRowCell align="right">
                    {row ? calcProfit(row.outcome, row.betAmount, row.payoutAmount) : '-'}
                  </TableRowCell>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveBets;
