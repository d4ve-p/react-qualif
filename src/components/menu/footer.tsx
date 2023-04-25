import { useContext } from "react";
import { ThemeContext } from "@/lib/theme_context";
import Image from "next/image";
import Link from "next/link";


function Footer() {
    let { theme } = useContext(ThemeContext);

    return (
        <footer className={`${theme.background}  max-w-full text-slate-300 flex flex-row items-center justify-around fixed bottom-0 left-0 right-0`} style={{height: "10vh"}}>
            <Link href="/">
            <div className="flex flex-col content-center items-center">
                <Image src="/home.svg" alt="home" width={40} height={40}></Image>
                <p className={`${theme.textColor}`}>Home</p>
            </div>
            </Link>
            <Link href="/search">
            <div className="flex flex-col content-center items-center">
                <Image src="/search.svg" alt="home" width={40} height={40}></Image>
                <p className={`${theme.textColor}`}>Search</p>
            </div>
            </Link>
            <Link href="/favourites">
            <div className="flex flex-col content-center items-center">
                <Image src="/heart.svg" alt="favourite" width={40} height={40}></Image>
                <p className={`${theme.textColor}`}>Marry List</p>
            </div>
            </Link>
        </footer>
    );
}

export default Footer;