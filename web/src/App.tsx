import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';

import logoImg from './assets/logo.svg';

function App() {
 return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
        <img src={logoImg} alt=""/>

        <h1 className='text-6xl text-white font-black mt-20'> 
            Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
        </h1>

        <div className='grid grid-cols-6 gap-6 mt-16'>
            <a href='' className='relative rounded-lg'>
                <img src="./src/assets/game-1.png"/>

                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                    <strong className="font-bold text-white block ">Leage of Legends</strong>
                    <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg'>
                <img src="./src/assets/game-2.png"/>

                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                    <strong className="font-bold text-white block ">Apex Legends</strong>
                    <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg'>
                <img src="./src/assets/game-3.png"/>

                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                    <strong className="font-bold text-white block ">Counter Striker</strong>
                    <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg'>
                <img src="./src/assets/game-4.png"/>

                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                    <strong className="font-bold text-white block ">World of Warcraft</strong>
                    <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg'>
                <img src="./src/assets/game-5.png"/>

                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                    <strong className="font-bold text-white block ">Dota 2</strong>
                    <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
                </div>
            </a>
            <a href='' className='relative rounded-lg'>
                <img src="./src/assets/game-6.png"/>

                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                    <strong className="font-bold text-white block ">Fortnite</strong>
                    <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
                </div>
            </a>
        </div>

        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
            <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
                <div>
                    <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
                </div>
                <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 rounded text-white flex items-center gap-3'>
                    <MagnifyingGlassPlus size={24}/>
                    Publicar anúncio
                </button>
            </div>
        </div>
    </div>
 )
}

export default App