import Image from 'next/image'
import localfont from 'next/font/local'
import { ThemeContext } from '@/lib/theme_context';
import { useContext } from 'react';

const titleFont = localfont({src: './OMEGLE.ttf'});

function Header() {
    let { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className={`${theme.background} max-w-full text-slate-300 flex flex-row justify-between items-center m-0`} style={{height: "10.25vh"}}>
            <Image className="pl-4" src="/astolfo.png" alt="astolfo" width="70" height="70"/>
            <span className={`${titleFont.className} text-3xl`}>PiBU (Mobile)</span>
            <Image className="pr-4" src="/light_mode.webp" alt="dark_mode" width="70" height="70" onClick={toggleTheme}/>
        </header>
    )
}

export default Header;