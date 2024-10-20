import { GameInfo } from './game-info';
import { GameCell } from './game-cell';
import { ResetButton } from './reset-button';
import { useGameState } from './use-game-state';

export function Game() {
  const { cells, currentStep, winnerSequence, handleCellClick, resetGame, winnerSymbol, isDraw } =
    useGameState();

  return (
    <div className='flex flex-col items-center w-40 mx-auto my-24 border border-black p-5'>
      <GameInfo isDraw={isDraw} winnerSymbol={winnerSymbol} currentStep={currentStep} />
      <div className='grid grid-cols-3 grid-rows-3 gap-0 w-[90px] h-[90px] p-[1px]'>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <ResetButton onClick={resetGame} />
    </div>
  );
}
