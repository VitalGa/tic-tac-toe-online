import clsx from 'clsx';
import { GameSymbol } from './game-symbol';

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={`border border-gray-400 m-[-1px] flex items-center justify-center bg-transparent ${
        isWinner ? 'bg-red-500 bg-opacity-10' : ''
      }`}
      onClick={onClick}>
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
