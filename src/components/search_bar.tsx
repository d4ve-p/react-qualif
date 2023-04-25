import { ThemeContext } from "@/lib/theme_context";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

function SearchBar() {
    let { theme } = useContext(ThemeContext);
    const router = useRouter();

    const submit = (e: any) => {
        e.preventDefault();
        
        let characterName = e.target.searchbar.value;
        router.push(`/search/${characterName}`);
    }
    
    return (
        <div className="flex flex-row items-center m-2">
            <div className="flex flex-row items-center" style={{width:"10%"}}>
            <Image src="/search.svg" alt="search" width={40} height={40}></Image>
            </div>
            <div className="flex flex-row items-center col-span-5" style={{width:"90%"}}>
            <form onSubmit={submit} style={{width: "100%"}}>
                <input name="searchbar" type="text" style={{width: "100%"}} className={`${theme.textArea} shadow appearance-none border rounded w-full py-2 px-3 ${theme.textColor} leading-tight focus:outline-none focus:shadow-outline`}></input>
                <input type="submit" style={{display:"none"}}></input>
            </form>
            </div>
        </div>
    )
}

export default SearchBar;