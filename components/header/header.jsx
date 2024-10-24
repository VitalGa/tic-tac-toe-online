import logoSrc from './logo.svg';
import Image from 'next/image';
import { Profile } from '../profile';
import { ArrowDownIcon } from './icons/arrow-down-icon';

export default function Header() {
  return (
    <header className='flex h-24 items-center px-8 bg-white shadow-lg'>
      <Image src={logoSrc} alt='logo' />
      <div className='w-px h-8 bg-slate-200 mx-8' />
      <button className='w-44 bg-teal-600 hover:bg-teal-500 transition-colors text-white rounded-lg px-5 py-2 text-2xl leading-tight'>
        Играть
      </button>
      <button className='ml-auto flex items-center gap-2   text-teal-600 '>
        <Profile />

        <ArrowDownIcon />
      </button>
    </header>
  );
}
